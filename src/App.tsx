import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseList from "./components/CourseList";
import CourseModules from "./components/CourseModules";
import CourseLessons from "./components/CourseLessons";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/course/:id" element={<CourseModules />} />
        <Route
          path="/course/:id/module/:moduleIndex/lesson/:lessonIndex"
          element={<CourseLessons />}
        />
      </Routes>
    </Router>
  );
};

export default App;
