import React, { useContext, useState } from 'react'
 import { usecart } from './CartComponent';
export function Card(props) {
 
       const {addtocart}=usecart();     
     const [qnt,setqnt]=useState(0);
     const [size,setsize]=useState("");

    return  <div style={{ backgroundColor: "#fff",padding:"2vw",width:"100vw",overflowX:"none",scrollX:"none"}}>
        <div style={{
            height: "20vw",
            width: "25vw",
            backgroundColor: "gray",
            borderRadius: "10px",
        }} >
            <img style={{
                height: "10vw",
                width: "25vw",
                objectFit: "cover"
            }} src={props.fooditems.img} alt="" />
            <div style={{
            }}>
                <h2>{props.fooditems.name}</h2>
            </div>
            <div>
                <p>this is fresh food</p>
            </div>
            <select onChange={(e)=>{setqnt(e.target.value)}}>
                {Array.from({ length: 6 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                        {i + 1}
                    </option>
                ))}
            </select>
            <select>
                <option value="full">Full</option>
                <option value="half">Half</option>
            </select>
            <p>Total Price:</p>
           {localStorage.getItem("token")?<button onClick={()=>addtocart(props.fooditems)}>Add to Cart</button> : ""}
        </div>
    </div>
}