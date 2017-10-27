import { connect } from 'react-redux';

import { getFilterBy, multiFilter } from 'utils';
import ItemList from 'components/ItemList';

const mapStateToProps = (state) => {
  const { data, visibilityFilter } = state;
  const typeFilter = getFilterBy('type', visibilityFilter.type);
  const brandFilter = getFilterBy('brand', visibilityFilter.brand);
  const colorFilter = getFilterBy('colors', visibilityFilter.color);

  const items = multiFilter(data, [
    typeFilter,
    brandFilter,
    colorFilter,
  ]);

  return {
    items,
  };
};


export default connect(mapStateToProps)(ItemList);
