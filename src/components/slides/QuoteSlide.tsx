import { SlideContent } from '../../types/slides';
import { Quote } from 'lucide-react';

interface QuoteSlideProps {
  slide: SlideContent;
}

export default function QuoteSlide({ slide }: QuoteSlideProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-700 text-white p-16">
      <div className="max-w-4xl text-center space-y-8 fade-in-up">
        <Quote className="w-20 h-20 mx-auto opacity-50" />

        <blockquote className="text-4xl font-light leading-relaxed italic">
          "{slide.quote}"
        </blockquote>

        {slide.author && (
          <p className="text-2xl font-medium opacity-90">
            — {slide.author}
          </p>
        )}
      </div>
    </div>
  );
}
