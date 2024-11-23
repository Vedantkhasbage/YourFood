import React, { useState } from "react"
import Axios from 'axios';
import { useNavigate } from "react-router-dom";

export  function Register(){

  const navigate=useNavigate();
  function alreadyuser(){
    navigate("/LogIn")
  }

  function homepage(){
    navigate("/")
  }
    
   const[name,setname]=useState("");
   const[email,setemail]=useState("");
   const[password,setpassword]=useState("");

    function handlesubmit(e){
        e.preventDefault();
        const response=Axios.post("http://localhost:4000/user/register",
          {
                name:name,
                password:password,
                email:email
              }
            )
            if(name.length==0 || email.length==0 || password.length==0){
              alert("INVALID CREDENTIALS!!!");
              return;
            } else{
              homepage();
            }
         console.log("data added!!!")
  }  
  return <form onSubmit={handlesubmit}>
     <div style={{
      height:"100vh",
      width:"100vw",
        backgroundColor:"#fff",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }}>
     <div style={{
        height:"70vh",
        width:"27vw",
        backgroundColor:"gray",
        borderRadius:"10px",
        textAlign:"center",
        border:"2px solid gray"
      }}>
         <img style={{
            height:"10vw",
            width:"10vw",
            objectFit:"contain"
         }} src="attachment_117132760-removebg-preview.png" alt="" />
          <div  style={{height:"5vw"}}>
            <input onChange={(e)=>{setname(e.target.value)}} style={{width:"20vw",height:"2.5vw",borderRadius:"50px",borderStyle:"none"}} type="text" placeholder="Enter your name" />
          </div>

          <div style={{height:"5vw"}}>
          <input  onChange={(e)=>{setemail(e.target.value)}} style={{width:"20vw",height:"2.5vw",borderRadius:"50px",borderStyle:"none"}} type="text" placeholder="Enter your Email" />
          </div>

          <div style={{height:"5vw"}}>
          <input  onChange={(e)=>{setpassword(e.target.value)}} style={{width:"20vw",height:"2.5vw",borderRadius:"50px",borderStyle:"none"}} type="password" placeholder="Enter your password" />
          </div>

          <button type="submit" style={{height:"3vw",width:"20vw",borderRadius:"50px",cursor:"pointer",borderStyle:"none",fontWeight:"600"}}>Submit</button>
          <button onClick={alreadyuser} type="submit" style={{height:"3vw",width:"20vw",borderRadius:"50px",cursor:"pointer",borderStyle:"none",fontWeight:"600",marginTop:"0.5vw"}}>Already User</button>
        </div>
    </div>
       </form>
}