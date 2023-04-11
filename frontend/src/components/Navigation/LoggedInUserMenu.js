import React from "react";
import menuIcon from "./menuIcon.png";
import profileIcon from "./profileIcon.png";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import * as sessionActions from '../../store/session'


function LoggedInUserMenu({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <div className="userMenu">
      <button onClick={openMenu}>
        <img src={menuIcon} alt="menu icon" />
        <img src={profileIcon} alt="profile icon" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>Profile</li>
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default LoggedInUserMenu;
