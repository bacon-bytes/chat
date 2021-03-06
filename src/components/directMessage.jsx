import React from "react";
import { getUsers } from "../services/fakeUsers";

const DirectMessage = ({
  members,
  id,
  directMessageChannels,
  handleChannelChange,
  currentChannel,
}) => {
  let contact;
  const users = [];
  const directMessageIds = [];
  let dmClassName = "";

  if (members.length > 0) {
    for (let i = 0; i < members.length; i++) {
      let user = getUsers().find((user) => user.id === members[i]);
      if (members[i] != id) {
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
        dmClassName = "menuSelected";
      } else {
        dmClassName = "menuHover";
      }
      return (
        <div key={index} className={dmClassName}>
          <div
            className="contact channel"
            onClick={() => handleChannelChange(directMessageIds[index])}
          >
            {" "}
            {users[index]}
          </div>
        </div>
      );
    });
  }

  return <div> {contact}</div>;
};

export default DirectMessage;
