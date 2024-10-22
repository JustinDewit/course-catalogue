import { useParams } from "react-router-dom";
import coursesData from "../data/courses.json";
import { Course } from "../types/types";

const CourseDetails = () => {
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
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      {/* Map through the course modules */}
      {course.modules.map((module, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <h2 className="card-title">{module.title}</h2>
            {/* Map through the lessons in each module */}
            {module.lessons.map((lesson, lessonIndex) => (
              <div key={lessonIndex} className="mb-2">
                <h3>{lesson.title}</h3>
                <p>{lesson.description}</p>
                {/* Map through the topics in each lesson */}
                <ul>
                  {lesson.topics.map((topic, topicIndex) => (
                    <li key={topicIndex}>{topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;
