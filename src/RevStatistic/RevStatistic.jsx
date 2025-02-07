import React from 'react';
import PropTypes from 'prop-types';
import styles from './RevStatistic.module.css';

const RevStatistic = ({ good, totalFeedback }) => {
  const positivePercentage =
    totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;

  const getStatusColor = percentage => {
    if (percentage < 25) return styles.red;
    if (percentage > 75) return styles.green;
    return styles.orange;
  };

  const statusColor = `${styles.statistic} ${getStatusColor(
    positivePercentage,
  )}`;

  return <p className={statusColor}>Positive: {positivePercentage}%</p>;
};

RevStatistic.propTypes = {
  good: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};

export default RevStatistic;
