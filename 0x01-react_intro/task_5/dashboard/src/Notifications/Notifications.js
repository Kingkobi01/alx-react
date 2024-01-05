import React from "react";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import "./Notifications.css";

const Notifications = () => {
  return (
    <div className="Notifications">
      <p style={{ display: "inline", marginRight: "80%" }}>
        Here is the list of notifications
      </p>
      <button
        aria-label="Close"
        onClick={console.log("Close button has been clicked")}
      >
        <img style={{ display: "inline" }} src={closeIcon} alt="Close" />
      </button>
      <ul>
        <li data="default">New course available</li>
        <li data="urgent">New resume available</li>
        <li
          data="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
};

export default Notifications;
