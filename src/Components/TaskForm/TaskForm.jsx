import React from "react";

const TaskForm = ({ task, onChange, onSave, onCancel }) => {
  return (
    <div >
      <input
        type="text"
        name="text"
        value={task.text}
        onChange={onChange}
        placeholder="Task name"
        className="border p-1 mr-2"
      />
       <select
        name="priority"
        value={task.priority}
        onChange={onChange}
        className="border p-1 mr-2"
      >
        <option className="font-serif" value="low">Low</option>
        <option className="font-serif"value="medium">Medium</option>
        <option className="font-serif" value="high">High</option>
      </select>
      {/* Other form fields for priority, etc. */}
      {/* <button onClick={onSave} className="mr-2">
        Save
      </button>
      <button onClick={onCancel}>Cancel</button> */}
    </div>
  );
};

export default TaskForm;






