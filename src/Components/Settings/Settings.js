import React from "react";
import "./Settings.css";
import SetIcon from "react-icons/lib/md/settings";

const Settings = () => {
  return (
    <div className="settings-container">
      <SetIcon className="settings-icon" />
      <div className="location-container">
        <p className="location-title">Antelope Canyon, Arizona</p>
        <p className="location-photographer">Photo by Christian Zenaty</p>
      </div>
    </div>
  );
};

export default Settings;
