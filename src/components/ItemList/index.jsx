import React from 'react';
import Item from 'components/Item';
import PropTypes from 'prop-types';

import './styles.scss';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

function ItemList({ items }) {
  return (
    <ul className="list">
      {items.map(item => (
        <Item
          key={item.id}
          item={item}
        />
      ))}
    </ul>
  );
}

ItemList.propTypes = propTypes;

export default ItemList;
