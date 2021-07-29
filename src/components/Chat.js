import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';

    const ChatCont = styled.div`
    flex: 0.85;
    height: 100%;
    `
const Chat = () => {
    const {roomId} = useParams();
    return (
        <ChatCont>
            <p>this is a {roomId} room</p>
        </ChatCont>
    );
};

export default Chat;
