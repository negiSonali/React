import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophoneAltSlash,faMicrophone} from '@fortawesome/free-solid-svg-icons';
import './index.css';

function App() {
  const [state, setValue] = useState(true);
  function onSelectChanged() {
    setValue(!state);
    console.log("clicked");
  };

  return(
    <>
    <div className='App' >
      <button className='button' onClick={onSelectChanged}>   
      <FontAwesomeIcon
      className={"fontAwesomeIcon"} 
      icon={state===true?faMicrophone:faMicrophoneAltSlash} style={{
      width: '100px',
      height:'100px', 
      }}/>
      </button>  
    </div>
    </>
  );
}
export default App;