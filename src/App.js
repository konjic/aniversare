import './App.css';
import {
  Routes ,
  Route, 

} from "react-router-dom";

import Pagina1 from './Components/Pagina1';
import Pagina2 from './Components/Pagina2';
import Pagina3 from './Components/Pagina3.js'
import Pagina4 from './Components/Pagina4'
import Pagina5 from './Components/Pagina5';
import Pagina7 from './Components/Pagina7';
import Pagina8 from './Components/Pagina8';
import Pagina9 from './Components/Pagina9';

function App() {


  return (
    <div >

          <Routes>
            <Route path='/' element={<Pagina1/>} />
            <Route path='*' element={<Pagina1/>} />
            <Route path='/pas-2' element={<Pagina2/>} />
            <Route path='/pas-3' element={<Pagina3/>} />
            <Route path='/pas-4' element={<Pagina4/>} />
            <Route path='/pas-5' element={<Pagina5/>} />
            <Route path='/pas-6' element={<Pagina7/>} />
            <Route path='/pas-7' element={<Pagina8/>} />
            <Route path='/pas-8' element={<Pagina9/>} />
          </Routes>
  
    </div>
  );
}

export default App;
