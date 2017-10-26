import React from 'react';
import PropTypes from 'prop-types';

import {} from './styles.scss';

const propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
  }).isRequired,
};

function Item({ item }) {
  return (
    <li className="item">
      <div className="item-wrap">
        <div className="item-image">
          <img src={item.img} alt={item.brand} />
        </div>
        <div className="item-info">
          <strong>{item.brand}</strong>
        </div>
      </div>
    </li>
  );
}

Item.propTypes = propTypes;

export default Item;
