import { useState } from "react";
import tasksData from "../data/tasks";

const columns = [
  "Today",
  "Tomorrow",
  "This Week",
  "Next Week",
  "Unplanned",
];

export default function Task5() {
  const [tasks, setTasks] = useState(tasksData);
  const [draggedId, setDraggedId] = useState(null);
  const [activeColumn, setActiveColumn] = useState("");

  const onDragStart = (id) => {
    setDraggedId(id);
  };

  const onDragEnd = () => {
    setDraggedId(null);
    setActiveColumn("");
  };

  const onDragOver = (event, column) => {
    event.preventDefault();
    setActiveColumn(column);
  };

  const onDrop = (column) => {
    if (draggedId === null) return;

    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === draggedId
          ? { ...task, category: column }
          : task
      )
    );

    setDraggedId(null);
    setActiveColumn("");
  };

  const getTasks = (column) => {
    return tasks.filter(
      (task) => task.category === column
    );
  };

  return (
    <div className="kanban-container">

      <h2 className="kanban-title">
        Task 5 - Drag & Drop Task List
      </h2>


      <div className="kanban-grid">

        {columns.map((column) => (

          <div
            key={column}
            className={
              column === "Unplanned"
                ? `kanban-column unplanned-column ${
                    activeColumn === column
                      ? "active-drop"
                      : ""
                  }`
                : `kanban-column ${
                    activeColumn === column
                      ? "active-drop"
                      : ""
                  }`
            }
            onDragOver={(event) =>
              onDragOver(event, column)
            }
            onDrop={() => onDrop(column)}
          >

            <div className="kanban-header">

              <span>
                {column}
              </span>

              <span className="task-count">
                {getTasks(column).length}
              </span>

            </div>


            <div className="kanban-body">

              {getTasks(column).length === 0 ? (

                <div className="empty-column">
                  Drop task here
                </div>

              ) : (

                getTasks(column).map((task) => (

                  <div
                    key={task.id}
                    className="task-item"
                    draggable
                    onDragStart={() =>
                      onDragStart(task.id)
                    }
                    onDragEnd={onDragEnd}
                  >

                    <span className="task-icon">
                      📋
                    </span>

                    <span>
                      {task.title}
                    </span>

                  </div>

                ))

              )}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}