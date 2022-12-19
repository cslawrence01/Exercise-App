import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddExercisePage from "./pages/AddExercisePage";
import EditExercisePage from "./pages/EditExercisePage";
import Navigation from "./components/Navigation";
import { useState } from "react";

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState([]);

  // a component must return one top level element, if its sibling elements, wrap them in a React fragment
  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <header>
            <h1>The World's Best Exercise App</h1>
            <p>
              This app allows you to add, edit or delete exercise information
            </p>
          </header>
          <Navigation />
          <Routes>
            <Route
              path="/"
              element={<HomePage setExerciseToEdit={setExerciseToEdit} />}
            />
            <Route path="/add-exercise" element={<AddExercisePage />} />
            <Route
              path="/edit-exercise"
              element={<EditExercisePage exerciseToEdit={exerciseToEdit} />}
            />
          </Routes>
        </div>
      </Router>
      <footer>
        <span>&#169; 2022 Christopher Sanchez</span>
      </footer>
    </div>
  );
}

export default App;
