import React from 'react';
import PropTypes from 'prop-types';
import RevStatistic from '../RevStatistic/RevStatistic';

const Feedback = ({ good, neutral, bad, totalFeedback }) => {
  return (
    <div className="feedback">
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <RevStatistic good={good} totalFeedback={totalFeedback} />
    </div>
  );
};

Feedback.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Feedback;
