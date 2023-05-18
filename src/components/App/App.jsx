import { useState } from 'react';
import Container from './App.styled';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

const App = () => {
  const [feedbackValues, setfeedbackValue] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const buttonNames = Object.keys(feedbackValues);

  const incrementValue = ({ target: { name } }) => {
    switch (name) {
      case 'good':
        return setfeedbackValue(prev => ({ ...prev, good: prev.good + 1 }));

      case 'neutral':
        return setfeedbackValue(prev => ({...prev, neutral: prev.neutral + 1}));

      case 'bad':
        return setfeedbackValue(prev => ({ ...prev, bad: prev.bad + 1}));

      default:
        return alert("Error!");
    }
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedbackValues;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback() !== 0
      ? Math.round((100 / countTotalFeedback()) * feedbackValues.good)
      : 0;
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          buttonNames={buttonNames}
          onLeaveFeedback={incrementValue}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            feedbackValues={feedbackValues}
            name={buttonNames}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Container>
  );
};

export default App;
