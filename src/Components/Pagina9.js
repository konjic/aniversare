import React from 'react'
import { useState } from 'react'


function Pagina9() {

    const [isVisible, setVisible] = useState(false);
    const onClick = () => setVisible(!isVisible);

  return (
    <div className='spookybackground'>
        <div className='center-longText'>
         <h1> Deschide cartea nr 3 si descrifreaza cifrul</h1>

         <div className="buton-pas">
      <button onClick={onClick} style={{padding: '5px', marginTop: '3%'}}>{isVisible? 'HIDE HINT' : 'SHOW HINT'}</button>
    </div>
      {isVisible? <Text /> : null}
         </div>
    </div>
  )
}

const Text = () => <div>
    <p>Literele</p>
    <p>\/</p>
    <p>|.|</p>
    <p>-||</p>
    <p>|</p>
    <p>()</p>
    <p>|_</p>
    </div>
export default Pagina9