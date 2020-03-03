import React from 'react';
import { useSelector } from 'react-redux';
import LoginPage from './components/Login';
import AppPage from './components/AppPage';

function App() {
  const { login } = useSelector(state => state.status);
  const { currentUserID } = useSelector(state => state.status);
  const user = useSelector(state => state.users.filter(user => user.id === currentUserID))[0];
  const ready = login && user;

  return (
    <div className="App">
      <div className="App-display">
        {ready ? <AppPage user={user} /> : <LoginPage />}
      </div>
    </div>
  );
}

export default App;
