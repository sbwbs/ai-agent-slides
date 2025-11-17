import { SlideContent } from '../../types/slides';
import { CheckCircle2 } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

interface TwoColumnSlideProps {
  slide: SlideContent;
}

export default function TwoColumnSlide({ slide }: TwoColumnSlideProps) {
  // Dynamically get icon component
  const IconComponent = slide.icon
    ? (LucideIcons as any)[slide.icon] || null
    : null;

  return (
    <div className="w-full h-full flex flex-col bg-white p-12 py-16">
      {/* Header with optional icon */}
      <div className="mb-6 fade-in-up flex items-center gap-4">
        {IconComponent && (
          <IconComponent className="w-16 h-16 text-blue-600" strokeWidth={1.5} />
        )}
        <h1 className="text-5xl font-bold text-gray-900">
          {slide.title}
        </h1>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="flex flex-col fade-in-up" style={{ animationDelay: '0.2s' }}>
          {slide.leftContent && (
            <h2 className="text-3xl font-semibold text-blue-700 mb-6">
              {slide.leftContent}
            </h2>
          )}
          <div className="flex-1 flex flex-col justify-center space-y-4">
            {slide.leftBullets?.map((bullet, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="w-7 h-7 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-xl text-gray-800 leading-relaxed">
                  {bullet}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col fade-in-up" style={{ animationDelay: '0.4s' }}>
          {slide.rightContent && (
            <h2 className="text-3xl font-semibold text-purple-700 mb-6">
              {slide.rightContent}
            </h2>
          )}
          <div className="flex-1 flex flex-col justify-center space-y-4">
            {slide.rightBullets?.map((bullet, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="w-7 h-7 text-purple-600 flex-shrink-0 mt-1" />
                <p className="text-xl text-gray-800 leading-relaxed">
                  {bullet}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {slide.highlight && (
        <div className="mt-6 p-5 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg fade-in-up">
          <p className="text-xl text-blue-900 font-medium">
            💡 {slide.highlight}
          </p>
        </div>
      )}
    </div>
  );
}
