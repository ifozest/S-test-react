import React from 'react';
import PropTypes from 'prop-types';
import Panel from 'components/Panel';

const propTypes = {
  error: PropTypes.string,
};

const defaultProps = {
  error: '',
};

function ErrorPanel({ error }) {
  return (
    <Panel className="panel-error">
      <div>
        {`Ooohps! ${error} Please reload the page and try again.`}
      </div>
    </Panel>
  );
}

ErrorPanel.propTypes = propTypes;
ErrorPanel.defaultProps = defaultProps;

export default ErrorPanel;
