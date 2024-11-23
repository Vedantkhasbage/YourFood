import React from "react";
import {Link, useNavigate} from 'react-router-dom'
import { Register } from "../screen/Register";


export function Navbar(){
    const navigate=useNavigate();

    function SignIn(){
       navigate("/Register")
    }
    function LogIn(){
        navigate("/LogIn")
    }
    function logoutme(){
        localStorage.removeItem("token");
        navigate("/")
    }
    return <div style={{
        height:"12vh",
        width:"100vw",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        fontSize:"1.3vw",
    }}>
        <img style={{
                height:"9vw",
                width:"9vw",
                marginRight:"7vw"
              }} src="attachment_117132760-removebg-preview.png" alt="" />

        <div style={{
            display:"flex",
            gap:"7vw",
            marginRight:"5vw",
            listStyle:"none",
        }}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/orders">Orders</Link></li>
              <li><Link to="/Hotels">Hotels</Link></li>
              <li><Link to="/aboutus">About us</Link></li>
           
        </div>
        {(localStorage.getItem("token")) ? <div >
            <button style={{
            marginLeft:"2vw",
            height:"2.7vw",
            width:"8vw",
            borderRadius:"7px",
            backgroundColor:"red",
            borderStyle:"none",
            color:"#fff",
            fontSize:"1vw",
            fontWeight:"600",
            cursor:"pointer"
        }}>Cart</button>
        <button style={{
            marginLeft:"1vw",
            height:"2.7vw",
            width:"8vw",
            borderRadius:"7px",
            backgroundColor:"red",
            borderStyle:"none",
            color:"#fff",
            fontSize:"1vw",
            fontWeight:"600",
            cursor:"pointer"
        }} onClick={logoutme}>
           LogOut
        </button> 
        </div>
        :
        <div>
        <button onClick={SignIn} style={{
            marginLeft:"2vw",
            height:"2.7vw",
            width:"8vw",
            borderRadius:"7px",
            backgroundColor:"red",
            borderStyle:"none",
            color:"#fff",
            fontSize:"1vw",
            fontWeight:"600",
            cursor:"pointer"
        }} >Register 
           </button>
           <button onClick={LogIn} style={{
            marginLeft:"1vw",
            height:"2.7vw",
            width:"8vw",
            borderRadius:"7px",
            backgroundColor:"red",
            borderStyle:"none",
            color:"#fff",
            fontSize:"1vw",
            fontWeight:"600",
            cursor:"pointer"
        }} >LogIn 
           </button>
           </div>
    }
    </div>

}