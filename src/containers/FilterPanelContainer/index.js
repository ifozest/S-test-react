import { connect } from 'react-redux';

import FilterPanel from 'components/FilterPanel';
import { updateVisibilityFilter } from 'actions';
import { getFilterBy, getOptionsFor } from 'utils';

const mapStateToProps = (state) => {
  const { data, visibilityFilter } = state;
  const typeFilter = getFilterBy('type', visibilityFilter.type);
  const brandFilter = getFilterBy('brand', visibilityFilter.brand);

  const filterOptions = {
    types: getOptionsFor('type', data),
    brands: getOptionsFor('brand', data, [typeFilter]),
    colors: getOptionsFor('colors', data, [brandFilter]),
  };

  return {
    filterOptions,
    visibilityFilter,
  };
};


const mapDispatchToProps = dispatch => ({
  handleFilterChange: (e) => {
    const { name, value } = e.target;
    dispatch(updateVisibilityFilter(name, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel);
