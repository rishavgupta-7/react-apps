import { useState } from "react";

function Counter(){

    const[count,setcount]=useState(0);
    return(
        <>
        <h1>count:{count}</h1>
        <button onClick={()=>setcount(count+1)}>incress</button>
        <button onClick={()=>setcount(count-1)}>decress</button>
        </>
    );
}

export default Counter;