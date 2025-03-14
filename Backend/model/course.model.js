import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    name: String,
    title: String,
    price: Number,
    category: String,
    skills: [String],
    image: String,
    videoUrl:String
})

const Course = mongoose.model("Course", courseSchema);

export default Course;