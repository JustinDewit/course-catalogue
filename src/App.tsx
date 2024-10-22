import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseList from "./components/CourseList";
import CourseModules from "./components/CourseModules";
import CourseLessons from "./components/CourseLessons";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="flex-grow-1 gradient-background">
          <Routes>
            <Route path="/" element={<CourseList />} />
            <Route path="/courses" element={<CourseList />} />
            <Route path="/course/:id" element={<CourseModules />} />
            <Route
              path="/course/:id/module/:moduleIndex/lesson/:lessonIndex"
              element={<CourseLessons />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
