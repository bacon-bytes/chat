import React from "react";
import "../../chat.css";

const Icon = ({ id, arrayOfObjects }) => {
  let iconUrl = "";
  const object = arrayOfObjects;
  let userHasIcon = false;
  let iconClassName = "";

  for (let i = 0; i < object.length; i++) {
    if (object[i].id === id) {
      iconUrl = object[i].icon;
      if (iconUrl.length > 4) {
        userHasIcon = true;
      }
    }
  }
  if (userHasIcon) {
    iconClassName = "messageUserIconNoBackground";
  } else {
    iconClassName = "messageUserIconWithBackground";
  }
  return (
    <div
      className={iconClassName}
      style={{ backgroundImage: `url(${iconUrl})` }}
    ></div>
  );
};

export default Icon;
