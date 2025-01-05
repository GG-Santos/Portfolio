import "./App.css";
import { useEffect, useState } from "react";
import { Course } from "./models/course";

function App() {

  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    async function loadCourses() {
      try {
        const response = await fetch("/api/courses", { method: "GET" });
        const courses = await response.json();
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
    {JSON.stringify(courses)}
  </>
  );
};

export default App;
