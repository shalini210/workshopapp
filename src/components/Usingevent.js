import React from 'react'

export default function Usingevent() {
    const hi=()=>
    {
        alert("hi")
    }
    const hello=(x)=>
    {
        alert("welcome "+ x);
    }
  return (
    <div>
 <input type="button" value="click here" onClick={hi}></input>
<input type="button" value="hello" onClick={()=>hello("Vinit")}></input>
    </div>
  )
}
