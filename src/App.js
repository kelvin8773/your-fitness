import React from 'react';
import Header from './components/top/Header';
import Content from './components/content/Content';
import Navbar from './components/bottom/Navbar';

function App() {
  return (
    <div className="App">
      <div className="App-display">
        <Header />
        <Content />
        <Navbar />
      </div>
    </div>
  );
}

export default App;
