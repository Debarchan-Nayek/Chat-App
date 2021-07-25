import React,{ useState} from 'react';
import { Link } from 'react-router-dom';
import 'react-bootstrap';
import { Button } from 'react-bootstrap';

import './style.css';

const Join = (props) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
  return(
    <div className="joinOuterContainer">
        <div className="joinInnerContainer">
            <h1 className="heading pb-5 mb-5">Join Chatroom</h1>
            <div className="form-outline">
                <input placeholder="Enter Name" className="mb-3 form-control" type="text" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-outline">
                <input placeholder="Enter Room Id"  className="form-control" type="text" onChange={(e) => setRoom(e.target.value)} />
            </div>
            <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                <Button size="lg" className="mt-3" type="submit">Enter Chat</Button>
            </Link>
        </div>
    </div>
   )

 }

export default Join