import PropTypes from 'prop-types';
const Statistics = ({ feedbackValues, total, positivePercentage }) => {
  const { good, neutral, bad } = feedbackValues;

  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePercentage}% </li>
    </ul>
  );
};
Statistics.propTypes = {
  feedbackValues: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),

  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
