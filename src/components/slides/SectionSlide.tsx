import { SlideContent } from '../../types/slides';

interface SectionSlideProps {
  slide: SlideContent;
}

export default function SectionSlide({ slide }: SectionSlideProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-16">
      <div className="text-center space-y-6 fade-in-up">
        {slide.sessionNumber !== undefined && (
          <div className="text-2xl font-light opacity-80 mb-4">
            Session {slide.sessionNumber}
          </div>
        )}
        <h1 className="text-6xl font-bold tracking-tight">
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
