import React from 'react';

const Navbar = () => (
  <div className="App-navbar">
    <button>
      <i className="fas fa-plus-square fa-3x" />
      Add Data
    </button>
    <button>
      <i className="fas fa-chart-line fa-3x" />
      Progress
    </button>
    <button>
      <i className="fas fa-chart-pie fa-3x" />
      Report
    </button>
    <button>
      <i className="fas fa-ellipsis-h fa-3x" />
      More
    </button>
  </div>
);

export default Navbar;
