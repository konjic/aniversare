import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


function Pagina3() {
    const [style, setStyle] = useState({marginTop: '8%'});
    const [butonStatus, setButonStatus] = useState(true);
    const [isVisible, setVisible] = useState(false);

  const onClick = () => setVisible(!isVisible);


    function textChange(e) {
        if(e.target.value === 'Moartea prietenilor'){

            setStyle({border: '5px solid lime', borderRadius: '2px', marginTop: '8%'});
            setButonStatus(false)
        }
        else
            setStyle({border: '5px solid red',  borderRadius: '2px', marginTop: '8%'});
    }

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/pas-4`; 
      navigate(path);
    }

  return (
    <div className='spookybackground'>
        <div className='center-longText'>
            
        <h1> 
        Ce tragedie ii schimba viata lui Bryce Quinlan?
        </h1>
        </div>

        <div className='center' >
            <input style={style} onChange={textChange} type="text"/>
        </div>

        <div> {!butonStatus? <p>pag ┐└, rand ─ ─</p> : null}</div>
        <div className="buton-pas">

       <button disabled={butonStatus} style={{padding: '5px'}} onClick={routeChange}> PASUL 3</button>
      </div>

      <div className="buton-pas">
      <button onClick={onClick} style={{padding: '5px', marginTop: '3%'}}>{isVisible? 'HIDE HINT' : 'SHOW HINT'}</button>
      {isVisible? <Text /> : null}
    </div>
    </div>
  )
}

const Text = () => <div><h1>Moartea p.........</h1></div>;
export default Pagina3