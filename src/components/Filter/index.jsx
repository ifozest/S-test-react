import React from 'react';
import PropTypes from 'prop-types';

import {} from './styles.scss';

const propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

const defaultProps = {
  disabled: true,
  value: '',
};

function Filter({
  label, value, disabled, options, onChange, name,
}) {
  return (
    <div className="filter">
      <p className="filter-label">
        {label}
      </p>
      <select
        className="filter-select"
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
      >
        <option value="" disabled hidden />
        {options.map(item => (
          <option
            key={item.value}
            value={item.value}
          >{item.title}
          </option>
        ))}
      </select>
    </div>
  );
}

Filter.propTypes = propTypes;
Filter.defaultProps = defaultProps;

export default Filter;
