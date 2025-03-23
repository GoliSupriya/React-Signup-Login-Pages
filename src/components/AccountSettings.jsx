import React from "react";
import "./AccountSettings.css";

export default function AccountSettings() {
  return (
    <div className="container">
      <h2>Account Settings</h2>

      <div className="profile-card">
        <img src="https://via.placeholder.com/80" alt="Profile" className="profile-pic" />
        <div>
          <h3>Marry Doe</h3>
          <p>Marry@gmail.com</p>
        </div>
      </div>

      <p className="description">
        Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.
      </p>
    </div>
  );
}
