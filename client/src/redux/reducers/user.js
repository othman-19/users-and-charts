const INITIAL_STATE = null;

// eslint-disable-next-line default-param-last
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_USER':
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
