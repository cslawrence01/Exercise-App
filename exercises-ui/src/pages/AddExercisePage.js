import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddExercisePage = () => {
  const [name, setName] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("");
  const [date, setDate] = useState("");

  const navigate = useNavigate();

  const addExercise = async () => {
    const newExercise = { name, reps, weight, unit, date };
    const response = await fetch("/exercises", {
      method: "POST",
      body: JSON.stringify(newExercise),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 201) {
      alert("Successfully added the exercise");
    } else {
      alert(`Failed to add exercise, status code = ${response.status}`);
    }
    navigate("/");
  };

  return (
    <div>
      <h1>Add Exercise</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Reps</th>
            <th>Weight</th>
            <th>Unit</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </td>
            <td>
              <input
                type="number"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
              />
            </td>
            <td>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </td>
            <td>
              <select value={unit} onChange={(e) => setUnit(e.target.value)}>
                <option value="kgs">kgs</option>
                <option value="lbs">lbs</option>
              </select>
            </td>
            <td>
              <input
                type="text"
                placeholder="mm-dd-yy"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={addExercise}>Add</button>
    </div>
  );
};

export default AddExercisePage;
