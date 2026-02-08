# Skill: Secure Web Scraping Pattern

## Context
Used for safely scraping web data with security verification. Given the security concerns with ClawHub skills (341 malicious skills identified), this pattern ensures safe web scraping practices with verification steps before execution.

## Security Verification Steps
1. Verify the skill source is legitimate
2. Check for VirusTotal verification if available
3. Review code for malicious patterns before execution
4. Execute in isolated/sandboxed environment

## The Pattern (Code Snippet)

### 1. Secure Web Scraping Setup
```javascript
// Secure web scraping with verification and rate limiting
class SecureWebScraper {
  constructor(options = {}) {
    this.options = {
      timeout: 10000,
      maxRedirects: 5,
      userAgent: 'Mozilla/5.0 (compatible; SecureScraper/1.0)',
      rateLimit: 1000, // 1 request per second
      ...options
    };
  }

  // Verify URL is safe before scraping
  async verifyUrlSafety(url) {
    try {
      // Basic validation
      const parsed = new URL(url);
      
      // Check for suspicious patterns
      if (parsed.protocol !== 'https:' && !parsed.hostname.includes('localhost')) {
        throw new Error('Only HTTPS URLs allowed for security');
      }
      
      // Additional security checks can be added here
      return true;
    } catch (error) {
      throw new Error(`Invalid URL: ${error.message}`);
    }
  }

  // Safe scraping method
  async scrapePage(url, selectors) {
    await this.verifyUrlSafety(url);
    
    // Use safe scraping method (avoid eval and direct execution)
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': this.options.userAgent,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate',
        'Connection': 'keep-alive',
      },
      timeout: this.options.timeout
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const html = await response.text();
    return this.parseHTML(html, selectors);
  }

  // Parse HTML safely without eval
  parseHTML(html, selectors) {
    // Create a safe DOM parser
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    const results = {};
    for (const [key, selector] of Object.entries(selectors)) {
      const elements = doc.querySelectorAll(selector);
      results[key] = Array.from(elements).map(el => el.textContent.trim());
    }
    
    return results;
  }
}
```

### 2. Alternative: Playwright with Security
```javascript
// More robust scraping with Playwright (browser automation)
import { chromium } from 'playwright';

class SecureBrowserScraper {
  constructor(options = {}) {
    this.options = {
      headless: true,
      timeout: 30000,
      viewport: { width: 1280, height: 720 },
      ...options
    };
  }

  async scrapeSecurely(url, actions) {
    // Verify URL first
    await this.verifyUrlSafety(url);
    
    const browser = await chromium.launch(this.options);
    const page = await browser.newPage();
    
    try {
      // Set security headers
      await page.setExtraHTTPHeaders({
        'Accept-Language': 'en-US,en;q=0.9',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
      });
      
      // Navigate with timeout
      await page.goto(url, { 
        waitUntil: 'networkidle', 
        timeout: this.options.timeout 
      });
      
      // Execute safe actions
      const results = {};
      for (const action of actions) {
        const result = await this.executeSafeAction(page, action);
        if (action.storeAs) {
          results[action.storeAs] = result;
        }
      }
      
      return results;
    } finally {
      await browser.close();
    }
  }

  async executeSafeAction(page, action) {
    switch (action.type) {
      case 'extract':
        return await page.locator(action.selector).textContent();
      case 'extractAll':
        const elements = await page.locator(action.selector).all();
        return Promise.all(elements.map(el => el.textContent()));
      case 'screenshot':
        if (action.path) {
          await page.screenshot({ path: action.path });
        }
        return 'screenshot_taken';
      case 'waitFor':
        await page.waitForSelector(action.selector, { timeout: 10000 });
        return 'element_found';
      default:
        throw new Error(`Unsupported action type: ${action.type}`);
    }
  }

  async verifyUrlSafety(url) {
    const parsed = new URL(url);
    
    // Disallow potentially dangerous protocols
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      throw new Error('Invalid protocol');
    }
    
    // Add more security checks as needed
    return true;
  }
}
```

### 3. Usage Example with Security Checks
```javascript
// Example usage for fashion store scraping
async function scrapeFashionStore(storeUrl) {
  const scraper = new SecureBrowserScraper();
  
  const actions = [
    {
      type: 'extractAll',
      selector: '.product-title, .product-name, h3', // Product titles
      storeAs: 'titles'
    },
    {
      type: 'extractAll', 
      selector: '.price, .cost, .amount', // Prices
      storeAs: 'prices'
    },
    {
      type: 'extractAll',
      selector: '.product-image, img[src*="product"]', // Images
      storeAs: 'images'
    }
  ];

  try {
    const data = await scraper.scrapeSecurely(storeUrl, actions);
    return data;
  } catch (error) {
    console.error('Scraping failed:', error);
    throw error;
  }
}
```

## Security Best Practices
- Always verify URLs before scraping
- Implement rate limiting to avoid overwhelming servers
- Use appropriate User-Agent headers
- Respect robots.txt when possible
- Handle errors gracefully
- Sanitize all extracted data
- Never execute scraped code directly
- Run in isolated environment when possible

## Sources
- https://blog.virustotal.com/2026/02/from-automation-to-infection-how.html
- https://thehackernews.com/2026/02/researchers-find-341-malicious-clawhub.html
- https://playwright.dev/
- Security best practices for web scraping