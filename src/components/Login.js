import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, fetchUsers, fetchUser } from '../slices/userSlice';
import { sigIn } from '../slices/statusSlice';

const LoginPage = () => {
  const [inputName, setInputName] = useState('');
  const dispatch = useDispatch();

  const handleLogin = e => {
    e.preventDefault();
    // const name = inputName.length === 0 ? 'Guest' : inputName;
    // dispatch(updateUser({
    //   name: name,
    //   sex: user.sex,
    //   age: user.age,
    // }));
    // dispatch(fetchUser(3));
    // console.log(name);
    fetchUser(3)
      .then(response => {
        console.log(response);
        dispatch(updateUser(response));
      });

    dispatch(sigIn());
    setInputName('');
  };

  return (
    <div className="Login-page">
      <div className="App-logo">
        <h2>You.Fit</h2>
        <i className="fas fa-running fa-3x" />
        <h3>Your Daily Fitness Friend.</h3>
      </div>
      <div className="Login-form">
        <form onSubmit={handleLogin} style={{ display: 'flex', flexFlow: 'column' }}>
          <input
            onChange={e => setInputName(e.target.value)}
            value={inputName}
            type="text"
            minLength="3"
            maxLength="30"
            placeholder="Input Name or Login as Guest ..."
          />
          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
