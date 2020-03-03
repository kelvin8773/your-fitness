import React from 'react';
import { useSelector } from 'react-redux';
import LoginPage from './components/Login';
import AppPage from './components/AppPage';

function App() {
  const { login } = useSelector(state => state.status);
  const { currentUser } = useSelector(state => state.status);
  const ready = login && currentUser.name;

  return (
    <div className="App">
      <div className="App-display">
        {ready ? <AppPage /> : <LoginPage />}
      </div>
    </div>
  );
}

export default App;
