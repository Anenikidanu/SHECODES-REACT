import React from "react";

const TaskList = () => {
  // Tasks array - you can change titles or completed status
  const tasks = [
    { id: 1, title: "Finish homework", completed: true },
    { id: 2, title: "Do laundry", completed: false },
    { id: 3, title: "Read a book", completed: true }
  ];

  // Check if all tasks are complete
  const allComplete = tasks.length > 0 && tasks.every(task => task.completed);

  return (
    <div>
      <h2>My Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks for today!</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              {task.title} {task.completed ? "(Completed)" : "(Pending)"}
            </li>
          ))}
        </ul>
      )}

      {allComplete && <p>Keep up the good work!</p>}
    </div>
  );
};

export default TaskList;