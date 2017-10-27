import * as traffickMeister from 'service/trafficMeister';

export const requestData = () => ({
  type: 'REQUEST_DATA',
});

export const receiveData = (error, data) => ({
  type: 'RECEIVE_DATA',
  error,
  data,
});

export const fetchData = () => (dispatch) => {
  dispatch(requestData());
  return traffickMeister.fetchData((err, data) => {
    dispatch(receiveData(err, data));
  });
};

export const updateVisibilityFilter = (filterType, value) => (dispatch, getState) => {
  const { visibilityFilter } = getState();
  dispatch({
    type: 'UPDATE_VISIBILITY_FILTER',
    currentFilterState: visibilityFilter,
    filterType,
    value,
  });
};

