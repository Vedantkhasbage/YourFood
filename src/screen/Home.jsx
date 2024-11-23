import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import {Card} from "../components/Card";
import axios from "axios";


export function Home(){
 
     const [foodData,setfoodData]=useState([]);
     const [foodcat,setfoodcat]=useState([]);


        async function laodAllData(){
            let response=await axios.post("http://localhost:4000/food/dishes");
             response=response.data
           
              setfoodData(response[0]);
              setfoodcat(response[1]);
        }

        useEffect(function(){
              laodAllData();
         },[])

  return <div style={{height:"100vh",width:"100vw"}}>
         <Navbar/>
           <HomeDesign/>
            <div>
              {
               (foodcat.length!=[] ) ? foodcat.map(function(data){
                     return <div className="row mb-3"> 
                     <div key={data._id}>{data.CategoryName}</div>
                       <hr/>
                       
                       {(foodData.length!=[]) ? foodData.filter((items) => items.CategoryName === data.CategoryName)
                              .map(function(filtereditems){
                          return <div className="col-12 col-md-6 col-lg-3" key={filtereditems._id}>
                            <Card fooditems={filtereditems}
                              options={filtereditems.options.object}
                            ></Card>
                             </div>
                       }):""}
                       </div>
               }) :""
              }
           {/* <Card/> */}
            </div>
</div>
}

function HomeDesign(){
   return <div style={{
    height:"100vh",
    width:"100vw",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    gap:"20vw",
    fontFamily:"sans-serif"
   }} >
      <div >
          <h1 style={{ fontSize:"3.5vw",fontWeight:"700",color:"gray",lineHeight:"3vw"
          }} >It's not an Food, it's<br/> an <span style={{color:"orange"}} >experience</span></h1>
      <p  >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, quia.</p>
      </div>
      <div>
        <img src="76088f2b0c1a09a971bd1cfbcc33d336-removebg-preview.png" alt="" />
      </div>
   </div>
}