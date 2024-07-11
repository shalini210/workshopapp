import User from "./User"

import boy1 from "../images/boy1.png"
import { useRef,useState } from "react";
export default function Allusers() {

  const [usersdata,setuserdata]=useState();
  let namer = useRef();
  let imgr = useRef();
  let desigr= useRef();
  let contactr= useRef();
    const [users,setusers] = useState([
        {name:'Ron',uimg:boy1,desig:"Software Developer",
         contact:"982749234"},        
    ]);
    const adduser = ()=>
    {
      //create a json object of form data
      //and push it in array 
let u = {name:namer.current.value,
  uimg:imgr.current.value,
  desig:desigr.current.value,
  contact:contactr.current.value}
      // users.push(u)
      let t = users;
      t.push(u);
      setusers(t);
      console.log(users)
      setuserdata(showusers())
      // then call usersdata
    }
    let showusers=()=>
    {
        let usersdata1 = users.map((u)=>
        {
            return <User uname={u.name}
            ipath = {u.uimg} 
            ud={u.desig}
              uc={u.contact}></User>
        })
         return usersdata1;
    }
  return (
    <>
    <div>Allusers</div>
    <p>Name : <input type="text" ref={namer} /></p>
    <p>Img url : <input type="text" ref={imgr} /></p>
    <p>Designation:  <input type="text" ref={desigr} /></p>
    <p>Contact no :  <input type="text" ref={contactr} /></p>
    <input type="button" value="Add" onClick={()=>adduser()}/>
    <div className='usercontainer'>
  {usersdata}
  </div>
    </>
  )
}
