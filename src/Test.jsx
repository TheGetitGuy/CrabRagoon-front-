import React, { useState } from 'react';
import './App.css';


function Test() {
  const [tally, setTally] = useState(0)
  return (
    <main>
      <h1> 
        {tally}<br/>
        <button onClick={()=> setTally(tally+1)}>CLICK</button>
        <button onClick={()=> setTally(tally-1)}>Don't CLICK</button>
      </h1>
    </main>
  );
}


export default Test;
