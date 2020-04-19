import React from "react";
import "../chat.css";
import { getUsers } from "../services/fakeUsers";

const UserIcon = ({ userId }) => {
  let iconUrl = "";
  const users = getUsers();
  let userHasIcon = false;

  for (let i = 0; i < users.length; i++) {
    if (users[i].userId === userId) {
      iconUrl = users[i].icon;
      if (iconUrl.length > 4) {
        userHasIcon = true;
      }
    }
  }
  if (userHasIcon) {
    return (
      <div
        className="messageUserIconNoBackground"
        style={{ backgroundImage: `url(${iconUrl})` }}
      ></div>
    );
  } else {
    return <div className="messageUserIconWithBackground"></div>;
  }
};

export default UserIcon;
