import React, { useEffect, useState } from 'react';
import AddTaskForm from '../Components/AddTaskForm/AddTaskForm';
import TaskList from '../Components/TaskList/TaskList';

const Home = () => {
    const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
  };

  const toggleTaskStatus = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    return task.priority === filter;
  });

  const completedTasksCount = tasks.filter((task) => task.completed).length;

    return (
        
               <div className="max-w-md mx-auto mt-8 p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <AddTaskForm addTask={addTask} />
      <div className="mt-4">
        <label className="mr-2">Filter by Priority:</label>
        <select
          className="border p-1"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <TaskList
        tasks={filteredTasks}
        editTask={editTask}
        toggleTaskStatus={toggleTaskStatus}
        deleteTask={deleteTask}
      />
      
      <p className="mt-2">
        Total Tasks: {tasks.length} | Completed Tasks: {completedTasksCount}
      </p>
    </div>
  );
};
            
     

export default Home;