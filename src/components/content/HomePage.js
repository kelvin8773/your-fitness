import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentPage } from '../../slices/statusSlice';


const HomePage = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.status);

  return (
    <div className="home-page">
      <h2 style={{ textTransform: 'capitalize' }}>
        Hi,
        {' '}
        {currentUser.name ? currentUser.name.split(' ')[0] : 'Guest'}
        !
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
