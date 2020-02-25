import React from 'react';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const userName = useSelector(state => state.user.name)

  return (
    <div className="home-page">

      <h3>Welcome, {userName}!</h3>
      <p>What is your Goal today?</p>
    </div>
  );
}


export default HomePage;
