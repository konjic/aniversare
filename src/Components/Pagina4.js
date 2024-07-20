import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


function Pagina4() {
    const [style, setStyle] = useState({marginTop: '8%'});
    const [butonStatus, setButonStatus] = useState(true);
    const [isVisible, setVisible] = useState(false);

    const onClick = () => setVisible(!isVisible);


    function textChange(e) {
        if(e.target.value === 'Arhanghel'){

            setStyle({border: '5px solid lime', borderRadius: '2px', marginTop: '8%'});
            setButonStatus(false)
        }
        else
            setStyle({border: '5px solid red',  borderRadius: '2px', marginTop: '8%'});
    }

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/pas-5`; 
      navigate(path);
    }

  return (
    <div className='spookybackground'>
        <div className='center-longText'>
            
        <h1> 
        Ce este Micah Domitus?
        </h1>
        </div>

        <div className='center' >
            <input style={style} onChange={textChange} type="text"/>
        </div>

        <div> {!butonStatus? <p>pag └ @, rand ─ ┘</p> : null}</div>


      <div> {!butonStatus? <h1> 
            <table>
        <thead>
            <tr>
                <th>Litera</th>
                <th>Simbol</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>A</td>
                <td>/\</td>
            </tr>
            <tr>
                <td>B</td>
                <td>|))</td>
            </tr>
            <tr>
                <td>C</td>
                <td>(-</td>
            </tr>
            <tr>
                <td>D</td>
                <td>|)</td>
            </tr>
            <tr>
                <td>E</td>
                <td>-||</td>
            </tr>
            <tr>
                <td>F</td>
                <td>-|</td>
            </tr>
            <tr>
                <td>G</td>
                <td>(-)</td>
            </tr>
            <tr>
                <td>H</td>
                <td>|-|</td>
            </tr>
            <tr>
                <td>I</td>
                <td>|</td>
            </tr>
            <tr>
                <td>J</td>
                <td>(|</td>
            </tr>
            <tr>
                <td>K</td>
                <td>|/</td>
            </tr>
            <tr>
                <td>L</td>
                <td>|_</td>
            </tr>
            <tr>
                <td>M</td>
                <td>/\/\</td>
            </tr>
            <tr>
                <td>N</td>
                <td>|\|</td>
            </tr>
            <tr>
                <td>O</td>
                <td>()</td>
            </tr>
            <tr>
                <td>P</td>
                <td>|*</td>
            </tr>
            <tr>
                <td>Q</td>
                <td>(,*</td>
            </tr>
            <tr>
                <td>R</td>
                <td>|+</td>
            </tr>
            <tr>
                <td>S</td>
                <td>(-)</td>
            </tr>
            <tr>
                <td>T</td>
                <td>-|</td>
            </tr>
            <tr>
                <td>U</td>
                <td>|.|</td>
            </tr>
            <tr>
                <td>V</td>
                <td>\/</td>
            </tr>
            <tr>
                <td>W</td>
                <td>\/\/</td>
            </tr>
            <tr>
                <td>X</td>
                <td>{'><'}</td>
            </tr>
            <tr>
                <td>Y</td>
                <td>\|/</td>
            </tr>
            <tr>
                <td>Z</td>
                <td>/-</td>
            </tr>
        </tbody>
    </table>
            </h1> : null}</div>
      
            <div className="buton-pas">

<button disabled={butonStatus} style={{padding: '5px'}} onClick={routeChange}> PASUL 4</button>

</div>
      <div className="buton-pas">
      <button onClick={onClick} style={{padding: '5px', marginTop: '3%'}}>{isVisible? 'HIDE HINT' : 'SHOW HINT'}</button>
      {isVisible? <Text /> : null}
    </div>
    </div>
  )
}

const Text = () => <div><h1>Fiinta celesta</h1></div>;
export default Pagina4