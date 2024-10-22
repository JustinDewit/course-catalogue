import { useParams, Link } from "react-router-dom";
import coursesData from "../data/courses.json";
import { Course } from "../types/types";

export const CourseModules = () => {
  // Extract course ID from URL parameters
  const { id } = useParams<{ id: string }>();

  // Find the course matching the ID
  const course = coursesData.find((c) => c.id === parseInt(id ?? "")) as
    | Course
    | undefined;

  // Display error if course not found
  if (!course) {
    return <div className="alert alert-danger">Course not found</div>;
  }

  return (
    <div className="container mt-5 gradient-background">
      <h1 className="display-4 mb-4">{course.title}</h1>
      <p className="lead mb-5">{course.description}</p>

      {/* Accordion structure for course modules */}
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
                {/* List of lessons within each module */}
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

// Bootstrap component references:
// Container: https://getbootstrap.com/docs/5.3/layout/containers/
// Accordion: https://getbootstrap.com/docs/5.3/components/accordion/
// List Group: https://getbootstrap.com/docs/5.3/components/list-group/
// Buttons: https://getbootstrap.com/docs/5.3/components/buttons/
// Alerts: https://getbootstrap.com/docs/5.3/components/alerts/
// Utility classes (display, margin, padding, flex): https://getbootstrap.com/docs/5.3/utilities/
