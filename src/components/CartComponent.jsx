import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext=createContext();



 export function CartProvider({children}){
    const [cart,setcart]= useState(()=>{
      const CartUptoNow=localStorage.getItem("cart");
      return CartUptoNow ? JSON.parse(CartUptoNow):[];
    })
    useEffect(()=>{
       localStorage.setItem("cart",JSON.stringify(cart))
    },[cart])

       const addtocart =(item)=>{
        console.log(cart)
            const FindAboveItemInCart=cart.find( (thisItem) => { return item._id.toString()===thisItem._id.toString()});
            if(FindAboveItemInCart){
                setcart(
                    cart.map((alreadypresent) =>
                      alreadypresent._id.toString() === item._id.toString()
                        ? { ...alreadypresent, quantity: alreadypresent.quantity+1 }
                        : alreadypresent
                    )
                  );
            } else{
               setcart([...cart,{...item,quantity:1}])
            }
       }
       return <CartContext.Provider value={{ addtocart,cart}}>
        {children}  
       </CartContext.Provider>
  }

  export const usecart=()=> useContext(CartContext);
