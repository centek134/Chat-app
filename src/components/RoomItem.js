import React from 'react'
import styled from 'styled-components';

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

const RoomItem = ({title}) => {


    return (
        <Item>
            <p># {title}</p>
        </Item>
    );
};

export default RoomItem;
