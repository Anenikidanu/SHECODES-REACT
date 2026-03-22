// File: src/TaskList.jsx
import React, { useEffect, useState } from "react";
import "./TaskList.css"; // CSS for the spinner

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>My Tasks</h2>

      {loading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
          <p>Loading tasks...</p>
        </div>
      ) : tasks.length === 0 ? (
        <p>No tasks available!</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.title} {task.completed ? "(Completed)" : "(Pending)"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;