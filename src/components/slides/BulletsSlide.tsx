import { SlideContent } from '../../types/slides';
import { CheckCircle2 } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

interface BulletsSlideProps {
  slide: SlideContent;
}

export default function BulletsSlide({ slide }: BulletsSlideProps) {
  // Dynamically get icon component
  const IconComponent = slide.icon
    ? (LucideIcons as any)[slide.icon] || null
    : null;

  return (
    <div className="w-full h-full flex bg-white">
      {/* Left side - Icon (if available) */}
      {IconComponent && (
        <div className="w-1/4 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-8">
          <IconComponent className="w-48 h-48 text-blue-600 opacity-20" strokeWidth={1} />
        </div>
      )}

      {/* Right side - Content */}
      <div className={`${IconComponent ? 'w-3/4' : 'w-full'} flex flex-col p-12 py-16`}>
        <div className="mb-6 fade-in-up">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">
            {slide.title}
          </h1>
          {slide.subtitle && (
            <h2 className="text-2xl text-gray-600 font-light">
              {slide.subtitle}
            </h2>
          )}
        </div>

        <div className="flex-1 flex flex-col justify-center space-y-5">
          {slide.bullets?.map((bullet, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CheckCircle2 className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <p className="text-2xl text-gray-800 leading-relaxed">
                {bullet}
              </p>
            </div>
          ))}
        </div>

        {slide.highlight && (
          <div className="mt-6 p-5 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg fade-in-up">
            <p className="text-xl text-blue-900 font-medium">
              💡 {slide.highlight}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
