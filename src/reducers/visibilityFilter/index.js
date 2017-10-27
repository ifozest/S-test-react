const initState = {
  type: '',
  brand: '',
  color: '',
};

const visibilityFilter = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_VISIBILITY_FILTER': {
      const {
        currentFilterState,
        filterType,
        value,
      } = action;

      const newFilter = {
        color: '',
      };
      if (filterType === 'type') {
        newFilter.brand = '';
      }
      newFilter[filterType] = value;

      return Object.assign({}, currentFilterState, newFilter);
    }
    default:
      return state;
  }
};

export default visibilityFilter;
