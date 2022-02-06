import React, { useState } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import io from 'socket.io-client'
const socket = io('https://CrabRagoonServer.joethegetitguy.repl.co',{
});


function Login() { 
  function onClickHandler(givenName){
      console.log(givenName);
      
      socket.emit('ouch');
  };
  return (
    <main>

      <div className='row'>
        <FontAwesomeIcon class='Icon1' icon={faUserCircle}/>
        <label for='userName'> <h2>Please input a UserName.</h2></label>
        <input id='userNameInput' type='text' maxlength="12" className='textbox' placeholder='Name of your Character' name='userName' required></input>
        <button  className='button1' onClick={() => onClickHandler(document.getElementById('userNameInput').value)}> Submit </button>
       
          </div>

    </main>
  );
}


export default Login; 