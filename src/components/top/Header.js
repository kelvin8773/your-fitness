import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../slices/statusSlice';

const Header = () => {
  const { currentPage } = useSelector(state => state.status);
  const dispatch = useDispatch();

  return (
    <div className="App-header">
      <button className="header-left-btn" type="button">
        <i className="fas fa-chevron-left fa-2x" />
      </button>
      <Link to="/" onClick={() => dispatch(setCurrentPage('You.Fit'))}>
        <h3 className="App-title">
          {currentPage ? currentPage : 'You.Fit'}
        </h3>
      </Link>
      <button className="header-right-btn" type="button" >
        right
      </button>

    </div>
  );
}


export default Header;
