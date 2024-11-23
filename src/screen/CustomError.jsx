import React from "react";
import { useNavigate } from "react-router-dom";


export function CustomError(){
    const navigate=useNavigate();

    function navigation(){
        navigate("/")
    }
    return <div style={{
        height:"100vh",
        width:"100vw",
        textAlign:"center",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    }}>
        <img  style={{
            height:"30vw",
              width:"40vw"
        }} src="error-404-illustration-download-in-svg-png-gif-file-formats--not-found-page-restaurant-pack-food-drink-illustrations-3569476.webp" alt="" />
         <button onClick={navigation} style={{
            height:"3vw",
            width:"8vw",
            borderRadius:"10px",
            borderStyle:"none",
            backgroundColor:"red",
            cursor:"pointer"
         }} >Home</button>
    
    </div>
}