import React from "react";
import { useDispatch } from 'react-redux';

import './Header.scss';

import logout_icon from '../../assets/icons/logout.svg';
import { logout } from "../../redux/actions/auth/auth.actions";

const Header = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <header className="header">
      <h3>Shapes</h3>
      <div className="logout-button" onClick={handleLogout}>
        Logout
        <img src={logout_icon} alt="logout icon" />
      </div>
    </header>
  );
};

export default Header;
