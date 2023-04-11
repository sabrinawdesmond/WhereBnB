import React from "react";
import menuIcon from "./menuIcon.png";
import profileIcon from "./profileIcon.png";
import { useState, useEffect } from "react";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";

function LoggedOutUserMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const [showLoginFormModal, setShowLoginFormModal] = useState(false);
  const [showSignupFormModal, setShowSignupFormModal] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const openLoginFormModal = () => {
    setShowLoginFormModal(true);
    setShowMenu(false);
  };

  const openSignupFormModal = () => {
    setShowSignupFormModal(true);
    setShowMenu(false);
  };

  const handleLoginClick = () => {
    openLoginFormModal();
  };

  return (
    <>
      <div className="userMenu">
        <button onClick={openMenu}>
          <img src={menuIcon} alt="menu icon" />
          <img src={profileIcon} alt="profile icon" />
        </button>
        {showMenu && (
          <ul className="profile-dropdown">
            <li onClick={handleLoginClick}>Log In</li>
            <li onClick={openSignupFormModal}>Sign Up</li>
          </ul>
        )}
      </div>
      {showLoginFormModal && <LoginFormModal onClose={() => setShowLoginFormModal(false)} />}
      {showSignupFormModal && <SignupFormModal onClose={() => setShowSignupFormModal(false)} />}
    </>
  );
}

export default LoggedOutUserMenu;
