import React from "react";
import "../../chat.css";

const Icon = ({ id, arrayOfObjects }) => {
  let iconUrl = "";
  const object = arrayOfObjects;
  let userHasIcon = false;

  for (let i = 0; i < object.length; i++) {
    if (object[i].id === id) {
      iconUrl = object[i].icon;
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

export default Icon;
