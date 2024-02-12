// TaskItem.js
// import React, { useState } from "react";
// import TaskForm from "../TaskForm/TaskForm";

// const TaskItem = ({ task, editTask, toggleTaskStatus, deleteTask }) => {
//   const [editing, setEditing] = useState(false);

//   const handleEdit = () => {
//     setEditing(true);
//   };

//   const handleSave = (updatedTask) => {
//     editTask(task.id, updatedTask);
//     setEditing(false);
//   };

//   const handleCancel = () => {
//     setEditing(false);
//   };

//   return (
//     <li className="mb-2 p-2 border rounded flex items-center justify-between">
//       {editing ? (
//         <TaskForm task={task} onSave={handleSave} onCancel={handleCancel} />
//       ) : (
//         <>
//           <div>
//             <input
//               type="checkbox"
//               checked={task.completed}
//               onChange={() => toggleTaskStatus(task.id)}
//               className="mr-2"
//             />
//             <span
//               className={task.completed ? "line-through" : ""}
//             >{`Priority: ${task.priority} - ${task.text}`}</span>
//           </div>
//           <div>
//             <button className="mr-2 text-blue-500" onClick={handleEdit}>
//               Edit
//             </button>
//             <button className="text-red-500" onClick={() => deleteTask(task.id)}>
//               Delete
//             </button>
//           </div>
//         </>
//       )}
//     </li>
//   );
// };

// export default TaskItem;
// TaskItem.js
import React from 'react';

const TaskItem = () => {
    return (
        <div>
            
        </div>
    );
};

export default TaskItem;