import React from 'react'

export default function Home(props) {
  return (
   
    <>
    <div>Home</div>
    <input type="button" value="logout" onClick={()=>props.s("")}/>
    </>
  )
}
