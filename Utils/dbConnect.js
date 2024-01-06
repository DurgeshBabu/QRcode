import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://saidurgeshbabu:8886089817@cluster0.50hs3p4.mongodb.net/?retryWrites=true&w=majority";
 const dbConnect = async()=>{
    try {
        await mongoose.connect(MONGODB_URI,
          {  useNewUrlParser : true,
             useUnifiedTopology : true,
}
            ); console.log("connected to mongoDB")
    } catch (error) {
        console.log("error to connect mongoDB", error)
    }
 };
 export default dbConnect;