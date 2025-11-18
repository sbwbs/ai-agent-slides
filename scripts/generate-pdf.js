import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Page dimensions (16:9 aspect ratio, similar to slides)
const PAGE_WIDTH = 842; // A4 landscape width in points
const PAGE_HEIGHT = 595; // A4 landscape height in points
const MARGIN = 60;
const CONTENT_WIDTH = PAGE_WIDTH - (MARGIN * 2);

// Read and parse the slides data
const slidesDataPath = path.join(__dirname, '../src/data/slidesData.ts');
const slidesContent = fs.readFileSync(slidesDataPath, 'utf8');

// Extract sessions array - simple parser for our specific format
function parseSlidesData() {
    const sessions = [];
    const sessionMatches = slidesContent.matchAll(/\{\s*id:\s*(\d+),\s*title:\s*["']([^"']+)["'],\s*slides:\s*\[([\s\S]*?)\]\s*\}/g);

    for (const sessionMatch of sessionMatches) {
        const sessionId = parseInt(sessionMatch[1]);
        const sessionTitle = sessionMatch[2];
        const slidesBlock = sessionMatch[3];

        const session = {
            id: sessionId,
            title: sessionTitle,
            slides: []
        };

        // Parse individual slides
        const slideMatches = slidesBlock.matchAll(/\{[\s\S]*?(?=\},\s*\{|\}\s*$)/g);

        for (const slideMatch of slideMatches) {
            const slideText = slideMatch[0] + '}';

            const slide = {
                id: extractField(slideText, 'id', 'number'),
                type: extractField(slideText, 'type'),
                title: extractField(slideText, 'title'),
                subtitle: extractField(slideText, 'subtitle'),
                content: extractField(slideText, 'content'),
                sessionNumber: extractField(slideText, 'sessionNumber', 'number'),
                sessionTitle: extractField(slideText, 'sessionTitle'),
                bullets: extractArray(slideText, 'bullets'),
                leftContent: extractField(slideText, 'leftContent'),
                rightContent: extractField(slideText, 'rightContent'),
                leftBullets: extractArray(slideText, 'leftBullets'),
                rightBullets: extractArray(slideText, 'rightBullets'),
                highlight: extractField(slideText, 'highlight'),
                quote: extractField(slideText, 'quote'),
                author: extractField(slideText, 'author')
            };

            session.slides.push(slide);
        }

        sessions.push(session);
    }

    return sessions;
}

function extractField(text, field, type = 'string') {
    const regex = new RegExp(`${field}:\\s*['"]([^'"\\\\]*(?:\\\\.[^'"\\\\]*)*)['"]`, 's');
    const match = text.match(regex);
    if (match) {
        return type === 'number' ? parseInt(match[1]) : match[1].replace(/\\'/g, "'");
    }
    return type === 'number' ? undefined : '';
}

function extractArray(text, field) {
    const regex = new RegExp(`${field}:\\s*\\[([^\\]]+)\\]`, 's');
    const match = text.match(regex);
    if (!match) return [];

    const items = [];
    const itemMatches = match[1].matchAll(/['"]([^'"\\\\]*(?:\\\\.[^'"\\\\]*)*)['"] ,?/g);

    for (const item of itemMatches) {
        items.push(item[1].replace(/\\'/g, "'"));
    }

    return items;
}

// Create PDF
function createPDF() {
    const doc = new PDFDocument({
        size: [PAGE_WIDTH, PAGE_HEIGHT],
        margin: 0,
        info: {
            Title: 'LLMs and AI Agents: Past, Present, and Future',
            Author: 'Wonbae Suh'
        }
    });

    const outputPath = path.join(__dirname, '../AI-Agent-Slides.pdf');
    const stream = fs.createWriteStream(outputPath);
    doc.pipe(stream);

    const sessions = parseSlidesData();
    let isFirstPage = true;

    sessions.forEach((session, sessionIndex) => {
        session.slides.forEach((slide, slideIndex) => {
            if (!isFirstPage) {
                doc.addPage();
            }
            isFirstPage = false;

            renderSlide(doc, slide, sessionIndex + 1);
        });
    });

    doc.end();

    stream.on('finish', () => {
        console.log('✓ PDF generated successfully!');
        console.log(`  File: ${outputPath}`);
        console.log(`  Total pages: ${sessions.reduce((sum, s) => sum + s.slides.length, 0)}`);
    });
}

function renderSlide(doc, slide, sessionNum) {
    // Background
    if (slide.type === 'title' || slide.type === 'section') {
        // Gradient-like effect with rectangles
        doc.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT)
           .fill('#667eea');
    } else if (slide.type === 'quote') {
        doc.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT)
           .fill('#f9fafb');
    } else {
        doc.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT)
           .fill('#ffffff');
    }

    let y = MARGIN;

    switch(slide.type) {
        case 'title':
            renderTitleSlide(doc, slide, y);
            break;
        case 'section':
            renderSectionSlide(doc, slide, y);
            break;
        case 'bullets':
            renderBulletsSlide(doc, slide, y);
            break;
        case 'two-column':
            renderTwoColumnSlide(doc, slide, y);
            break;
        case 'quote':
            renderQuoteSlide(doc, slide, y);
            break;
    }

    // Page number (except for title slides)
    if (slide.type !== 'title') {
        doc.fontSize(10)
           .fillColor('#999999')
           .text(`${slide.id + 1}`, MARGIN, PAGE_HEIGHT - 30, {
               width: CONTENT_WIDTH,
               align: 'center'
           });
    }
}

function renderTitleSlide(doc, slide, y) {
    y = PAGE_HEIGHT / 2 - 100;

    doc.fontSize(48)
       .fillColor('#ffffff')
       .font('Helvetica-Bold')
       .text(slide.title || '', MARGIN, y, {
           width: CONTENT_WIDTH,
           align: 'center'
       });

    if (slide.subtitle) {
        y += 70;
        doc.fontSize(32)
           .fillColor('#ffffff')
           .font('Helvetica')
           .text(slide.subtitle, MARGIN, y, {
               width: CONTENT_WIDTH,
               align: 'center'
           });
    }

    if (slide.content) {
        y += 60;
        doc.fontSize(20)
           .fillColor('rgba(255,255,255,0.9)')
           .text(slide.content, MARGIN, y, {
               width: CONTENT_WIDTH,
               align: 'center'
           });
    }
}

function renderSectionSlide(doc, slide, y) {
    y = PAGE_HEIGHT / 2 - 80;

    if (slide.sessionNumber !== undefined) {
        doc.fontSize(16)
           .fillColor('rgba(255,255,255,0.8)')
           .font('Helvetica')
           .text(`Session ${slide.sessionNumber}`, MARGIN, y, {
               width: CONTENT_WIDTH,
               align: 'center'
           });
        y += 30;
    }

    doc.fontSize(42)
       .fillColor('#ffffff')
       .font('Helvetica-Bold')
       .text(slide.title || '', MARGIN, y, {
           width: CONTENT_WIDTH,
           align: 'center'
       });

    if (slide.sessionTitle) {
        y += 60;
        doc.fontSize(24)
           .fillColor('rgba(255,255,255,0.9)')
           .font('Helvetica')
           .text(slide.sessionTitle, MARGIN, y, {
               width: CONTENT_WIDTH,
               align: 'center'
           });
    }
}

function renderBulletsSlide(doc, slide, y) {
    doc.fontSize(32)
       .fillColor('#1f2937')
       .font('Helvetica-Bold')
       .text(slide.title || '', MARGIN, y, {
           width: CONTENT_WIDTH
       });

    y += 50;

    if (slide.subtitle) {
        doc.fontSize(20)
           .fillColor('#667eea')
           .font('Helvetica')
           .text(slide.subtitle, MARGIN, y, {
               width: CONTENT_WIDTH
           });
        y += 35;
    }

    if (slide.bullets && slide.bullets.length > 0) {
        const bulletSpacing = Math.min(35, (PAGE_HEIGHT - y - 100 - (slide.highlight ? 60 : 0)) / slide.bullets.length);

        slide.bullets.forEach((bullet, index) => {
            doc.fontSize(16)
               .fillColor('#1f2937')
               .font('Helvetica')
               .text('•', MARGIN, y, { continued: true })
               .text(`  ${bullet}`, { width: CONTENT_WIDTH - 20 });

            y += bulletSpacing;
        });
    }

    if (slide.highlight) {
        y += 20;
        doc.rect(MARGIN, y, CONTENT_WIDTH, 50)
           .fill('#fef3c7');

        doc.rect(MARGIN, y, 4, 50)
           .fill('#f59e0b');

        doc.fontSize(15)
           .fillColor('#92400e')
           .font('Helvetica-Oblique')
           .text(slide.highlight, MARGIN + 20, y + 15, {
               width: CONTENT_WIDTH - 40
           });
    }
}

function renderTwoColumnSlide(doc, slide, y) {
    doc.fontSize(28)
       .fillColor('#1f2937')
       .font('Helvetica-Bold')
       .text(slide.title || '', MARGIN, y, {
           width: CONTENT_WIDTH
       });

    y += 45;

    if (slide.subtitle) {
        doc.fontSize(18)
           .fillColor('#667eea')
           .font('Helvetica')
           .text(slide.subtitle, MARGIN, y, {
               width: CONTENT_WIDTH
           });
        y += 30;
    }

    const columnWidth = (CONTENT_WIDTH - 40) / 2;
    const leftX = MARGIN;
    const rightX = MARGIN + columnWidth + 40;

    // Left column
    let leftY = y;
    if (slide.leftContent) {
        doc.fontSize(20)
           .fillColor('#667eea')
           .font('Helvetica-Bold')
           .text(slide.leftContent, leftX, leftY, {
               width: columnWidth
           });
        leftY += 35;
    }

    if (slide.leftBullets && slide.leftBullets.length > 0) {
        const bulletSpacing = Math.min(30, (PAGE_HEIGHT - leftY - 120) / slide.leftBullets.length);

        slide.leftBullets.forEach(bullet => {
            doc.fontSize(14)
               .fillColor('#1f2937')
               .font('Helvetica')
               .text('•', leftX, leftY, { continued: true })
               .text(`  ${bullet}`, { width: columnWidth - 20 });

            leftY += bulletSpacing;
        });
    }

    // Right column
    let rightY = y;
    if (slide.rightContent) {
        doc.fontSize(20)
           .fillColor('#667eea')
           .font('Helvetica-Bold')
           .text(slide.rightContent, rightX, rightY, {
               width: columnWidth
           });
        rightY += 35;
    }

    if (slide.rightBullets && slide.rightBullets.length > 0) {
        const bulletSpacing = Math.min(30, (PAGE_HEIGHT - rightY - 120) / slide.rightBullets.length);

        slide.rightBullets.forEach(bullet => {
            doc.fontSize(14)
               .fillColor('#1f2937')
               .font('Helvetica')
               .text('•', rightX, rightY, { continued: true })
               .text(`  ${bullet}`, { width: columnWidth - 20 });

            rightY += bulletSpacing;
        });
    }

    if (slide.highlight) {
        const finalY = Math.max(leftY, rightY) + 20;
        doc.rect(MARGIN, finalY, CONTENT_WIDTH, 45)
           .fill('#fef3c7');

        doc.rect(MARGIN, finalY, 4, 45)
           .fill('#f59e0b');

        doc.fontSize(14)
           .fillColor('#92400e')
           .font('Helvetica-Oblique')
           .text(slide.highlight, MARGIN + 20, finalY + 12, {
               width: CONTENT_WIDTH - 40
           });
    }
}

function renderQuoteSlide(doc, slide, y) {
    y = PAGE_HEIGHT / 2 - 100;

    if (slide.quote) {
        doc.fontSize(28)
           .fillColor('#1f2937')
           .font('Helvetica-Oblique')
           .text(`"${slide.quote}"`, MARGIN + 60, y, {
               width: CONTENT_WIDTH - 120,
               align: 'center',
               lineGap: 10
           });

        y += 120;
    }

    if (slide.author) {
        doc.fontSize(20)
           .fillColor('#667eea')
           .font('Helvetica-Bold')
           .text(`— ${slide.author}`, MARGIN + 60, y, {
               width: CONTENT_WIDTH - 120,
               align: 'center'
           });
    }
}

// Run the PDF generation
createPDF();
