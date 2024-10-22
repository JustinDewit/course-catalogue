import { Link } from "react-router-dom";
import coursesData from "../data/courses.json";
import { Course } from "../types/types";

// Type assertion to ensure coursesData is treated as an array of Course objects
const typedCoursesData = coursesData as Course[];

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        {/* Brand link */}
        <Link className="navbar-brand fw-bold" to="/">
          Course Catalogue
        </Link>
        {/* Responsive toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* Generate navigation links for each course */}
            {typedCoursesData.map((course, index) => (
              <li
                key={course.id}
                className="nav-item d-flex align-items-center"
              >
                {/* Add vertical separator between links, except for the first one */}
                {index > 0 && <div className="vr mx-2 bg-light"></div>}
                <Link className="nav-link fw-bold" to={`/course/${course.id}`}>
                  {course.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
