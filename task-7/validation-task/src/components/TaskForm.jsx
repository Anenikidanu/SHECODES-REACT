import React, { useState } from "react";

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: task title should not be blank
    if (title.trim() === "") {
      setError("Task title cannot be blank");
      return;
    }

    setError("");
    onAddTask({ title, date });
    setTitle("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px", textAlign: "left" }}>
      <div style={{ marginBottom: "10px" }}>
        <label>Task Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", padding: "5px", marginTop: "5px" }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Due Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{ width: "100%", padding: "5px", marginTop: "5px" }}
        />
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit" style={{ padding: "8px 15px" }}>Add Task</button>
    </form>
  );
};

export default TaskForm;