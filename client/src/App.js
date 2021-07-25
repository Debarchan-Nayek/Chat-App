import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import {io} from 'socket.io-client';

import Chat from './components/Chat';
import Join from './components/Join';
import './App.css';

//const socket  = io('ws://localhost:5000')

function App() {

  return (
      <Router>
          <Route path="/" exact component={Join} />
          <Route path="/chat" component={Chat} />
      </Router>
  );
}

export default App;
