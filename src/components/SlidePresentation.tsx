import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { allSlides, getSessionForSlide } from '../data/slidesData';
import { SlideContent } from '../types/slides';
import TitleSlide from './slides/TitleSlide';
import SectionSlide from './slides/SectionSlide';
import BulletsSlide from './slides/BulletsSlide';
import TwoColumnSlide from './slides/TwoColumnSlide';
import QuoteSlide from './slides/QuoteSlide';

export default function SlidePresentation() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  const currentSlide = allSlides[currentSlideIndex];
  const currentSession = getSessionForSlide(currentSlide.id);

  const goToNextSlide = useCallback(() => {
    if (currentSlideIndex < allSlides.length - 1) {
      setDirection('forward');
      setCurrentSlideIndex((prev) => prev + 1);
    }
  }, [currentSlideIndex]);

  const goToPreviousSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      setDirection('backward');
      setCurrentSlideIndex((prev) => prev - 1);
    }
  }, [currentSlideIndex]);

  const goToFirstSlide = useCallback(() => {
    setDirection('backward');
    setCurrentSlideIndex(0);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goToNextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPreviousSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToFirstSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSlide, goToPreviousSlide, goToFirstSlide]);

  const renderSlide = (slide: SlideContent) => {
    switch (slide.type) {
      case 'title':
        return <TitleSlide slide={slide} />;
      case 'section':
        return <SectionSlide slide={slide} />;
      case 'bullets':
        return <BulletsSlide slide={slide} />;
      case 'two-column':
        return <TwoColumnSlide slide={slide} />;
      case 'quote':
        return <QuoteSlide slide={slide} />;
      default:
        return <BulletsSlide slide={slide} />;
    }
  };

  return (
    <div className="relative w-full h-full bg-gray-100">
      {/* Main Slide Area */}
      <div className="w-full h-full">
        <div
          key={currentSlide.id}
          className={direction === 'forward' ? 'slide-enter' : 'slide-exit'}
        >
          {renderSlide(currentSlide)}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
        <button
          onClick={goToFirstSlide}
          className="p-2 rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentSlideIndex === 0}
          title="Go to first slide (Home)"
        >
          <Home className="w-5 h-5 text-gray-700" />
        </button>

        <button
          onClick={goToPreviousSlide}
          className="p-2 rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentSlideIndex === 0}
          title="Previous slide (←)"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <div className="px-4 py-1 bg-blue-600 text-white rounded-full font-medium min-w-[120px] text-center">
          <span className="text-sm">
            {currentSlideIndex + 1} / {allSlides.length}
          </span>
        </div>

        <button
          onClick={goToNextSlide}
          className="p-2 rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentSlideIndex === allSlides.length - 1}
          title="Next slide (→ or Space)"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Session Indicator */}
      {currentSession && (
        <div className="fixed top-8 right-8 bg-white/90 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg">
          <div className="text-sm text-gray-600 font-medium">
            {currentSession.title}
          </div>
        </div>
      )}

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200">
        <div
          className="h-full bg-blue-600 transition-all duration-300"
          style={{
            width: `${((currentSlideIndex + 1) / allSlides.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}
