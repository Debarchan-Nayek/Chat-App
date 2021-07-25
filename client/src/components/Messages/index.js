import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';
import 'react-bootstrap';

import './style.css';

const Messages = ({ messages, name }) => (
    <ScrollToBottom className="messages ml-3">
        {messages.map((message, i) => 
        <div key={i}>
            <Message message={message} name={name} />
        </div>)}
    </ScrollToBottom>
 );

export default Messages;