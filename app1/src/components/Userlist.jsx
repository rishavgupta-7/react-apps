import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Userlist() {
    const[user,setData]=useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>setData(res.data));
    },[])
  return (
    <div>
      <ul>
        {user.map((u)=>(
            <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Userlist


/*
🧠 Ye code kya karta hai?

user = users ka array (API se aaya hua)

map():

har user ko loop karta hai

har user ka name list me dikhata hai

key={u.id}:

React ko batata hai kaunsa item unique hai
*/


/*
key={u.id} ⭐ (Bahut important)
key kya hota hai?

React ka special attribute

Screen par dikhai nahi deta

Sirf React ke internal use ke liye

React ko key kyun chahiye?

Kaunsa item add / remove / update hua — ye samajhne ke liye

Performance improve hoti hai

Warning nahi aati console me
*/