import React from 'react'
import styled from 'styled-components';
import { auth, provider } from '../utility/firebase';


const LoginWindow = styled.div`

    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#069CFF ;//#F7F7F7;
    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-height: 350px;
        border-radius: 15px;
        background-color: #069CFF;//#ffffff;
        color: #ffffff;
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
            font-weight: 600;
            padding: 15px 5px;
            width: 200px;
            border: 3px solid #ffffff;
            background-color: #069CFF;
            color: #ffffff;
            cursor: pointer;
            transition: 400ms;
            &:hover{
                background-color: #ffffff;
                color: #069CFF;
                border: 3px solid #069CFF;
            }
        }
    } 
`;

const Login = (props) => {


    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            console.log("USER INFO >>>>", result);
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
    <LoginWindow>
        <div>

        <h1>Chat App</h1>
        <h3>Do you like typing with people? Don't let this opportunity slip away! Let's join us and start making friends.</h3>
        <button onClick ={signIn}>Sign in with Google</button>
        </div>
    </LoginWindow>
            
    )
}

export default Login;