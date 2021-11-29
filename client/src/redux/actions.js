/* eslint-disable consistent-return */
const GET_USER = 'GET_USER';
const GET_USERS = 'GET_USERS';

const getUserAction = (user) => ({
  type: GET_USER,
  payload: user,
});

const getUsersAction = (users) => ({
  type: GET_USERS,
  payload: users,
});

export {
  getUsersAction,
  getUserAction,
};
