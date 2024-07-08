import User from "./User"

import boy1 from "../images/boy1.png"
export default function Allusers() {


    const users = [
        {name:'Ron',uimg:boy1,desig:"Software Developer",
         contact:"982749234"},
         {name:'Romil',uimg:boy1,desig:"Software TEster",
         contact:"35345"},
         {name:'Vikas',uimg:boy1,desig:"IT Manager",
         contact:"634645"},
         {name:'Deepika',uimg:boy1,desig:"Software Developer",
         contact:"634563456"},
         {name:'Priya',uimg:boy1,desig:"Software Designer",
         contact:"63456"},
         {name:"Maria",uimg:boy1,desig:"Trainee" ,contact:"934576"}
    ];
    let usersdata = users.map((u)=>
    {
        return <User uname={u.name}
         ipath = {u.uimg} 
         ud={u.desig}
          uc={u.contact}></User>
    })
  return (
    <>
    <div>Allusers</div>
    <div className='usercontainer'>
  {usersdata}
  </div>
    </>
  )
}
