import  { useState } from 'react'
export default function Counter() {
const [count,setcount] =useState(0)
let vI= <input type="button" value="+" onClick={()=>increment()} ></input>
let vD=<input type="button" value="-" onClick={()=>decrement()}   ></input>
let vID= <input type="button" value="+" onClick={()=>increment()} disabled ></input>
let vDD=<input type="button" value="-" onClick={()=>decrement()}  disabled ></input>
    const increment =()=>
    {
        let i = count;
        i++;
        setcount(i);
        console.log(count);        
    }
    const decrement =()=>
    {
        let i = count;
        i--;
        setcount(i);
    }
  return (
    <div>
        
        {(count<1)?vDD:vD}
        {count}
        {(count>=5)?vID:vI}
   
    </div>
  )
}
