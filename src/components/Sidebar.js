import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { db } from "../utility/firebase.js";
import { useStateValue } from "../utility/StateProvider.js";
import RoomItem from "./RoomItem.js";

const SidebarCont = styled.div`
  flex: 0.15;
  min-width: 200px;
  min-height: 300px;
  background-color: #8a8aff;
  height: 100%;
  color: white;
  display: flex;
  flex-flow: column;
  & > h3 {
    text-align: center;
    margin: 10px 0;
    padding: 10px 0;
    border-bottom: 2px solid #ffffff;
  }
  & > .userdata {
    padding: 10px 0px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    & > p {
      font-size: 20px;
      font-weight: 400;
    }
    & > img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  @media only screen and (max-width: 500px) {
    min-width: 100px;
    & > .userdata {
      flex-direction: column;
      & > p {
        text-align: center;
      }
    }
  }
`;

const Sidebar = () => {
  const [rooms, setRooms] = useState([]);
  const [{ user }] = useStateValue();

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
      <div className="userdata">
        <img src={user?.photoURL} alt="User" />
        <p>{user?.displayName}</p>
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
