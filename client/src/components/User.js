import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
      { user && (
        <>
          <UserChart id={userId} data={user.userData} />
          <p>
            {user.firstName}
            {' '}
            {user.lastName}
          </p>
          <p>{user.userData}</p>
        </>
      )}
      { !user && (
        <p>loading...</p>
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

User.propTypes = {
  getUserDispatch: PropTypes.func.isRequired,
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    userData: PropTypes.arrayOf(
      PropTypes.number,
    ),
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
