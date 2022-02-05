import React, { useEffect, useState } from "react";
import '../styles/App.css';

const App = () => {

  let [count, setCount] = useState(0)
  
  const myAlert = () => {
    alert('cant edit it'); 
  }
  const myIncre = () => { 
    setCount(count + 1); 
  }

  return (
    <div className="ball">
      <h1 className="count" ondoubleclick={myAlert}>{count}</h1>
      <button className="increment-button" onclick={myIncre}>Increment</button>
    </div>
  )
}


export default App;
