import React from 'react'
import '../styles/App.css';
const App = () => {

  const handleClick = (event) =>{
    // use console.log
    console.log('Button id is:-button-a', event);

  }

  // do not remove the two buttons or change their id
  return (
    <div id="main">
      <button id="button-a" onChange={handleClick}>Button A</button>
      <button id="button-b" onChange={handleClick}>Button B</button>
    </div>
  )
}


export default App;
