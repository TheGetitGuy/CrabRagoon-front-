import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.jsx'
import io from 'socket.io-client'
const socket = io('https://CrabRagoonServer.joethegetitguy.repl.co',{
});



socket.on('connect', (connecter) => {
  console.log('connected')
  socket.emit('connection' )

});


ReactDOM.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  document.getElementById('root')
);
