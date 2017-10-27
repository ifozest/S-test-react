const loading = (state = true, action) => {
  switch (action.type) {
    case 'REQUEST_DATA':
      return true;
    case 'RECEIVE_DATA':
      return false;
    default:
      return state;
  }
};

export default loading;
