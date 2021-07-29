import React ,{ useState, useEffect } from 'react';
import styled from 'styled-components';
import {db} from '../utility/firebase.js';
import RoomItem from './RoomItem.js';

const SidebarCont = styled.div`
    flex: 0.15;
    min-width: 200px;
    background-color: #8A8AFF;
    height: 100%;
    color: white;
    display: flex;
    flex-flow: column;
    & > h3{
        text-align: center;
        margin: 10px 0;
        padding: 10px 0;
        border-bottom: 2px solid #ffffff;
    }
`;

const Sidebar = () => {

    const [rooms, setRooms] = useState([]);

    useEffect( () => {
       db.collection("rooms").onSnapshot( snapshot => {
            setRooms(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    name: doc.data().name
                }))
            )
        });
    }, [])

    return (
        <SidebarCont>
            <div>
                <h2>Tomasz Osuch</h2>
            </div>


            <h3>Channels</h3>
            {rooms.map( room => (
                <RoomItem key={room.id} title = {room.name}></RoomItem>
            ))}
        </SidebarCont>
    );
};

export default Sidebar;
