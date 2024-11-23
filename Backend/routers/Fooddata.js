const express=require("express");

const FoodRouter=express();

FoodRouter.post("/dishes",function(req,res){

    try{
       res.send([global.food_items,global.food_category])
    } catch(e){
        console.log(e);
        res.send({
            message:"Error"
        })
    }
})

module.exports={
    FoodRouter:FoodRouter
}