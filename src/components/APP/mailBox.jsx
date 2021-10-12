import React from "react";
function MailBox(props) {
  let unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello</h1>
      {unreadMessages.length > 0 && (
        <div>
          you have {unreadMessages.length} unread messages
          {unreadMessages.map((e) => (
            <h6>{e}</h6>
          ))}
        </div>
      )}
    </div>
  );
}

export default MailBox;
