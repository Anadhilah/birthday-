import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface MessageCarouselProps {
  onComplete: () => void;
}

const messages = [
  {
    text: "🎂 Happy Birthday to someone who makes every day brighter!",
    emoji: "🌟"
  },
  {
    text: "🎈 May your day be filled with laughter, love, and endless cake!",
    emoji: "🍰"
  },
  {
    text: "✨ Another year older, another year more awesome!",
    emoji: "🎉"
  },
  {
    text: "🎁 Wishing you all the happiness your heart can hold!",
    emoji: "💖"
  },
  {
    text: "🌈 You deserve all the wonderful things life has to offer!",
    emoji: "🎊"
  },
  {
    text: "🎵 Here's to making unforgettable memories this year!",
    emoji: "📸"
  }
];

function MessageCarousel({ onComplete }: MessageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < messages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete();
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        handleNext();
      }
    };
    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [currentIndex]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 animate-slideIn">
          <div className="text-center mb-8">
            <div className="text-9xl mb-6 animate-bounce">
              {messages[currentIndex].emoji}
            </div>
            <p className="text-3xl md:text-4xl font-bold text-gray-800 leading-relaxed">
              {messages[currentIndex].text}
            </p>
          </div>

          <div className="flex justify-between items-center mt-12">
            <div className="text-gray-500">
              {currentIndex + 1} / {messages.length}
            </div>
            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg"
            >
              {currentIndex < messages.length - 1 ? 'Next' : 'Continue to Finale'}
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageCarousel;
