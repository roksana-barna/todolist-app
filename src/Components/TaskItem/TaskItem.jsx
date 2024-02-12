
import React, { useState } from "react";
import TaskForm from "../TaskForm/TaskForm";

const TaskItem = ({ task, editTask, toggleTaskStatus, deleteTask }) => {
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = (updatedTask) => {
    editTask(task.id, updatedTask);
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  return (
    <div className="mb-2 p-2 border rounded flex items-center justify-between bg-lime-200">
      {editing ? (
        <TaskForm task={task} onSave={handleSave} onCancel={handleCancel} />
      ) : (
        <>
          <div className="flex">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskStatus(task.id)}
              className="mr-2"
            />
            <p className="font-serif">Status: {task.completed ? "Completed" : "Incomplete"}</p>
          </div>
          <div>
            <p className="font-serif">Priority: {task.priority}</p>
            <button className="mr-2 text-blue-500 font-serif" onClick={handleEdit}>
              Edit
            </button>
            <button  className="text-red-500 font-serif" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;

