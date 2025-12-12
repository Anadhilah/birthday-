import { useState } from 'react';
import { Gift } from 'lucide-react';

interface GiftBoxProps {
  onOpened: () => void;
}

function GiftBox({ onOpened }: GiftBoxProps) {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened(true);
    setTimeout(() => {
      onOpened();
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center animate-fadeIn">
      <div className="text-center">
        {!isOpened ? (
          <>
            <div
              onClick={handleClick}
              className="cursor-pointer transform hover:scale-110 transition-transform duration-300"
            >
              <Gift className="w-48 h-48 text-red-500 mx-auto mb-8 animate-wiggle" />
            </div>
            <p className="text-3xl text-white font-bold animate-pulse">
              Click the gift to open! 🎁
            </p>
          </>
        ) : (
          <div className="animate-giftOpen">
            <div className="text-9xl mb-8">🎁</div>
            <div className="text-6xl animate-bounce">
              ✨ 🎉 🎂 🎈 ✨
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GiftBox;
