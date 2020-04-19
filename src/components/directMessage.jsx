import React from "react";
import { getUsers } from "../services/fakeUsers";

const DirectMessage = ({ members, userId }) => {
  let contact;
  const users = [];

  if (members.length > 0) {
    for (let i = 0; i < members.length; i++) {
      let user = getUsers().find((user) => user.userId === members[i]);
      if (members[i] != userId) {
        users.push(user.userName);
      }
    }
    contact = users.map((userName, index) => (
      <div key={index} className="contact">
        {" "}
        {users[index]}
      </div>
    ));
  }

  return <div> {contact}</div>;
};

export default DirectMessage;
