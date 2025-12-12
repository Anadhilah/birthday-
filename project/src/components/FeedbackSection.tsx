import { useState } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import HappyEmojis from './HappyEmojis';
import SadAnimation from './SadAnimation';

interface FeedbackSectionProps {
  onComplete: () => void;
}

function FeedbackSection({ onComplete }: FeedbackSectionProps) {
  const [response, setResponse] = useState<'yes' | 'no' | null>(null);

  const handleYes = () => {
    setResponse('yes');
    setTimeout(() => {
      onComplete();
    }, 4000);
  };

  const handleNo = () => {
    setResponse('no');
    setTimeout(() => {
      onComplete();
    }, 4000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center animate-fadeIn relative">
      {response === 'yes' && <HappyEmojis />}

      <div className="text-center z-10">
        {!response ? (
          <>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-12">
              Did you like your gift? 🎁
            </h2>
            <div className="flex gap-8 justify-center">
              <button
                onClick={handleYes}
                className="group bg-green-500 hover:bg-green-600 text-white rounded-full p-8 shadow-2xl transform hover:scale-110 transition-all"
              >
                <ThumbsUp className="w-20 h-20 group-hover:animate-bounce" />
                <span className="block mt-4 text-2xl font-bold">Yes!</span>
              </button>
              <button
                onClick={handleNo}
                className="group bg-red-500 hover:bg-red-600 text-white rounded-full p-8 shadow-2xl transform hover:scale-110 transition-all"
              >
                <ThumbsDown className="w-20 h-20 group-hover:animate-bounce" />
                <span className="block mt-4 text-2xl font-bold">No</span>
              </button>
            </div>
          </>
        ) : response === 'yes' ? (
          <div className="animate-scaleUp">
            <div className="text-8xl mb-8">🥳</div>
            <h2 className="text-5xl font-bold text-white">
              Yay! I'm so glad! 💖
            </h2>
          </div>
        ) : (
          <SadAnimation />
        )}
      </div>
    </div>
  );
}

export default FeedbackSection;
