import React from "react";
import styled from "styled-components";

const ChatMessage = styled.div`
  display: flex;
  margin: 5px 0;
  & > img {
    height: 50px;
    width: 50px;
    object-fit: contain;
    @media only screen and (max-width: 350px) {
    height: 30px;
    width: 30px;
  }
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
    <ChatMessage className = "message">
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
