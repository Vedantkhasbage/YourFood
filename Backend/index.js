require('dotenv').config();
const cors=require("cors")
const express=require("express");
const app=express();
app.use(cors())
const {userRouter}=require("./routers/user");
const { FoodRouter } = require('./routers/Fooddata');
app.use(express.json());

app.use("/user",userRouter)

app.use("/food",FoodRouter);

app.listen(4000)