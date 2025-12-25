import { useState } from "react"

function Number(){
    const[count,setcount]= useState(0);
    return(
        <div>
            <h1>count:{count}</h1>
            <button onClick={()=>setcount(count+1)}>increase</button>
            <button onClick={()=>setcount(count-1)}>decrease</button>
        </div>
    )
}
export default Number;