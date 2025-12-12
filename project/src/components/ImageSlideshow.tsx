import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideshowProps {
  onComplete?: () => void;
}

const images = [
  {
    url: 'https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Celebrating special moments',
  },
  {
    url: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Filled with joy and laughter',
  },
  {
    url: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Growing stronger each year',
  },
  {
    url: 'https://images.pexels.com/photos/919734/pexels-photo-919734.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Sharing happiness with loved ones',
  },
  {
    url: 'https://images.pexels.com/photos/1181270/pexels-photo-1181270.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Creating unforgettable memories',
  },
  {
    url: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Embracing every beautiful moment',
  },
];

function ImageSlideshow({ onComplete }: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [autoPlay]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setAutoPlay(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setAutoPlay(false);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <div className="w-full max-w-4xl relative">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-black">
          <img
            src={images[currentIndex].url}
            alt={images[currentIndex].caption}
            className="w-full h-96 md:h-screen object-cover animate-fadeIn"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
            <div className="text-white">
              <p className="text-2xl md:text-4xl font-semibold">
                {images[currentIndex].caption}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-8">
          <button
            onClick={handlePrev}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex gap-2 justify-center flex-1 px-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-400 w-3 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            {currentIndex + 1} / {images.length}
          </p>
          {onComplete && (
            <button
              onClick={onComplete}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full font-bold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg"
            >
              Close Slideshow
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageSlideshow;
