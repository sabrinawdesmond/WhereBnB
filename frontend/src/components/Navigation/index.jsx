import React from "react";
import { useSelector } from "react-redux";
// import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import LoginFormModal from "../LoginFormModal";
import logoImage from "./logo.png";
import SignupFormModal from "../SignupFormModal";
import menuIcon from "./menuIcon.png";
import profileIcon from "./profileIcon.png";
import { Link } from "react-router-dom";
import LoggedInUserMenu from "./LoggedInUserMenu";
import LoggedOutUserMenu from "./LoggedOutUserMenu";

function Navigation() {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <LoggedInUserMenu user={sessionUser} />;
  } else {
    sessionLinks = <LoggedOutUserMenu />
      // <>
      //   <LoginFormModal />
      //   <SignupFormModal />
      // </>
    
  }

  return (
    <>
      <div className="navBar">
        <Link to="/">
          <div className="logo-container">
            <img src={logoImage} alt="logo" />
            <div className="title-container">
              <h2>Wherebnb</h2>
            </div>
          </div>
        </Link>
        <h3>Search</h3>
        <div className="navLinks">
          {/* <div className="profileDrop">
            <a href="/">
              <img src={menuIcon} alt="menu" />
            </a>
            <a href="/">
              <img src={profileIcon} alt="profile" />
            </a>
          </div> */}
          {sessionLinks}
        </div>
      </div>
    </>
  );
}

export default Navigation;
