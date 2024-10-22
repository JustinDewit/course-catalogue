import { useParams } from "react-router-dom";
import coursesData from "../data/courses.json";
import { Course, Lesson } from "../types/types";

const CourseLessons = () => {
  // Grab the course, module, and lesson IDs from the URL
  const { id, moduleIndex, lessonIndex } = useParams<{
    id: string;
    moduleIndex: string;
    lessonIndex: string;
  }>();

  // Find the course we're looking for
  const course = coursesData.find((c) => c.id === parseInt(id ?? "")) as
    | Course
    | undefined;

  // If we can't find the course, let the user know
  if (!course) {
    return <div>Course not found</div>;
  }

  // Get the specific module we want
  const module = course.modules[parseInt(moduleIndex ?? "")];
  if (!module) {
    return <div>Module not found</div>;
  }

  // Find the lesson we're after
  const lesson = module.lessons[parseInt(lessonIndex ?? "")] as
    | Lesson
    | undefined;
  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">{course.title}</li>
              <li className="breadcrumb-item">{module.title}</li>
              <li className="breadcrumb-item active" aria-current="page">
                {lesson.title}
              </li>
            </ol>
          </nav>

          <h1 className="display-4 mb-4">{lesson.title}</h1>
          <p className="lead mb-4">{lesson.description}</p>

          <div className="card mb-4">
            <div className="card-header">
              <h4 className="mb-0">Topics</h4>
            </div>
            <ul className="list-group list-group-flush">
              {lesson.topics.map((topic, index) => (
                <li key={index} className="list-group-item">
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          <h4 className="mb-3">Content:</h4>
          {lesson.content.map((content, index) => (
            <div key={index} className="mb-4">
              {content.type === "text" && (
                <p className="lead">{content.data}</p>
              )}
              {content.type === "video" && (
                <div className="ratio ratio-16x9">
                  <video src={content.data} controls>
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
              {(content.type === "audio" || content.type === "podcast") && (
                <audio src={content.data} className="w-100" controls>
                  Your browser does not support the audio tag.
                </audio>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseLessons;
