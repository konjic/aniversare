import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


function Pagina8() {
  const [style, setStyle] = useState({marginTop: '8%'});
  const [butonStatus, setButonStatus] = useState(true);
  const [isVisible, setVisible] = useState(false);
  const onClick = () => setVisible(!isVisible);

  function textChange(e) {
    if(e.target.value === 'Lupta dintre asteri si bryce'){

        setStyle({border: '5px solid lime', borderRadius: '2px', marginTop: '8%'});
        setButonStatus(false)
    }
    else
        setStyle({border: '5px solid red',  borderRadius: '2px', marginTop: '8%'});
}

let navigate = useNavigate(); 
const routeChange = () =>{ 
  let path = `/pas-8`; 
  navigate(path);
}
  return (
    <div className='spookybackground'>
        <div className='center-longText'>
            
        <h1> 
        Care este punctul culminant in Cartea nr 2?
        </h1>
        </div>
        <div className='center' >
            <input style={style} onChange={textChange} type="text"/>
        </div>
        <div> {!butonStatus? <p>pag ─ ┘@, rand └</p> : null}</div>
        <div> {!butonStatus? <h1> 
          <table>
        <thead>
            <tr>
                <th>Numar</th>
                <th>Simbol</th>
            </tr>
        </thead>
        <tbody>
        <tr>
              
              <td>0</td>
              <td>@</td>
          </tr>
            <tr>
              
                <td>1</td>
                <td>─</td>
            </tr>
            <tr>
                <td>2</td>
                <td>│</td>
            </tr>
            <tr>
                <td>3</td>
                <td>┌</td>
            </tr>
            <tr>
                <td>4</td>
                <td>┐</td>
            </tr>
            <tr>
                <td>5</td>
                <td>└</td>
            </tr>
            <tr>
                <td>6</td>
                <td>┘</td>
            </tr>
            <tr>
                <td>7</td>
                <td>├</td>
            </tr>
            <tr>
                <td>8</td>
                <td>┤</td>
            </tr>
            <tr>
                <td>9</td>
                <td>┬</td>
            </tr>
            
        </tbody>
    </table>
            </h1> : null}</div>
        <div className="buton-pas">


<button disabled={butonStatus} style={{padding: '5px'}} onClick={routeChange}> PASUL 8</button>
</div>
<div className="buton-pas">
<button onClick={onClick} style={{padding: '5px', marginTop: '3%'}}>{isVisible? 'HIDE HINT' : 'SHOW HINT'}</button>
{isVisible? <Text /> : null}
</div>
    </div>
  )
}

const Text = () => <div><h1>Lupta dintre.... si [personaj](doar prima litera capitalizata)</h1></div>;
export default Pagina8