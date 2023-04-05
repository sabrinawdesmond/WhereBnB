import React from "react";
import menuIcon from "./menuIcon.png";
import profileIcon from "./profileIcon.png";

function UserMenu() {
  return (
    <div className="userMenu">
      <button>
        <img src={menuIcon} alt="menu icon" />
        <img src={profileIcon} alt="profile icon" />
      </button>
    </div>
  );
}

export default UserMenu;
