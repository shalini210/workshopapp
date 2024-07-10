import { useState } from 'react';
import Allusers from './components/Allusers';
import Calc from './components/Calc';
import Home from './components/Home';
import Login from './components/Login';
import Usingref from './components/Usingref';
import logo from './logo.svg';


function App() {
    const[flag,setflag]=useState("");
  return (
    <>
    <Allusers></Allusers>
    <h1>use REf example</h1>
    <Usingref></Usingref>
    <hr></hr>
    <Calc></Calc>
    {flag}
  <div>
    {flag!=""?<Home s={setflag}></Home>:<Login s={setflag}></Login>}
  </div>
    </>
  );
}

export default App;
