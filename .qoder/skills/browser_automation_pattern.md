# Skill: Browser Automation Pattern

## Context
Used for automating web browser interactions using Playwright or Puppeteer. This pattern enables AI agents to interact with websites, fill forms, scrape data, and perform testing tasks programmatically.

## The Pattern (Code Snippet)

### 1. Setup Playwright
```bash
npm install playwright
# Or for Puppeteer
npm install puppeteer
```

### 2. Basic Browser Automation Pattern
```javascript
import { chromium } from 'playwright';

async function automateBrowser(url, actions) {
  // Launch browser
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  try {
    // Navigate to URL
    await page.goto(url);
    
    // Perform actions
    for (const action of actions) {
      switch(action.type) {
        case 'fill':
          await page.fill(action.selector, action.value);
          break;
        case 'click':
          await page.click(action.selector);
          break;
        case 'waitFor':
          await page.waitForSelector(action.selector);
          break;
        case 'screenshot':
          await page.screenshot({ path: action.path });
          break;
        case 'getText':
          const text = await page.textContent(action.selector);
          return text;
      }
    }
  } finally {
    await browser.close();
  }
}
```

### 3. Advanced Pattern with Error Handling
```javascript
import { chromium } from 'playwright';

class BrowserAgent {
  constructor(options = {}) {
    this.options = {
      headless: false,
      timeout: 30000,
      ...options
    };
  }

  async runTask(url, taskDefinition) {
    const browser = await chromium.launch(this.options);
    const page = await browser.newPage();
    
    // Set default timeout
    page.setDefaultTimeout(this.options.timeout);
    
    try {
      await page.goto(url, { waitUntil: 'networkidle' });
      
      const results = {};
      
      for (const step of taskDefinition.steps) {
        const result = await this.executeStep(page, step);
        if (step.storeResult) {
          results[step.id] = result;
        }
      }
      
      return results;
    } catch (error) {
      console.error('Browser automation error:', error);
      throw error;
    } finally {
      await browser.close();
    }
  }
  
  async executeStep(page, step) {
    switch(step.action) {
      case 'click':
        await page.click(step.selector);
        break;
      case 'fill':
        await page.fill(step.selector, step.value);
        break;
      case 'select':
        await page.selectOption(step.selector, step.value);
        break;
      case 'waitFor':
        await page.waitForSelector(step.selector);
        break;
      case 'extract':
        return await page.textContent(step.selector);
      case 'screenshot':
        await page.screenshot({ path: step.path });
        break;
      case 'evaluate':
        return await page.evaluate(step.script);
    }
  }
}
```

### 4. Usage Example
```javascript
const agent = new BrowserAgent();

const task = {
  steps: [
    { action: 'fill', selector: '#search-box', value: 'fashion trends' },
    { action: 'click', selector: '#search-button' },
    { action: 'waitFor', selector: '.results-container' },
    { action: 'extract', selector: '.result-count', storeResult: true, id: 'count' },
    { action: 'screenshot', path: 'results.png' }
  ]
};

const results = await agent.runTask('https://example-store.com', task);
console.log('Results:', results);
```

## Sources
- https://github.com/lackeyjb/playwright-skill
- https://playwright.dev/
- https://pptr.dev/
- https://claudeskills.info/skill/playwright-skill/
- https://mcpservers.org/claude-skills/lackeyjb/playwright-skill