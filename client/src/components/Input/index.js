import React from 'react';
import attach from '../../assets/paper-clip.png';

import './style.css';

const Input = ({ setMessage, sendMessage, message, selectFile }) => {
  return(
    <form className="form">
        <input
            className="input"
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={({target: {value}}) => setMessage(value)}
            onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e) : null}
        />
        <div className="file-input-container">
          <input type="file" id="hidden-file" onChange={selectFile} />
          <label htmlFor="hidden-file">
            <img src={attach} alt={"attach-icon"} />
          </label>
        </div>
        <button className="sendButton" onClick={(e) => sendMessage(e)}>Send</button>
    </form>
   )

 }

export default Input