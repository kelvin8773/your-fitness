import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, pushUser, } from '../../../slices/usersSlice';
import { setCurrentPage, setCurrentUser } from '../../../slices/statusSlice';
import getHeadImage from '../../../helpers/headImage';


const EditUserPage = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.status)
  const [name, setName] = useState(currentUser.name);
  const [age, setAge] = useState(currentUser.age ? currentUser.age : 0);
  const [sex, setSex] = useState(currentUser.sex ? currentUser.sex : '');
  const headImage = getHeadImage(name, sex);

  const handleSubmit = e => {
    e.preventDefault();
    const updatedUser = {
      ...currentUser, name, sex, age: parseInt(age)
    };
    pushUser(updatedUser)
      .then(response => {
        if (response) {
          dispatch(setCurrentUser(updatedUser));
          dispatch(updateUser(updatedUser));
        }
      });
    dispatch(setCurrentPage('More'));
  };

  return (
    <div className="edit-user">
      <form action="" onSubmit={handleSubmit}>
        <img src={headImage} alt="use-headImage" />
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          minLength="3"
        />

        <input
          type="number"
          name="age"
          value={age}
          min="18"
          onChange={e => setAge(e.target.value)}
          className="input-age"
        />

        <div className="input-sex">
          <div className="radio-option">
            <i className="fas fa-male fa-2x" />
            <input
              type="radio"
              id="sex1"
              name="sex"
              value="male"
              onChange={e => setSex(e.target.value)}
              checked={sex === 'male'}
            />
            <label htmlFor="sex">Male</label>
          </div>

          <div className="radio-option">
            <i className="fas fa-female fa-2x" />
            <input
              type="radio"
              id="sex2"
              name="sex"
              value="female"
              onChange={e => setSex(e.target.value)}
              checked={sex === 'female'}

            />
            <label htmlFor="sex">Female</label>
          </div>

          <div className="radio-option">
            <i className="fas fa-user-secret fa-2x" />
            <input
              type="radio"
              id="sex3"
              name="sex"
              value=""
              onChange={e => setSex(e.target.value)}
              checked={sex === ''}
            />
            <label htmlFor="sex">Secret</label>
          </div>
        </div>

        <button type="submit" className="btn">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditUserPage;
