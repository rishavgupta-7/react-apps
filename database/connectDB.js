const mongoose=require("mongoose");

const connectDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("successfully connected");
        
    } catch (error) {
        console.log("Db not connected",error.message);
    }
}
module.exports=connectDb;