// import mongoose from "mongoose";
// import dotenv from 'dotenv';
// dotenv.config()

// let isConnected=false;
// export default async function connectDB(){
//     if(isConnected){
//         return;
//     }
//     try {
//         await mongoose.connect(process.env.MONGO_URI)
//         isConnected=true
//         console.log('DB connected successfully...')   
//     } catch (error) {
//         console.log('DB connection error: '+error.message)
//     }
// }