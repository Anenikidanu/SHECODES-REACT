import TaskCard from "./components/TaskCard";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Task Manager</h1>

      <div className="task-list">
        <TaskCard
          title="Finish React Assignment"
          description="Complete TaskCard component task"
          dueDate="March 12, 2026"
          status="In Progress"
        />

        <TaskCard
          title="Study Data Structures"
          description="Review linked lists and stacks"
          dueDate="March 15, 2026"
          status="Pending"
        />

        <TaskCard
          title="Submit Portfolio"
          description="Upload final portfolio to GitHub"
          dueDate="March 18, 2026"
          status="Completed"
        />
      </div>
    </div>
  );
}

export default App;