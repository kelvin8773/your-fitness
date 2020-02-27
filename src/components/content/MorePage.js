import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sigOut } from '../../slices/statusSlice';

const MorePage = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.user);
  let namePlaceHolder;
  let sexPlaceHolder;
  let headImagePlaceHolder;

  switch (name) {
    case 'Guest':
      headImagePlaceHolder = './assets/images/gregoire_vella.jpg';
      namePlaceHolder = 'Gregoire Vella';
      sexPlaceHolder = 'Male';
      break;
    case 'Kelvin':
      headImagePlaceHolder = './assets/images/kelvin.jpg';
      namePlaceHolder = 'Kelvin Liang';
      sexPlaceHolder = 'Male';
      break;
    default:
      headImagePlaceHolder = './assets/images/female.jpg';
      namePlaceHolder = 'Ella Zhang';
      sexPlaceHolder = 'Female';
  }

  return (
    <div className="more-page">
      <div className="profile-row">
        <img src={headImagePlaceHolder} alt="userHead" />
        <div>
          <div className="name">{namePlaceHolder}</div>
          <div className="sex">{sexPlaceHolder}</div>
        </div>
      </div>

      <button type="button" className="menu-row">
        <i className="fas fa-bullseye fa-2x" />
        <p>Your Goal</p>
      </button>
      <button type="button" className="menu-row">
        <i className="fas fa-envelope fa-2x" />
        <p>Mailing list</p>
      </button>
      <button type="button" className="menu-row">
        <i className="fas fa-user fa-2x" />
        <p>Your profile</p>
      </button>
      <button type="button" className="menu-row">
        <i className="fas fa-cogs fa-2x" />
        <p>Settings</p>
      </button>
      <button type="button" className="menu-row">
        <i className="fas fa-info-circle fa-2x" />
        <p>Help</p>
      </button>
      <button type="button" className="menu-row" onClick={() => dispatch(sigOut())}>
        <i className="fas fa-sign-out-alt fa-2x" />
        <p>Sign Out</p>
      </button>

    </div>
  );
};


export default MorePage;
