
import React from "react";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({ tasks, editTask, toggleTaskStatus, deleteTask }) => {
  return (
    <div className="mt-4 ">
      {tasks.map((task) => (
        <div key={task.id} className="mb-2 p-2 border rounded">
        
          <p>Task Name: {task.text}</p>
          <p>Priority: {task.priority}</p>
          <TaskItem
            task={task}
            editTask={editTask}
            toggleTaskStatus={toggleTaskStatus}
            deleteTask={deleteTask}
          />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
