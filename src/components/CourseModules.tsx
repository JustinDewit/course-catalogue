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
    return <div className="alert alert-danger">Course not found</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="display-4 mb-4">{course.title}</h1>
      <p className="lead mb-5">{course.description}</p>

      <div className="accordion" id="courseModules">
        {course.modules.map((module, moduleIndex) => (
          <div key={moduleIndex} className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#module${moduleIndex}`}
                aria-expanded="true"
                aria-controls={`module${moduleIndex}`}
              >
                {module.title}
              </button>
            </h2>
            <div
              id={`module${moduleIndex}`}
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body">
                <ul className="list-group">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <li
                      key={lessonIndex}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div>
                        <h5 className="mb-1">{lesson.title}</h5>
                        <p className="mb-1 text-muted">{lesson.description}</p>
                      </div>
                      <Link
                        to={`/course/${course.id}/module/${moduleIndex}/lesson/${lessonIndex}`}
                        className="btn btn-primary btn-sm"
                      >
                        Open Lesson
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseModules;
