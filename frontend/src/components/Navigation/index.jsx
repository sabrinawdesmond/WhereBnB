import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import LoginFormModal from '../LoginFormModal';
import logoImage from './logo.png'
import SignupFormModal from '../SignupFormModal';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />

        <SignupFormModal />
      </>
    );
  }

  return (
    <>
    <div className="navBar">
      <div className="logo">
      <a href="/">
        <img src={logoImage} alt="logo"  style={{ width: '40px', height: '40px' }} />
        </a>
      </div>
        <h3>whereBnB</h3>
      <div className="navLinks">
        {sessionLinks}
      </div>
    </div>
    </>
  );
}

export default Navigation;
