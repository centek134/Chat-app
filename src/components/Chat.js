import React , { useState }from "react";
import styled from "styled-components";
import { useParams } from "react-router";

const ChatCont = styled.div`
  display: flex;
  flex: 0.85;
  height: 100%;
  flex-direction: column;
`;

const ChatHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  box-shadow: 0 0 2px black;
  & > h3 {
    padding-left: 20px;
  }
`;

const ChatBody = styled.div`
  flex: 0.85;
  width: 100%;
  padding: 0 25px;
`;

const InputBody = styled.div`
  display: flex;
  flex: 0.15;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background-color: #ededed ;
  &  > textarea {
    width: 70%;
    height: 100px;
    padding: 0 10px;
    font-size: 20px;
    border-radius: 15px;
    border: 2px solid grey;
    outline: none;
    resize: none
  }
  & input[type=text] {
        word-wrap: break-word;
        word-break: break-all;
        height: 80px;
    }
`;
const Chat = () => {
  const { roomId } = useParams();
    const [message, setMessage] = useState("");

    const saveMessage = (e) => {
        setMessage(e.target.value);
        console.log(message);
    };

  return (
    <ChatCont>
      <ChatHeader>
        <h3>#Actual chat name</h3>
        <p>this is a {roomId} room</p>
      </ChatHeader>
      <ChatBody>
        <p>displaying messages</p>
      </ChatBody>
      <InputBody>
      <textarea onChange = {saveMessage}/>
        <button>Send</button>
      </InputBody>
    </ChatCont>
  );
};

export default Chat;
