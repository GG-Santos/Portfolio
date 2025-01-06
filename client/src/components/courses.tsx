import { Course as CourseModel } from "../models/course";
import "../assets/styles/courses.css";

interface CourseProps {
  course: CourseModel;
}

const Course = ({ course }: CourseProps) => {
  return (
    <>
      <div className="item-card-container">
        <span className="course-title">{course.title}</span>
        <div className="item-card-header-ccs">{course.type}</div>
        <div className="item-card-content">{course.code}</div>
        <div className="item-card-status-passed">
          <i className="fas fa-check-circle"></i>
          {course.status}
        </div>
      </div>

      <div className="popup-card">
        <button className="close-popup">&times;</button>
        <h2>Course Details</h2>
        <div className="popup-grid">
          <p className="full-width">
            <strong>Course Title:</strong>
            <span id="course-title"> {course.title}</span>
          </p>
          <p>
            <strong>Course Code:</strong>
            <span id="course-code"> {course.code}</span>
          </p>
          <p>
            <strong>Units:</strong>
            <span id="units"> {course.units}</span>
          </p>
          <p className="full-width">
            <strong>Course Description:</strong>
            <span id="course-description"> {course.description}</span>
          </p>
          <p>
            <strong>Section:</strong>
            <span id="section"> {course.section}</span>
          </p>
          <p>
            <strong>Professor:</strong>
            <span id="professor"> {course.professor}</span>
          </p>
          <p>
            <strong>Midterm Grade:</strong>
            <span id="midterm-grade"> {course.midterm}</span>
          </p>
          <p>
            <strong>Final Grade:</strong>
            <span id="final-grade"> {course.final}</span>
          </p>
        </div>
        <h3>Course Syllabus</h3>
        <ul id="modules-list"></ul>
      </div>
    </>
  );
};

export default Course;
    