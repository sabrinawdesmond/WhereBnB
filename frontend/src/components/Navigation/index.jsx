import React from 'react';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import LoginFormModal from '../LoginFormModal';
import logoImage from './logo.png'
import SignupFormModal from '../SignupFormModal';
import menuIcon from './menuIcon.png'
import profileIcon from'./profileIcon.png'
import { Link } from 'react-router-dom';

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

    <Link to="/">
        <div className="logo-container">
        <img src={logoImage} alt="logo"  style={{ width: '40px', height: '40px' }} />
          <div className="title-container">
            <h2>Wherebnb</h2>
          </div>
        </div>
      </Link>
    
        <h3>Search</h3>
      <div className="navLinks">
        <div class='profileDrop'>
      <a href="/">
        <img src={menuIcon} alt="logo" />
        </a>
        <a href="/">
        <img src={profileIcon} alt="logo"  />
        </a>
        </div>
        {sessionLinks}
      </div>
    </div>
    </>
  );
}

export default Navigation;
