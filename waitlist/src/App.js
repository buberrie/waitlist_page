import React from 'react';
import { useState } from 'react';
import Access from './components/Access/Access.js';
import Request from './components/Request/Request.js';
import PopUp from './components/PopUp/PopUp';

function App() {

  const [easeOut, setEaseOut] = useState(false);
  const onEaseOut = () => setEaseOut(!easeOut)

  //handle popup
  const [popIn, setPopIn] = useState(false);
    const onPopIn = () => setPopIn(!popIn)

  //hide popup when anywhere on the screen is clicked
  const hidePopIn = (popIn ? onPopIn : !onPopIn) 
  
  const easeOutDelay = () => {
    setTimeout(hidePopIn, 450)
    onEaseOut()
  }

  const handlePopUp = (e) => {
    e.preventDefault()
    onPopIn()
  }  

  return (
    <div className="App" onClick={easeOutDelay}>
      {popIn && <PopUp popIn={popIn} easeOut={easeOut}/>}
      <Access setPopIn={handlePopUp}/>
      <Request setPopIn={handlePopUp}/>
    </div>
  );
}

export default App;
