import { useState } from "react";
import "./App.css";

import Task1_1 from "./components/Task1_1";
import Task1_2 from "./components/Task1_2";
import Task1_3 from "./components/Task1_3";
import Task1_4 from "./components/Task1_4";
import Task1_5 from "./components/Task1_5";
import Task1_6 from "./components/Task1_6";
import Task1_7 from "./components/Task1_7";
import Counter from "./components/Counter";
import SearchFilter from "./components/SearchFilter";

function App() {
  const [selectedTask, setSelectedTask] = useState("");

  const tasks = [
    { id: "task1", title: "Task 1.1" },
    { id: "task2", title: "Task 1.2" },
    { id: "task3", title: "Task 1.3" },
    { id: "task4", title: "Task 1.4" },
    { id: "task5", title: "Task 1.5" },
    { id: "task6", title: "Task 1.6" },
    { id: "task7", title: "Task 1.7" },
    { id: "counter", title: "Counter App" },
    { id: "search", title: "Search Filter" },
  ];

  const renderComponent = () => {
    switch (selectedTask) {
      case "task1":
        return <Task1_1 />;

      case "task2":
        return <Task1_2 />;

      case "task3":
        return <Task1_3 />;

      case "task4":
        return <Task1_4 />;

      case "task5":
        return <Task1_5 />;

      case "task6":
        return <Task1_6 />;

      case "task7":
        return <Task1_7 />;

      case "counter":
        return <Counter />;

      case "search":
        return <SearchFilter />;

      default:
        return (
          <div className="welcome-card">
            <h2>Welcome 👋</h2>

            <p>
              This project contains all React Basics tasks and Mini Projects.
            </p>

            <br />

            <p>
              Click on any task card above to view its implementation.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="app">

      <header className="header">
        <h1>React Assignment</h1>
        <p>React Basics & Mini Projects</p>
      </header>

      <section>
        <h2 className="section-title">React Basics</h2>

        <div className="card-grid">
          {tasks.slice(0, 7).map((task) => (
            <div
              key={task.id}
              className={`task-card ${
                selectedTask === task.id ? "active" : ""
              }`}
              onClick={() => setSelectedTask(task.id)}
            >
              <h3>{task.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Mini Projects</h2>

        <div className="card-grid">
          {tasks.slice(7).map((task) => (
            <div
              key={task.id}
              className={`task-card ${
                selectedTask === task.id ? "active" : ""
              }`}
              onClick={() => setSelectedTask(task.id)}
            >
              <h3>{task.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="output-section">
        <h2 className="section-title">Selected Task</h2>

        {renderComponent()}
      </section>

      <footer className="footer">
        <p>React Assignment © 2026 | Developed by Veena Khatri</p>
      </footer>

    </div>
  );
}

export default App;