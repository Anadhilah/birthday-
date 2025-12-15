import { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import BirthdayExperience from './components/BirthdayExperience';
import BackgroundMusic from './components/BackgroundMusic';

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [userName, setUserName] = useState('');

  const handleUnlock = (name: string) => {
    setUserName(name);
    setIsUnlocked(true);
  };

  return (
    <div className="min-h-screen">
      <BackgroundMusic autoPlay={true} />
      {!isUnlocked ? (
        <LoginScreen onUnlock={handleUnlock} />
      ) : (
        <BirthdayExperience userName={userName} />
      )}
    </div>
  );
}

export default App;
