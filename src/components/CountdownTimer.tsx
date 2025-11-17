import { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

export default function CountdownTimer() {
  const INITIAL_TIME = 80; // 1:20 in seconds
  const FLICKER_THRESHOLD = 30; // Start flickering at 30 seconds

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
    <div className="fixed top-8 left-8 flex items-center space-x-3">
      {/* Timer Display */}
      <div
        className={`${getBgColor()} backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg transition-colors duration-200`}
      >
        <div className={`text-2xl font-bold font-mono ${getTimerColor()} transition-colors duration-200`}>
          {formatTime(timeLeft)}
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
  );
}
