import React from 'react';
import PropTypes from 'prop-types';

import {} from './styles.scss';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

function Panel({ children, className }) {
  return (
    <div className={`panel ${className}`}>
      <div className="panel-wrapper">
        {children}
      </div>
    </div>
  );
}

Panel.propTypes = propTypes;
Panel.defaultProps = defaultProps;

export default Panel;
