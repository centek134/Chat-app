import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { db } from "../utility/firebase.js";
import { useStateValue } from "../utility/StateProvider.js";
import RoomItem from "./RoomItem.js";

const SidebarCont = styled.div`
  flex: 0.15;
  min-width: 200px;
  background-color: #8a8aff;
  min-height: 100vh;
  height: 100%;
  color: white;
  display: flex;
  flex-flow: column;
  & > .userdata {
    display: flex;
    justify-content: space-evenly;
    & > h2{
      width: 100px;
    }
    & > img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

  }
  & > h3 {
    text-align: center;
    margin: 10px 0;
    padding: 10px 0;
    border-bottom: 2px solid #ffffff;
  }
`;

const Sidebar = () => {
  const [rooms, setRooms] = useState([]);
  const [{user}] = useStateValue()


  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      );
    });
  }, []);

  return (
    <SidebarCont>
      <div className = "userdata">
        <h2>{user?.displayName}</h2>
        <img src = {user?.photoURL} alt = "User"/>
      </div>

      <h3>Channels</h3>
      <RoomItem addRoomOption={true} title="Add Channel"></RoomItem>
      {rooms.map((room) => (
        <RoomItem key={room.id} title={room.name} id={room.id}></RoomItem>
      ))}
    </SidebarCont>
  );
};

export default Sidebar;
