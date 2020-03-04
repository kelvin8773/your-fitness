import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoginPage from './components/Login';
import AppPage from './components/AppPage';

import { fetchUsers, updateUsers } from './slices/usersSlice';

function App() {
  const dispatch = useDispatch();
  const { login } = useSelector(state => state.status);
  const { currentUser } = useSelector(state => state.status);
  const ready = login && currentUser.name;

  const getDataFromServer = () => {
    fetchUsers()
      .then(response => dispatch(updateUsers(response)));
  };

  useEffect(() => { getDataFromServer(); });

  return (
    <div className="App">
      <div className="App-display">
        {ready ? <AppPage /> : <LoginPage />}
      </div>
    </div>
  );
}

export default App;
