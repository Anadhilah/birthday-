import { useState, useEffect } from 'react';
import Confetti from './Confetti';
import GiftBox from './GiftBox';
import FeedbackSection from './FeedbackSection';
import MessageCarousel from './MessageCarousel';
import FinalCelebration from './FinalCelebration';

interface BirthdayExperienceProps {
  userName: string;
}

function BirthdayExperience({ userName }: BirthdayExperienceProps) {
  const [stage, setStage] = useState<'intro' | 'gift' | 'feedback' | 'messages' | 'finale'>('intro');
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStage('gift');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleGiftOpened = () => {
    setStage('feedback');
  };

  const handleFeedbackGiven = () => {
    setShowConfetti(false);
    setTimeout(() => {
      setStage('messages');
    }, 1000);
  };

  const handleMessagesComplete = () => {
    setStage('finale');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-pink-300 to-purple-400 relative overflow-hidden">
      {showConfetti && <Confetti />}

      <div className="relative z-10">
        {stage === 'intro' && (
          <div className="min-h-screen flex items-center justify-center animate-fadeIn">
            <div className="text-center">
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-bounce">
                🎉 SURPRISE! 🎉
              </h1>
              <p className="text-3xl md:text-4xl text-white font-semibold">
                Happy Birthday, {userName}! 🎂
              </p>
            </div>
          </div>
        )}

        {stage === 'gift' && (
          <GiftBox onOpened={handleGiftOpened} />
        )}

        {stage === 'feedback' && (
          <FeedbackSection onComplete={handleFeedbackGiven} />
        )}

        {stage === 'messages' && (
          <MessageCarousel onComplete={handleMessagesComplete} />
        )}

        {stage === 'finale' && (
          <FinalCelebration userName={userName} />
        )}
      </div>
    </div>
  );
}

export default BirthdayExperience;
