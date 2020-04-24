import React from "react";
import { getUsers } from "../services/fakeUsers";

const DirectMessage = ({
  members,
  userId,
  directMessageChannels,
  handleChannelChange,
  currentChannel,
}) => {
  let contact;
  const users = [];
  const directMessageIds = [];

  if (members.length > 0) {
    for (let i = 0; i < members.length; i++) {
      let user = getUsers().find((user) => user.userId === members[i]);
      if (members[i] != userId) {
        users.push(user.userName);
        for (let j = 0; j < directMessageChannels.length; j++) {
          if (directMessageChannels[j].members.includes(members[i])) {
            directMessageIds.push(directMessageChannels[j].id);
          }
        }
      }
    }
    contact = users.map((userName, index) => {
      if (currentChannel === directMessageIds[index]) {
        return (
          <div key={index} className="menuSelected">
            <div
              className="contact channel"
              onClick={() => handleChannelChange(directMessageIds[index])}
            >
              {" "}
              {users[index]}
            </div>
          </div>
        );
      } else {
        return (
          <div key={index} className="menuHover">
            <div
              className="contact channel"
              onClick={() => handleChannelChange(directMessageIds[index])}
            >
              {" "}
              {users[index]}
            </div>
          </div>
        );
      }
    });
  }

  return <div> {contact}</div>;
};

export default DirectMessage;
