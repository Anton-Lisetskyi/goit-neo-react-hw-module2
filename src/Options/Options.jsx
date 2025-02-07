import React from 'react';
import PropTypes from 'prop-types';
import styles from './Options.module.css';

const Options = ({ updateFeedback, onReset }) => {
  return (
    <div className={styles.options}>
      <button
        className={styles.counterButton}
        onClick={() => updateFeedback('good')}
      >
        Good
      </button>
      <button
        className={styles.counterButton}
        onClick={() => updateFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        className={styles.counterButton}
        onClick={() => updateFeedback('bad')}
      >
        Bad
      </button>
      <button className={styles.counterButton} onClick={onReset}>
        Reset
      </button>
    </div>
  );
};

Options.propTypes = {
  updateFeedback: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default Options;
