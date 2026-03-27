import React, { useState } from "react";
import TaskForm from "./components/TaskForm.jsx";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto", textAlign: "center" }}>
      <h1>Task List</h1>
      <TaskForm onAddTask={addTask} />
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((t, idx) => (
          <li key={idx} style={{ margin: "10px 0", borderBottom: "1px solid #ccc", padding: "5px 0" }}>
            <strong>{t.title}</strong> - {t.date || "No date"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;