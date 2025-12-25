import { useState } from "react";

function Form(){

  const[name,setname]=useState('');

  const handalsubmit=(e)=>{
    e.preventDefault();
    alert(`name,${name}`);
    setname('');

  }
  return(
    <>
    <form onSubmit={handalsubmit}>
      <label>Name</label>
      <input value={name} onChange={(e)=>setname(e.target.value)}></input>
      <button type="submit">Submit</button>
    </form>
    </>
  );
}export default Form;