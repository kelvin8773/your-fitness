import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => (
  <div className="App-navbar">
    <Link to="/addData">
      <i className="fas fa-plus-square fa-3x" />
      Add Data
    </Link>
    <Link to="/progress">
      <i className="fas fa-chart-line fa-3x" />
      Progress
    </Link>
    <Link to="/report">
      <i className="fas fa-chart-pie fa-3x" />
      Report
    </Link>
    <Link to="/more">
      <i className="fas fa-ellipsis-h fa-3x" />
      More
    </Link>

  </div>
);

export default Navbar;
