import React from 'react';
import Item from 'components/Item';
import PropTypes from 'prop-types';

import {} from './styles.scss';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
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
