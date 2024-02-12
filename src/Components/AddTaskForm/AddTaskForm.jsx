
import React, { useState } from "react";
import TaskForm from "../TaskForm/TaskForm";

const AddTaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState({
    text: "",
    priority: "low",
    completed: false,
    id: Date.now(),
  });

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask({
      text: "",
      priority: "low",
      completed: false,
      id: Date.now(),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <TaskForm
        task={newTask}
        onChange={handleChange}
        onSave={() => {}}
        onCancel={() =>
          setNewTask({
            text: "",
            priority: "low",
            completed: false,
            id: Date.now(),
          })
        }
      />
      <button type="submit" className="mt-2 bg-blue-500 text-white px-2 py-1 rounded">
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
