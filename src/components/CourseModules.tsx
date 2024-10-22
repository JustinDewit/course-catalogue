import { useParams, Link } from "react-router-dom";
import coursesData from "../data/courses.json";
import { Course } from "../types/types";

export const CourseModules = () => {
  // Extract the 'id' parameter from the URL
  const { id } = useParams<{ id: string }>();

  // Find the course in the coursesData array that matches the given id
  // Parse the id to an integer, defaulting to an empty string if id is undefined
  // Assert the result as Course | undefined to satisfy TypeScript
  const course = coursesData.find((c) => c.id === parseInt(id ?? "")) as
    | Course
    | undefined;

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="container mt-4">
      <h1>Course Title: {course.title}</h1>
      <p>Course Description: {course.description}</p>
      {/* Map through the course modules */}
      {course.modules.map((module, moduleIndex) => (
        <div key={moduleIndex} className="card mb-3">
          <div className="card-body">
            <h2 className="card-title">Module Title: {module.title}</h2>
            {/* Map through the lessons in each module */}
            {module.lessons.map((lesson, lessonIndex) => (
              <div key={lessonIndex} className="mb-2">
                <h3>Lesson Title: {lesson.title}</h3>
                <p>Lesson Description: {lesson.description}</p>
                <Link
                  to={`/course/${course.id}/module/${moduleIndex}/lesson/${lessonIndex}`}
                  className="btn btn-primary"
                >
                  Open Lesson
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseModules;
