import { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface CountdownTimerProps {
  currentSlideIndex: number;
  totalSlides: number;
}

export default function CountdownTimer({ currentSlideIndex, totalSlides }: CountdownTimerProps) {
  const INITIAL_TIME = 4800; // 80 minutes in seconds (1 hour 20 minutes)
  const FLICKER_THRESHOLD = 300; // Start flickering at 5 minutes

  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [isFlickering, setIsFlickering] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = window.setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, timeLeft]);

  // Handle flickering effect
  useEffect(() => {
    if (timeLeft <= FLICKER_THRESHOLD && timeLeft > 0) {
      const flickerInterval = window.setInterval(() => {
        setIsFlickering((prev) => !prev);
      }, 500); // Flicker every 500ms

      return () => clearInterval(flickerInterval);
    } else {
      setIsFlickering(false);
    }
  }, [timeLeft]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Calculate time estimates
  const timePerSlide = INITIAL_TIME / totalSlides;
  const slidesRemaining = totalSlides - currentSlideIndex - 1; // -1 because current slide is in progress
  const estimatedTimeRemaining = slidesRemaining * timePerSlide;
  const timeElapsed = INITIAL_TIME - timeLeft;
  const expectedTimeElapsed = currentSlideIndex * timePerSlide;
  const timeDifference = timeElapsed - expectedTimeElapsed;

  // Determine pace (with 30 second buffer to avoid constant fluctuation)
  const getPaceStatus = () => {
    if (Math.abs(timeDifference) < 30) return 'on-track';
    if (timeDifference > 0) return 'behind'; // Used more time than expected
    return 'ahead'; // Used less time than expected
  };

  const getPaceColor = () => {
    const pace = getPaceStatus();
    if (pace === 'ahead') return 'text-green-600';
    if (pace === 'behind') return 'text-orange-600';
    return 'text-blue-600';
  };

  const getPaceLabel = () => {
    const pace = getPaceStatus();
    if (pace === 'ahead') return '▲ Ahead';
    if (pace === 'behind') return '▼ Behind';
    return '● On Track';
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(INITIAL_TIME);
    setIsFlickering(false);
  };

  const getTimerColor = () => {
    if (timeLeft === 0) return 'text-red-600';
    if (timeLeft <= FLICKER_THRESHOLD) return isFlickering ? 'text-red-600' : 'text-red-400';
    return 'text-gray-800';
  };

  const getBgColor = () => {
    if (timeLeft === 0) return 'bg-red-100';
    if (timeLeft <= FLICKER_THRESHOLD) return isFlickering ? 'bg-red-100' : 'bg-white';
    return 'bg-white';
  };

  return (
    <div className="fixed top-8 left-8 flex flex-col space-y-3">
      <div className="flex items-center space-x-3">
        {/* Timer Display */}
        <div
          className={`${getBgColor()} backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg transition-colors duration-200`}
        >
          <div className="flex flex-col">
            <div className="text-xs text-gray-600 font-medium mb-1">Time Remaining</div>
            <div className={`text-2xl font-bold font-mono ${getTimerColor()} transition-colors duration-200`}>
              {formatTime(timeLeft)}
            </div>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-3 shadow-lg">
          <button
            onClick={toggleTimer}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors"
            title={isRunning ? 'Pause' : 'Start'}
          >
            {isRunning ? (
              <Pause className="w-5 h-5 text-gray-700" />
            ) : (
              <Play className="w-5 h-5 text-gray-700" />
            )}
          </button>

          <button
            onClick={resetTimer}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors"
            title="Reset timer"
          >
            <RotateCcw className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Slide-based Estimates */}
      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg">
        <div className="flex items-center justify-between space-x-6">
          <div className="flex flex-col">
            <div className="text-xs text-gray-600 font-medium">Estimated Remaining</div>
            <div className="text-lg font-bold font-mono text-gray-800">
              {formatTime(Math.max(0, Math.round(estimatedTimeRemaining)))}
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div className="text-xs text-gray-600 font-medium">Pace</div>
            <div className={`text-sm font-bold ${getPaceColor()}`}>
              {getPaceLabel()}
            </div>
          </div>
        </div>

        <div className="mt-2 pt-2 border-t border-gray-200">
          <div className="text-xs text-gray-600">
            ~{Math.round(timePerSlide / 60)}:{(Math.round(timePerSlide) % 60).toString().padStart(2, '0')} per slide • {slidesRemaining} slides left
          </div>
        </div>
      </div>
    </div>
  );
}
