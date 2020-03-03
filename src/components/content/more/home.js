import React from 'react';
import { useDispatch } from 'react-redux';
import { sigOut, setCurrentPage } from '../../../slices/statusSlice';
import getHeadImage from '../../../helpers/headImage';

const MoreHomePage = ({ user }) => {
  const dispatch = useDispatch();
  const namePlaceHolder = user.name ? user.name : 'Jonh Done';
  const sexPlaceHolder = user.sex ? user.sex : 'Secret';
  const headImage = getHeadImage(namePlaceHolder, sexPlaceHolder);

  return (
    <div className="more-page-home">
      <div className="profile-row">
        <button
          type="button"
          onClick={() => dispatch(setCurrentPage('edit user'))}
        >
          <img src={headImage} alt="userHead" />
        </button>
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


export default MoreHomePage;
