import React from "react";
import './Header.scss';

import logout_icon from '../../assets/icons/logout.svg';

const Header = () => {
  return (
    <header className="header">
      <h3>Shapes</h3>
      <div className="logout-button">
        <p>Logout</p>
        <img src={logout_icon} alt="logout icon" />
      </div>
    </header>
  );
};

export default Header;
