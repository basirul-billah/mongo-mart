import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log("DB connected!");
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/mongo-mart`)
}

export default connectDB;