import React from 'react'
import { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
export function LogIn(){
    const navigate=useNavigate();
    function homepage(){
     navigate("/")
    }

    function signUp(){
        navigate("/Register")
    }

   const[email,setemail]=useState("");
   const[password,setpassword]=useState("");

   async function handlesubmit(e){
        e.preventDefault();
       const response=await Axios.post("http://localhost:4000/user/logIn",
              {
                  email:email,
                password:password
              }
         )
           
         if(response.data.token){
            localStorage.setItem("token",response.data.token)
            console.log(localStorage.getItem("token"))
            homepage();
        }else{
            alert("INVALID USER!!!")
        }
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
          <div style={{height:"5vw"}}>
          <input  onChange={(e)=>{setemail(e.target.value)}} style={{width:"20vw",height:"2.5vw",borderRadius:"50px",borderStyle:"none"}} type="text" placeholder="Enter your Email" />
          </div>

          <div style={{height:"5vw"}}>
          <input  onChange={(e)=>{setpassword(e.target.value)}} style={{width:"20vw",height:"2.5vw",borderRadius:"50px",borderStyle:"none"}} type="password" placeholder="Enter your password" />
          </div>

          <button type="submit" style={{height:"3vw",width:"20vw",borderRadius:"50px",cursor:"pointer",borderStyle:"none",fontWeight:"600"}}>Submit</button>
          <button onClick={signUp} type="submit" style={{height:"3vw",width:"20vw",borderRadius:"50px",cursor:"pointer",borderStyle:"none",fontWeight:"600",marginTop:"0.5vw"}}>Sign Up</button>
        </div>
    </div>
       </form>
}