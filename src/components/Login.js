import React from 'react'
import styled from 'styled-components';


const LoginWindow = styled.div`

    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F7F7F7;
    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-height: 350px;
        border-radius: 15px;
        background-color: #ffffff;
        max-width: 500px;
        & > h1{
            font-size: 60px;
        }
        & > h3{
            max-width: 600px;
            margin: 5px 0 35px 15px;
        }
        & > button{
            font-size: 20px;
            padding: 15px 5px;
            width: 200px;
        }
    } 
`;

const Login = (props) => {
    return (
    <LoginWindow>
        <div>

        <h1>Chat App</h1>
        <h3>Do you like typing with people? Don't let this opportunity slip away! Let's join us and start making friends.</h3>
        <button>Sign in with Google</button>
        </div>
    </LoginWindow>
            
    )
}

export default Login;