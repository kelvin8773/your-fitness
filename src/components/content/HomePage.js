import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { setCurrentPage } from '../../slices/statusSlice';

const HomePage = () => {
  const { currentUserID } = useSelector(state => state.status)
  const userName = useSelector(state => state.users.filter(user => user.id === currentUserID));
  const dispatch = useDispatch();

  return (
    <div className="home-page">
      <h2>
        Hi,
        {' '}
        {userName}
        , Welcome!
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
