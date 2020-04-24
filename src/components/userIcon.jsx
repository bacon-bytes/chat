import React from "react";
import "../chat.css";
import { getUsers } from "../services/fakeUsers";
import Icon from "./common/icon";

const UserIcon = ({ id }) => {
  const users = getUsers();

  return <Icon id={id} arrayOfObjects={users} />;
};

export default UserIcon;
