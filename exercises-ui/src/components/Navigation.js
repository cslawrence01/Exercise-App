import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/add-exercise">Add an Exercise</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
