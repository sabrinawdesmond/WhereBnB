import React from "react";
import menuIcon from "./menuIcon.png";
import profileIcon from "./profileIcon.png";
import { useState, useEffect } from "react";
import "./UserMenu.css"
import LoginForm from "../LoginFormModal/LoginForm";
import { Modal } from "../../context/Modal";
import SignupForm from "../SignupFormModal/SignupForm";


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
  };

  const openSignupFormModal = () => {
    setShowSignupFormModal(true);
    setShowMenu(false);
  };

  const handleLoginClick = () => {
    openLoginFormModal();
  };

  const handleSignupClick = () => {
    openSignupFormModal();
  };

  const handleCloseLoginForm = () => {
    setShowLoginFormModal(false);
  };

  const handleCloseSignupForm = () => {
    setShowSignupFormModal(false);
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
            <li onClick={handleSignupClick}>Sign Up</li>
          </ul>
        )}
      </div>
      {showLoginFormModal && (
        <Modal onClose={handleCloseLoginForm}>
          <LoginForm onClose={handleCloseLoginForm} />
        </Modal>
      )}
        {showSignupFormModal && (
        <Modal onClose={handleCloseSignupForm}>
          <SignupForm onClose={handleCloseSignupForm} />
        </Modal>
      )}
    </>
  );
}

export default LoggedOutUserMenu;
