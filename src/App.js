import React from 'react';
import { useSelector } from 'react-redux';
import LoginPage from './components/LoginPage';
import AppPage from './components/AppPage';

function App() {
  const { login } = useSelector(state => state.status);
  return (
    <div className="App">
      <div className="App-display">
        {login ? <AppPage /> : <LoginPage />}
      </div>
    </div>
  );
}

export default App;
