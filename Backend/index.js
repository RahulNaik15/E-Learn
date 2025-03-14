import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import courseRoute from "./route/course.route.js"
import cors from "cors"
import userRoute from "./route/user.route.js"

const app = express();

//middleware
app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongodb
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology:true
  })
  console.log("connected to db");
}
catch (error){
  console.log("Error",error);
}


//defining route
app.use("/course", courseRoute)
app.use("/api", courseRoute)
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})  