import React from 'react'
import '../App.css';
import { useNavigate } from "react-router-dom";

function Pagina1() {
    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/pas-2`; 
    navigate(path);
  }

  return (
    <div>

    <div className='imagine'>
        <img className="logo" src="images/hoeab-tablet.jpg" alt="skull logo image" /> <br/>
      </div>
      
      <div className="buton">

       <button onClick={routeChange}> START GAME</button>
      </div>
    </div>
  )
}

export default Pagina1