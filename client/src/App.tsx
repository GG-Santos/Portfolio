import "./App.css";
import { useEffect, useState } from "react";
import { Course as CourseModel } from "./models/course";
import Course from "./components/courses";
import * as CourseApi from "./network/courses_api";

function App() {

  const [courses, setCourses] = useState<CourseModel[]>([]);

  useEffect(() => {
    async function loadCourses() {
      try {
        const courses = await CourseApi.fetchCourses();
        setCourses(courses);
        
      } catch (error) {
        console.error(error);
        alert(error); 
      }
    }
    loadCourses();
  }, []);

  return (
  <>
    {courses.map(course => (
      <Course course={course} key={course._id}/>
    ))}
  </>
  );
};

export default App;
