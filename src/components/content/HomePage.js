import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { setCurrentPage } from '../../slices/statusSlice';

const HomePage = () => {
  const { currentUserID } = useSelector(state => state.status)
  const user = useSelector(state => state.users.filter(user => user.id === currentUserID))[0];
  const dispatch = useDispatch();

  console.log(user.name, user);
  return (
    <div className="home-page">
      <h2 style={{ textTransform: "capitalize" }}>
        Hi, {user ? user.name.split(' ')[0] : 'Guest'}!
      </h2>
      <i className="fas fa-running fa-2x" />
      <h3>What is your Goal today? </h3>

      <Link
        to="/addData"
        onClick={() => dispatch(setCurrentPage('Add Activities'))}
        className="btn"
      >
        Start Now!
      </Link>

    </div>
  );
};


export default HomePage;
