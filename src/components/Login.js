import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchUsers,
  updateUsers,
  createUser,
  addUser,
} from '../slices/usersSlice';
import { sigIn, setCurrentUserID } from '../slices/statusSlice';

const LoginPage = () => {
  const [inputName, setInputName] = useState('');
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const ready = users.length > 1;

  const handleLogin = e => {
    e.preventDefault();
    if (inputName.length >= 3 && ready) {
      const idx = users.findIndex(user => user.name.split(' ')[0].toLowerCase() === inputName.toLowerCase());

      if (idx !== -1) {
        dispatch(setCurrentUserID(users[idx].id));
      } else {
        createUser({ name: inputName })
          .then(response => {
            if (response) {
              dispatch(addUser(response));
              dispatch(setCurrentUserID(response.id));
            }
          });
      }
      dispatch(sigIn());
      setInputName('');
    } else {
      if (inputName.length === 0) alert('Please enter your name!');
      if (!ready) alert('Please make sure the server is online first!');
    }
  };

  const checkServerStatus = () => {
    if (!ready) {
      fetchUsers()
        .then(response => dispatch(updateUsers(response)));
    }
  };

  return (
    <div className="Login-page">

      <div className="App-logo">
        <h2>You.Fit</h2>
        <i className="fas fa-running fa-3x" />
        <h3>Your Daily Fitness Friend.</h3>
      </div>

      <form onSubmit={handleLogin} className="Login-form">
        <input
          onChange={e => setInputName(e.target.value)}
          value={inputName}
          type="text"
          minLength="3"
          maxLength="30"
          placeholder="Input Your Name to Continue ..."
        />
        <button type="submit" className="btn">Login</button>
      </form>

      <div className="server-status">
        <div
          className="status-message"
          style={
            ready ? { color: '#97e492', fontStyle: 'normal' } : { color: 'rgb(207, 56, 10)' }
          }
        >
          Server is
          {' '}
          {ready ? 'Online' : 'Offline'}
          {' '}
now.
        </div>

        <button
          type="button"
          onClick={() => checkServerStatus()}
        >
          Connect
        </button>

      </div>

    </div>
  );
};

export default LoginPage;
