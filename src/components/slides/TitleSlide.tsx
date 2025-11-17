import { SlideContent } from '../../types/slides';

interface TitleSlideProps {
  slide: SlideContent;
}

export default function TitleSlide({ slide }: TitleSlideProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white p-16">
      <div className="text-center space-y-6 fade-in-up">
        <h1 className="text-7xl font-bold mb-4 tracking-tight">
          {slide.title}
        </h1>
        {slide.subtitle && (
          <h2 className="text-4xl font-light opacity-90">
            {slide.subtitle}
          </h2>
        )}
        {slide.content && (
          <p className="text-2xl opacity-80 mt-8">
            {slide.content}
          </p>
        )}
      </div>
    </div>
  );
}
