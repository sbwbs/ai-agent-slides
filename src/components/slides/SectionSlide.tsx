import { SlideContent } from '../../types/slides';
import * as LucideIcons from 'lucide-react';

interface SectionSlideProps {
  slide: SlideContent;
}

export default function SectionSlide({ slide }: SectionSlideProps) {
  // Dynamically get icon component
  const IconComponent = slide.icon
    ? (LucideIcons as any)[slide.icon] || null
    : null;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-16">
      <div className="text-center space-y-8 fade-in-up">
        {IconComponent && (
          <div className="mb-6">
            <IconComponent className="w-32 h-32 mx-auto opacity-80" strokeWidth={1.5} />
          </div>
        )}
        {slide.sessionNumber !== undefined && (
          <div className="text-2xl font-light opacity-80">
            Session {slide.sessionNumber}
          </div>
        )}
        <h1 className="text-7xl font-bold tracking-tight">
          {slide.title}
        </h1>
        {slide.sessionTitle && (
          <h2 className="text-3xl font-light opacity-90 mt-6">
            {slide.sessionTitle}
          </h2>
        )}
      </div>
    </div>
  );
}
