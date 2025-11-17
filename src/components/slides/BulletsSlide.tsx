import { SlideContent } from '../../types/slides';
import { CheckCircle2 } from 'lucide-react';

interface BulletsSlideProps {
  slide: SlideContent;
}

export default function BulletsSlide({ slide }: BulletsSlideProps) {
  return (
    <div className="w-full h-full flex flex-col bg-white p-16">
      <div className="mb-8 fade-in-up">
        <h1 className="text-5xl font-bold text-gray-900 mb-2">
          {slide.title}
        </h1>
        {slide.subtitle && (
          <h2 className="text-2xl text-gray-600 font-light">
            {slide.subtitle}
          </h2>
        )}
      </div>

      <div className="flex-1 flex flex-col justify-center space-y-6">
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
        <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg fade-in-up">
          <p className="text-xl text-blue-900 font-medium">
            💡 {slide.highlight}
          </p>
        </div>
      )}
    </div>
  );
}
