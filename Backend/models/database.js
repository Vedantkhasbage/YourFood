const mongoose =require("mongoose");
const schema=mongoose.Schema;
const objectId=mongoose.ObjectId;


async function main() {
    try {
        await mongoose.connect(process.env.mongooseurl);
        console.log('Connected to MongoDB');
        const food_data = await mongoose.connection.db.collection("menu").find({}).toArray();
        
        async function foodcategory(){
             const food_category_data = await mongoose.connection.db.collection("foodcategory").find({}).toArray(); 
                global.food_items=food_data;
                global.food_category=food_category_data;
         }
         if(food_data) foodcategory();

    } catch (err) {
        console.error('Error connecting to MongoDB or fetching data:', err);
    }
}
main();


const userSchema=new schema({
    name:String,
    email:{
        type:String,unique:true
    },
    password:String
})

const orderSchema=new schema({
    dish:String,
    Category:String,
})

const userModel=mongoose.model("user",userSchema);
const orderModel=mongoose.model("Orders",orderSchema);

module.exports={
    userModel:userModel,
    orderModel:orderModel
}