import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="App-header">
    <button className="header-left-btn" type="button">
      <i className="fas fa-chevron-left fa-2x" />
    </button>
    <Link to="/">
      <h3 className="App-title">You.Fit</h3>
    </Link>
    <button className="header-right-btn" type="button" >
      right
    </button>

  </div>
);

export default Header;
