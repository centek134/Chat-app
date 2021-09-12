import React , { useEffect, useState }from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import { db } from "../utility/firebase";
import Message from "./Message";
import firebase from 'firebase';
import { useStateValue } from "../utility/StateProvider";

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
  overflow-y: auto;
  
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
    border: none;
    outline: none;
    resize: none
  }
  & > button {
    padding: 10px 20px;
    background-color: #6383ff;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    color: #ffffff;
    outline: none;
    cursor: pointer;
    border: none;
    &:hover{
      background-color: #5779ff;
    }
  }
`;
const Chat = () => {
  const { roomId } = useParams();
  const [roomMessages, setRoomMessages] = useState([]);
  const [myMessage, setMyMessage] = useState("");
  const [roomName, setRoomName] = useState("");
  const [{user}] = useStateValue();

  useEffect( () => {
    db.collection("rooms").doc(roomId).get().then((doc) => {
      if(doc.exists){
        setRoomName(doc.data().name)
      }
      else{
        return;
      }
      })
      .catch( err => console.log(err));

      db.collection("rooms").doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot( (snapshot) => 
        setRoomMessages(snapshot.docs.map(doc => doc.data())));
  },[roomId]);

    const saveMessage = (e) => {
        setMyMessage(e.target.value);
    };

    const checkPressedKey = (event) => {
      if(event.key === "Enter" && event.shiftKey){
      }
      else if(event.key === "Enter"){
        sendMessage();
      }else{
        return;
      }
    }

    const sendMessage = () => {
      const today = new Date();
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date+' '+time;

      db.collection("rooms").doc(roomId).collection("messages").add({
        message: myMessage,
        timestamp: firebase.firestore.Timestamp.fromDate(new Date(dateTime)),
        userImage:user.photoURL,
        userName:user.displayName
      });
    };


  return (
    <ChatCont>
      <ChatHeader>
        <h3>#{roomName}</h3>
      </ChatHeader>
      <ChatBody>
        {roomMessages.map(({message, timestamp, userName, userImage},index) => (
          <Message
          key={index}
          message = {message}
          timestamp = {timestamp}
          userName = {userName}
          userImage = {userImage}
          />
        ))}
      </ChatBody>
      <InputBody>
      <textarea onKeyPress = {checkPressedKey} onChange = {saveMessage}/>
        <button onClick = {sendMessage}>Send</button>
      </InputBody>
    </ChatCont>
  );
};

export default Chat;
