import mongoose from "mongoose";

export default function dbconnect() {
  let options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  mongoose.connect("mongodb://127.0.0.1:27017/webPixel", options).then(()=> {
    console.log("Connected to " + "Web Pixel");
  }).catch((err)=> console.log("Unable to connect to the mongoDB server. Error:", err))
}
