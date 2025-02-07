import { useState, useEffect } from 'react';
import './App.css';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const [goodRev, setGoodRev] = useState(
    () => Number(localStorage.getItem('goodRev')) || 0,
  );
  const [neutralRev, setNeutralRev] = useState(
    () => Number(localStorage.getItem('neutralRev')) || 0,
  );
  const [badRev, setBadRev] = useState(
    () => Number(localStorage.getItem('badRev')) || 0,
  );

  const resetAll = () => {
    setGoodRev(0);
    setNeutralRev(0);
    setBadRev(0);
    localStorage.removeItem('goodRev');
    localStorage.removeItem('neutralRev');
    localStorage.removeItem('badRev');
  };

  const updateFeedback = feedbackType => {
    switch (feedbackType) {
      case 'good':
        setGoodRev(prev => prev + 1);
        break;
      case 'neutral':
        setNeutralRev(prev => prev + 1);
        break;
      case 'bad':
        setBadRev(prev => prev + 1);
        break;
      default:
        break;
    }
  };

  const totalFeedback = goodRev + neutralRev + badRev;

  useEffect(() => {
    localStorage.setItem('goodRev', goodRev);
    localStorage.setItem('neutralRev', neutralRev);
    localStorage.setItem('badRev', badRev);
  }, [goodRev, neutralRev, badRev]);

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} onReset={resetAll} />
      {totalFeedback > 0 ? (
        <Feedback
          good={goodRev}
          neutral={neutralRev}
          bad={badRev}
          totalFeedback={totalFeedback}
        ></Feedback>
      ) : (
        <Notification message="No feedback yet" />
      )}
    </>
  );
}

export default App;
