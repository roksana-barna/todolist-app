
import React from "react";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({ tasks, editTask, toggleTaskStatus, deleteTask }) => {
  return (
    <div className="mt-4">
      {tasks.map((task) => (
        <div key={task.id} className="mb-2 p-2 border rounded">
          <TaskItem
            task={task}
            editTask={editTask}
            toggleTaskStatus={toggleTaskStatus}
            deleteTask={deleteTask}
          />
          <p>Task Name: {task.text}</p>
          <p>Priority: {task.priority}</p>
          <p>Status: {task.completed ? "Completed" : "Incomplete"}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
