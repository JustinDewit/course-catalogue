import React, { useEffect, useState } from "react";
import coursesData from "../data/courses.json";
import { Course } from "../types/types";

const typedCoursesData = coursesData as Course[];

const CourseList = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    setCourses(typedCoursesData);
  }, []);

  const getImageUrl = (title: string) => {
    return `/public/${title}.webp`;
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Available Courses</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {courses.map((course) => (
          <div key={course.id} className="col">
            <div className="card h-100">
              <img
                src={getImageUrl(course.title)}
                className="card-img-top"
                alt={course.title}
              />
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <a href="#" className="btn btn-primary">
                  Open Course
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
