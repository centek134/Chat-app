import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { db } from '../utility/firebase';

const Item = styled.button`
    width: 100%;
    font-size: 18px;
    font-weight: 500px;
    height: 40px;
    display: flex;
    align-items: center;
    background-color: #8A8AFF;
    border: none;
    color: #ffffff;
    cursor: pointer;
    padding: 0 0 0 15px;
    &:hover{
        background-color: #ffffff;
        color: #8A8AFF;
    }
`;

const RoomItem = ({title, id, addRoomOption }) => {
    const history = useHistory();

    const selectRoom = () => {
        if(id){
            history.push(`/room/${id}`);
        }
        else{
            history.push("title");
        };
    };

    const addRoom = () => {
        const roomName = prompt("Please enter channel name (max 10 characters):");
        if(roomName && roomName.length <=10){
            db.collection("rooms").add({
                name:roomName
            });
        }
        else if(roomName.length > 10){
            alert("To many characters!")
            return;
        }
        else{
            alert("Fill the input with valid data!")
            return;
        }
    }


    return (
        <Item onClick = {addRoomOption? addRoom : selectRoom}>
            <p># {title}</p>
        </Item>
    );
};

export default RoomItem;
