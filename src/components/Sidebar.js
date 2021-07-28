import React ,{ useState, useEffect } from 'react';
import styled from 'styled-components';
import {db} from '../utility/firebase.js';

const SidebarCont = styled.div`
    flex: 0.2;
    min-width: 200px;
    background-color: blueviolet;
    height: 100%;
    color: white;
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
            {rooms.map( room => (
                <p key={room.id}>{room.name}</p>
            ))}
            <button onClick = {() => console.log(rooms)}>console.log</button>
        </SidebarCont>
    );
};

export default Sidebar;
