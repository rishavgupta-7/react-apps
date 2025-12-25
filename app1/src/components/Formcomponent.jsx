import { useState } from "react";

function Formcomponent(){

 const[formData,setData]=useState(
       { name:"",
        gmail:"",
        phone_no:"",}
    );


 const handalsubmit=(e)=>{
   e.preventDefault();
    alert(`        name:${formData.name}\n
        gmail:${formData.gmail}\n 
        phone-no:${formData.phone_no}
        `);
    setData({ name:"",
        gmail:"",
        phone_no:"",});
 }


 const handelchange=(e)=>{
    const {name,value}=e.target;
    setData((prev)=>({
     ...prev,
     [name]:value,
    }));
 }



    return(
        <form onSubmit={handalsubmit}>
            <label>name: </label>
            <input placeholder="name" name="name" value={formData.name} onChange={handelchange}></input>
            
            <label>Gmail: </label>
            <input placeholder="Abc@gmail.com" name="gmail" value={formData.gmail} onChange={handelchange}></input>
            
            <label>Phone_no: </label>
            <input placeholder="9835696583" name="phone_no" value={formData.phone_no} onChange={handelchange}></input>
            
            <button type="submit">Submit</button>
        </form>
    );
}export default Formcomponent;