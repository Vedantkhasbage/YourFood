import React from "react";
import { Navbar} from "../components/Navbar"
import { usecart } from '../components/CartComponent';
import { useNavigate } from "react-router-dom";
   import axios from 'axios'

export function Myorder(){
   const navigate=useNavigate();
   
  

  function empty(){
    localStorage.removeItem("cart")
    window.location.reload()
  }


 const {cart} =usecart();

 async  function placeorder(){

  const newdataToBeadd=cart.map((item)=>({
    dish:item.name,
    category:item.CategoryName
  }))
  console.log(newdataToBeadd)
  const responsedata=await axios.post("http://localhost:4000/user/placeorder",{
    orderItems: newdataToBeadd
  })
  alert("order added!!!")
}
    return <div>
      <Navbar/>
      <button onClick={placeorder}>Confirm Order</button>
      <button onClick={empty}>Empty Cart</button>
      <div style={{marginLeft:"2vw"}}>
      {cart.length==0 ? <div style={{fontFamily:"sans-serif",height:"88vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"3vw",color:"red",textTransform:"uppercase"}}>Your Cart is Empty</div>:
      <div style={{display:"grid",gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "10px",marginTop:"3vw",color:"green"}}>
          <h2 >Name</h2>
          <h2>Category</h2>
          <h2>Quantity</h2>
          <h2>Price</h2>
          </div>
}
       {
       cart.map((item)=>{
       return <div>
          
          <div style={{display:"grid",gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "10px",marginTop:"1vw",color:"blue"}}>
            <h2>{item.name}</h2>
            <h2>{item.CategoryName}</h2>
            <h2>{item.quantity}</h2>
            <h2>4</h2>
          </div>
        </div>
       })
       }
          </div>
    </div>
}