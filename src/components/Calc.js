import React, { useState } from 'react'

export default function Calc() {
    const [a,seta]= useState(0);
    const [b,setb]=useState(0);
    const [msg,setmsg]=useState("");
    const findresult=(x)=>
    {
        switch (x) {
          case "+":
           var c = a+b;
           setmsg("Sum is "+c)  ;
           break;
           case "-":
           c = a-b;
           setmsg("difference is "+c)  ;
           break;        
          case "/":
            c=a/b;
            setmsg("division is "+c);
           break;
           case "*":
           c=a*b;
           setmsg("Multiplication is "+c);
            break;        
        }
    }
  return (
    <div>Calc
    <br>
    </br>
    a: <input type="text" onBlur={(e)=>seta(parseInt(e.target.value))} ></input>
    <br>
    </br>
    b: <input type="text"  onBlur={(e)=>setb(parseInt(e.target.value))}></input>
    <br>
    </br>
     <input type="button" value="+"  onClick={()=>findresult('+')}></input>
     <input type="button" value="-"  onClick={()=>findresult('-')}></input>
     <input type="button" value="/"  onClick={()=>findresult('/')}></input>
     <input type="button" value="x"  onClick={()=>findresult('*')}></input>
     {msg}
    </div>
  )
}
