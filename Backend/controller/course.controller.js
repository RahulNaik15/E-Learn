import Course from "../model/course.model.js";

export const getCourse = async(req, res) => {
    
    try {
        const course = await Course.find() 
        res.status(200).json(course)
    }
    catch (error) {
        console.log("Error", error);
        res.status(500).json(error);
    }
}

export const getPaidCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findOne({ id: parseInt(id), category: 'Paid' });

    if (!course) {
      return res.status(404).json({ message: 'Paid Course not found' });
    }

    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching paid course', error });
  }
};


