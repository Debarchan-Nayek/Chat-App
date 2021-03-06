import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { io }  from 'socket.io-client';
import 'react-bootstrap';
import { Container } from 'react-bootstrap';

import TextContainer from '../TextContainer';
import Messages from '../Messages';
import InfoBar from '../Infobar';
import Input from '../Input';

import './style.css'

let socket;

const Chat = ({location}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        socket = io(ENDPOINT);
        setRoom(room);
        setName(name);

        socket.emit('join', {name, room}, (error) => {
            if(error) {
                alert(error);
            }
        });
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages(messages => [...messages, message]);
        });

        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();

        if(message){
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

  return(
    <div className="outerContainer">
        <div className="chat-box">
            <InfoBar room={room} /> 
            <Messages messages={messages} name={name} />
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </div>
        <TextContainer users={users} />
    </div>
   );

   }

export default Chat