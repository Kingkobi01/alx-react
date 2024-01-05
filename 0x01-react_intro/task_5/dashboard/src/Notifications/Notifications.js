import React from "react";
import close_icon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils.js";
import "./Notifications.css";

export const Notifications = () => (
  <div className="Notifications">
    <p>Here is the list of notifications</p>
    <ul>
      <li data="default">New course available</li>
      <li data="urgent">New resume available</li>
      <li data="urgent">{getLatestNotification()}</li>
      <li
        data="urgent"
        dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
      ></li>
    </ul>
    <button
      aria-label="close"
      style={{
        position: "absolute",
        right: "1em",
        top: "1em",
        border: 0,
        background: "none",
      }}
      onClick={() => {
        console.log("Close button has been clicked");
      }}
    >
      <img
        src={close_icon}
        style={{
          width: "1em",
        }}
        alt=""
      />
    </button>
  </div>
);
