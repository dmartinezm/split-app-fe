import React from "react";

interface UserMessage {
  name: string;
  message: string;
}

const Message = (props: UserMessage) => {
  return (
    <p>
      {props.name}, {props.message}
    </p>
  );
};

export default Message;
