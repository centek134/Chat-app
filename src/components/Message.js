import React from "react";
import styled from "styled-components";

const ChatMessage = styled.div``;

const Message = ({ message, timestamp, user, userImage }) => {
  return (
    <ChatMessage>
      <img src={userImage} alt="" />
      <div className="message_info">
        <h4>{user} timestamp...</h4>
        <p>{message}</p>
      </div>
    </ChatMessage>
  );
};

export default Message;
