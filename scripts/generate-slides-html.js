const fs = require('fs');
const path = require('path');

// Read the slides data - we'll need to parse the TypeScript file
const slidesDataPath = path.join(__dirname, '../src/data/slidesData.ts');
const slidesDataContent = fs.readFileSync(slidesDataPath, 'utf8');

// Extract just the sessions array content
const sessionsMatch = slidesDataContent.match(/export const sessions: Session\[\] = (\[[\s\S]*?\n\]);/);

if (!sessionsMatch) {
    console.error('Could not extract sessions data from slidesData.ts');
    process.exit(1);
}

let sessionsData = sessionsMatch[1];

// Remove TypeScript-specific syntax
sessionsData = sessionsData
    .replace(/'/g, '"')  // Replace single quotes with double quotes
    .replace(/(\w+):/g, '"$1":');  // Quote object keys

// Read the HTML template
const htmlTemplatePath = path.join(__dirname, '../generate-pdf.html');
let htmlContent = fs.readFileSync(htmlTemplatePath, 'utf8');

// Replace the placeholder with actual data
htmlContent = htmlContent.replace('[SLIDES_DATA_PLACEHOLDER]', sessionsData);

// Write the complete HTML file
const outputPath = path.join(__dirname, '../slides-export.html');
fs.writeFileSync(outputPath, htmlContent);

console.log('✓ Generated slides-export.html');
console.log('  You can open this file in a browser and use the "Generate PDF" button');
console.log(`  File location: ${outputPath}`);
