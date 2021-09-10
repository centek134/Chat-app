import React from "react";
import styled from "styled-components";

const ChatMessage = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;

  & > img {
    height: 50px;
    width: 50px;
    object-fit: contain;
  }
  & > .message_info {
    padding-left: 10px;
    h4 {
      padding-bottom: 5px;
      .timestamp {
        font-weight: 300;
        font-size: 12px;
        color: gray;
      }
    }
  }
`;

const Message = ({ message, timestamp, userName, userImage }) => {
  return (
    <ChatMessage>
      <img src={userImage} alt="" />
      <div className="message_info">
        <h4>
          {userName}{" "}
          <span className="timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </ChatMessage>
  );
};

export default Message;
