import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  error: PropTypes.string,
};

const defaultProps = {
  error: '',
};

function ErrorBlock({ error }) {
  return (
    <div>
      {`Ooohps! ${error} Please reload the page and try again.`}
    </div>
  );
}

ErrorBlock.propTypes = propTypes;
ErrorBlock.defaultProps = defaultProps;

export default ErrorBlock;
