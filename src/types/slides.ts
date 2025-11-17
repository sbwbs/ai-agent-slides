export interface SlideContent {
  id: number;
  type: 'title' | 'section' | 'content' | 'bullets' | 'two-column' | 'quote' | 'image-text';
  title?: string;
  subtitle?: string;
  content?: string;
  bullets?: string[];
  leftContent?: string;
  rightContent?: string;
  leftBullets?: string[];
  rightBullets?: string[];
  quote?: string;
  author?: string;
  highlight?: string;
  sessionNumber?: number;
  sessionTitle?: string;
  icon?: string; // lucide-react icon name
}

export interface Session {
  id: number;
  title: string;
  slides: SlideContent[];
}
