const INITIAL_STATE = null;

// eslint-disable-next-line default-param-last
const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return action.payload;
    default:
      return state;
  }
};

export default usersReducer;
