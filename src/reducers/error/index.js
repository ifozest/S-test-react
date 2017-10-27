const error = (state = null, action) => {
  switch (action.type) {
    case 'RECEIVE_DATA':
      return action.error;
    default:
      return state;
  }
};

export default error;
