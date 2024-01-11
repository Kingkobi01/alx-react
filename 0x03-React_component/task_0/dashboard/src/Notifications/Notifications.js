import PropTypes from "prop-types";
import React from "react";
import close_icon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import "./Notifications.css";

export const Notifications = ({ displayDrawer = false }) => (
  <>
    <div className="menuItem">
      <p>Your Notifications</p>
    </div>
    {displayDrawer && (
      <div className="Notifications">
        <p>Here is the list of notifications</p>
        <ul>
          {/* <li data="default">New course available</li>
      <li data="urgent">New resume available</li>
      <li data="urgent">{getLatestNotification()}</li>
      <li
        data="urgent"
        dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
      ></li> */}
          <NotificationItem type="default" value="New course available" />
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem type="urgent" value={getLatestNotification()} />
          <NotificationItem
            type="urgent"
            // value={getLatestNotification()}
            html={{ __html: getLatestNotification() }}
          />
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
    )}
  </>
);

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};
