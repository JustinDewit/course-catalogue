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
    <div className="container mt-4">
      {/* Display course, module, and lesson info */}
      <h1>{course.title}</h1>
      <h2>{module.title}</h2>
      <h3>{lesson.title}</h3>
      <p>{lesson.description}</p>
      <h4>Topics:</h4>
      <ul>
        {lesson.topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
      <h4>Content:</h4>
      {/* Show different types of content (text, video, audio, podcast) */}
      {lesson.content.map((content, index) => (
        <div key={index}>
          {content.type === "text" && <p>{content.data}</p>}
          {content.type === "video" && (
            <video src={content.data} controls>
              Your browser does not support the video tag.
            </video>
          )}
          {content.type === "audio" && (
            <audio src={content.data} controls>
              Your browser does not support the audio tag.
            </audio>
          )}
          {content.type === "podcast" && (
            <audio src={content.data} controls>
              Your browser does not support the audio tag.
            </audio>
          )}
        </div>
      ))}
    </div>
  );
};

export default CourseLessons;
