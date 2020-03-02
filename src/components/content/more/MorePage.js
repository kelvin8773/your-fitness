import React from 'react';
import { useDispatch } from 'react-redux';
import { sigOut } from '../../../slices/statusSlice';

const MorePage = ({ user }) => {
  let headImagePlaceHolder = './assets/images/male.jpg';
  let namePlaceHolder = 'Jonh Done';
  let sexPlaceHolder = 'male';
  const dispatch = useDispatch();

  if (user) {
    switch (user.name) {
      case 'Gregoire Vella':
        headImagePlaceHolder = './assets/images/gregoire_vella.jpg';
        namePlaceHolder = 'Gregoire Vella';
        sexPlaceHolder = 'Male';
        break;
      case 'Kelvin Liang':
        headImagePlaceHolder = './assets/images/kelvin.jpg';
        namePlaceHolder = 'Kelvin Liang';
        sexPlaceHolder = 'Male';
        break;
      default:
        if (user.sex) {
          headImagePlaceHolder = user.sex === 'male' ?
            './assets/images/male.jpg' : './assets/images/female.jpg';
        }
        namePlaceHolder = user.name;
        sexPlaceHolder = "User not Specified."
    }
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
