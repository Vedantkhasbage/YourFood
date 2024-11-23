

// const JWT_KEY=process.env.JWT_KEY;
// const jwt=require("jsonwebtoken");

// function userMiddleware(req,res,next){
//       const token=req.headers.token;
//       const verifyuser=jwt.verify(token,JWT_KEY);
//            console.log(verifyuser);
//       if(verifyuser){
//         req.userId=verifyuser._id;
//           next();
//       } else{
//         res.json({
//             message:"Invalid User"
//         })
//       }
// }

// module.exports={
//     userMiddleware:userMiddleware
// }