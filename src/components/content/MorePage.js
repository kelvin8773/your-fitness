import React from 'react';

const MorePage = () => (
  <div className="more-page">

    <div className="profile-row">
      <img src="./assets/images/kelvin_profile.jpg" alt="userHead" />
      <div>
        <div className="name">Kelvin Liang</div>
        <div className="sex">Male</div>
      </div>
    </div>

    <div className="menu-row">
      <i class="fas fa-bullseye fa-2x"></i>
      <p>Your Goal</p>
    </div>
    <div className="menu-row">
      <i class="fas fa-envelope fa-2x"></i>
      <p>Mailing list</p>
    </div>
    <div className="menu-row">
      <i class="fas fa-user fa-2x"></i>
      <p>Your profile</p>
    </div>
    <div className="menu-row">
      <i class="fas fa-cogs fa-2x"></i>
      <p>settings</p>
    </div>
    <div className="menu-row">
      <i class="fas fa-info-circle fa-2x"></i>
      <p>Help</p>
    </div>

  </div>
);

export default MorePage;