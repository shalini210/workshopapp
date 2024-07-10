import React, { useRef, useState } from 'react'

export default function Usingref() {
    let namer = useRef();
    let contactr= useRef();
    const [msg,setmsg]=useState("");
    const hi = ()=>
    {
        let username = namer.current.value;
        let contact=contactr.current.value;
        let user = {"name ":username,"contact":contact};
        setmsg("welcome "+ JSON.stringify(user))
    }
  return (
    <div>Usingref
        <p>
            Enter Name :
            <input type="text" ref={namer}/>
            </p>
            <p>
                Enter Contact: 
                <input type="text" ref={contactr}/>
                </p>
                <p>
            <input  type="button" value = "Click here" 
            onClick={()=>hi()}/>
        </p>
        {msg}
    </div>
  )
}
