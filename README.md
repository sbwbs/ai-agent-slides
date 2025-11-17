# LLMs and AI Agents: Past, Present, and Future

An interactive React-based presentation about LLMs, AI Agents, and their impact on education and work.

## Features

- **62 Professional Slides** organized into 10 instructive sessions
- **Keyboard Navigation**: Use arrow keys, space, or Home key
- **Multiple Slide Types**: Title, Section, Bullets, Two-Column, and Quote slides
- **Smooth Animations**: Professional transitions and fade-in effects
- **Progress Tracking**: Visual progress bar and session indicators
- **Responsive Design**: Built with React, TypeScript, and Tailwind CSS

## Sessions Overview

1. **Introduction** - Title and session overview
2. **Foundations of AI and LLMs** - Core principles and concepts
3. **Early AI and My Journey** - Historical context and personal experiences
4. **Applied Work at SendBird** - Building production AI chatbots
5. **How LLMs Work** - Technical deep dive (simplified)
6. **Augmenting LLMs** - Vectors, embeddings, and RAG
7. **Extending LLMs: Tools and Agents** - MCP, A2A, and agentic systems
8. **LLMs in Education** - Impact on learning and teaching
9. **LLMs in the Workplace** - Productivity and transformation
10. **The Future** - What lies ahead and key takeaways

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Navigation Controls

- **Next Slide**: Right Arrow (→) or Space
- **Previous Slide**: Left Arrow (←)
- **First Slide**: Home key
- **Mouse Navigation**: Click the navigation buttons at the bottom

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling and design
- **Lucide React** - Icon library

## Project Structure

```
src/
├── components/
│   ├── SlidePresentation.tsx    # Main presentation component
│   └── slides/                   # Individual slide type components
│       ├── TitleSlide.tsx
│       ├── SectionSlide.tsx
│       ├── BulletsSlide.tsx
│       ├── TwoColumnSlide.tsx
│       └── QuoteSlide.tsx
├── data/
│   └── slidesData.ts            # All slide content
├── types/
│   └── slides.ts                # TypeScript interfaces
├── App.tsx                      # Root component
├── main.tsx                     # Entry point
└── index.css                    # Global styles
```

## Customization

To modify the slide content:

1. Edit `src/data/slidesData.ts`
2. Add, remove, or modify slides in the `sessions` array
3. Each slide has a type and corresponding properties
4. The presentation automatically updates

## License

This presentation is for educational purposes.

## Author

Created with insights from experiences with LLMs, AI agents, and work at SendBird.
