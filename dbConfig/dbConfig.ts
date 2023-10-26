import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.mongoUri!)
        const connection=mongoose.connection;
        // console.log(connection);
        connection.on('connected',()=>{
            console.log("MongoDb Connected Succesfully")
        })
    } catch (error) {
        console.log("something went wrong")
        console.log(error)
    }
}