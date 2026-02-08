const fs = require('fs');
const { createCanvas } = require('canvas');

// Create 192x192 icon
const canvas192 = createCanvas(192, 192);
const ctx192 = canvas192.getContext('2d');

// Background
ctx192.fillStyle = '#09090b';
ctx192.fillRect(0, 0, 192, 192);

// Outer circle
ctx192.beginPath();
ctx192.arc(96, 96, 60, 0, Math.PI * 2);
ctx192.fillStyle = 'rgba(6, 182, 212, 0.2)';
ctx192.fill();

// Checkmark
ctx192.beginPath();
ctx192.moveTo(66, 96);
ctx192.lineTo(86, 116);
ctx192.lineTo(126, 76);
ctx192.strokeStyle = '#06b6d4';
ctx192.lineWidth = 8;
ctx192.lineCap = 'round';
ctx192.lineJoin = 'round';
ctx192.stroke();

// Inner dashed circle
ctx192.beginPath();
ctx192.arc(96, 96, 40, 0, Math.PI * 2);
ctx192.strokeStyle = '#22c55e';
ctx192.lineWidth = 4;
ctx192.setLineDash([8, 8]);
ctx192.stroke();

fs.writeFileSync('public/pwa-192x192.png', canvas192.toBuffer());

// Create 512x512 icon
const canvas512 = createCanvas(512, 512);
const ctx512 = canvas512.getContext('2d');

// Background
ctx512.fillStyle = '#09090b';
ctx512.fillRect(0, 0, 512, 512);

// Outer circle
ctx512.beginPath();
ctx512.arc(256, 256, 160, 0, Math.PI * 2);
ctx512.fillStyle = 'rgba(6, 182, 212, 0.2)';
ctx512.fill();

// Checkmark
ctx512.beginPath();
ctx512.moveTo(176, 256);
ctx512.lineTo(226, 306);
ctx512.lineTo(336, 206);
ctx512.strokeStyle = '#06b6d4';
ctx512.lineWidth = 20;
ctx512.lineCap = 'round';
ctx512.lineJoin = 'round';
ctx512.stroke();

// Inner dashed circle
ctx512.beginPath();
ctx512.arc(256, 256, 120, 0, Math.PI * 2);
ctx512.strokeStyle = '#22c55e';
ctx512.lineWidth = 12;
ctx512.setLineDash([20, 20]);
ctx512.stroke();

fs.writeFileSync('public/pwa-512x512.png', canvas512.toBuffer());

console.log('PWA icons generated successfully!');