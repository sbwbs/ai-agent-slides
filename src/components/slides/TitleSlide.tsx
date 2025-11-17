import { SlideContent } from '../../types/slides';
import * as LucideIcons from 'lucide-react';

interface TitleSlideProps {
  slide: SlideContent;
}

export default function TitleSlide({ slide }: TitleSlideProps) {
  // Dynamically get icon component
  const IconComponent = slide.icon
    ? (LucideIcons as any)[slide.icon] || null
    : null;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white p-16">
      <div className="text-center space-y-8 fade-in-up">
        {IconComponent && (
          <div className="mb-6">
            <IconComponent className="w-40 h-40 mx-auto opacity-80" strokeWidth={1} />
          </div>
        )}
        <h1 className="text-8xl font-bold mb-4 tracking-tight">
          {slide.title}
        </h1>
        {slide.subtitle && (
          <h2 className="text-5xl font-light opacity-90">
            {slide.subtitle}
          </h2>
        )}
        {slide.content && (
          <p className="text-3xl opacity-80 mt-8">
            {slide.content}
          </p>
        )}
      </div>
    </div>
  );
}
