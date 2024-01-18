import mongoose from 'mongoose';

const connectMongoDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected db");
    } catch (error) {
        console.log("Error : ",error);
    }
};


export default connectMongoDB;
