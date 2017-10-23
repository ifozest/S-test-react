import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  error: PropTypes.string.isRequired,
};

function ErrorBlock({ error }) {
  return (
    <div>
      {`Ooohps! ${error}. Please reload the page and try again.`}
    </div>
  );
}

ErrorBlock.propTypes = propTypes;

export default ErrorBlock;
