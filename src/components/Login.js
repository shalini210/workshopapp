import React, { useState } from 'react'

export default function Login(props) {
    const [username,setusername]=useState("");
    const [pwd,setpwd]=useState("");
    const [msg,setmsg]=useState("");
    const chklogin=()=>
    {
        if(username=="admin" && pwd =="123")
        {
            props.s("admin");
        }
        else
        {
            setmsg("Invalid Credentials")
        }
    } 
  return (
    <>
    <div>Login</div>
    <label>Enter username: </label>
    <input type="text" onBlur={(e)=>setusername(e.target.value)}/>
    <br></br>
    <br></br>
    <label>Password: <input type="password" onBlur={(e)=>setpwd(e.target.value)}/></label>
    <br></br>
    <br></br>
    <input type="button" value="login" onClick={()=>chklogin()}/>
    {msg}
    </>
  )
}
