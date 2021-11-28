/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../api/users/users';
import { getUserAction } from '../redux/actions';
import UserChart from './UserChart';

const User = ({ getUserDispatch, user }) => {
  const { userId } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const data = await getUser(userId);
        return getUserDispatch(data);
      } catch (err) {
        return err;
      }
    })();
  }, [userId]);
  return (
    <div>
      { !user && (
        <p>loading...</p>
      )}
      { user && (
        <>
          <p>
            {user.firstName}
            {' '}
            {user.lastName}
          </p>
          <p>{user.userData}</p>
          <UserChart id={userId} data={user.userData} />
        </>
      )}
    </div>

  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  getUserDispatch: (user) => dispatch(getUserAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
