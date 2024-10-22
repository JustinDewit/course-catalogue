import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import coursesData from "../data/courses.json";
import { Course } from "../types/types";

const typedCoursesData = coursesData as Course[];

const CourseList = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  // Initialize courses state with data from JSON file
  useEffect(() => {
    setCourses(typedCoursesData);
  }, []);

  // Helper function to generate image URLs based on course title
  const getImageUrl = (title: string) => {
    return `/public/${title}.webp`;
  };

  return (
    <div className="container py-4">
      <h1 className="mb-4">Available Courses</h1>
      {/* Grid layout for course cards */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {courses.map((course) => (
          // Individual course card
          <div key={course.id} className="col">
            <div className="card h-100">
              {/* Course image */}
              <img
                src={getImageUrl(course.title)}
                className="card-img-top"
                alt={course.title}
              />
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                {/* Link to individual course page */}
                <Link to={`/course/${course.id}`} className="btn btn-primary">
                  Open Course
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
