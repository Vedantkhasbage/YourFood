const Router=require("express");
const userRouter=Router();
const {z} =require("zod");
const {userModel,orderModel} =require("../models/database")
const jwt=require("jsonwebtoken");
const JWT_KEY=process.env.JWT_KEY;
const bcrypt =require("bcrypt");
const { userMiddleware } = require("../middleware");


userRouter.post("/register", async function(req,res){
     const requiredatas=z.object({
        name:z.string().min(3).max(100),
        email:z.string().min(3).max(100).email(),
        password:z.string().min(5).max(100)
     })

     const checkdata=requiredatas.safeParse(req.body);
     if(!checkdata.success){
        res.json({
            message:checkdata.error,
        })
        return;
     }

     const {name,email,password}=req.body;
     const hashedpassword=await bcrypt.hash(password,5);

    await userModel.create({
          name:name,
          password:hashedpassword,
          email:email
     })
     
     res.json({
        message:"You're Registered!!!!"
     })
})

userRouter.post("/logIn", async function(req,res){
    const requiredatas=z.object({
        email:z.string().min(3).max(100).email(),
        password:z.string().min(5).max(100)
     })

     const checkdata=requiredatas.safeParse(req.body);
     if(!checkdata.success){
        res.json({
            message:checkdata.error,
        })
        return;
     }

      const {email,password} =req.body;
      const checkedUser=await userModel.findOne({
         email:email
      })

      if(!checkedUser){
        res.json({
            message:"User not exists"
        })
        return;
      }
      const finduser= await bcrypt.compare(password,checkedUser.password);
    console.log(finduser)
    console.log(checkedUser)
      if(finduser){
          const token=jwt.sign({
             id:checkedUser._id
            },JWT_KEY)
            res.json({
                token:token
            })
        }else{
            res.json({
                message:"User not exists"
            })
            return;
        }           
        })


userRouter.post("/placeorder", async function(req,res){
    //  const userId=req.userId;
     const {orderItems}=req.body;
       if(!orderItems){
        res.json({
            message:"cart is empty"
        })
        return;
       }

       console.log(orderItems);
       const cartDataToBeAdd=orderItems.map((item)=>({
        dish:item.name,
        category:item.Category
       })) 
      
          
       const added=await orderModel.insertMany(orderItems);

       res.json({
        message:"added!!!"
       })
})        

        module.exports={
            userRouter:userRouter
        }