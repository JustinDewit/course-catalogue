import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseList from "./components/CourseList";
import CourseModules from "./components/CourseModules";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/course/:id" element={<CourseModules />} />
      </Routes>
    </Router>
  );
};

export default App;
