import React from "react";

const TaskForm = ({ task, onChange, onSave, onCancel }) => {
  return (
    <div>
      <input
        type="text"
        name="text"
        value={task.text}
        onChange={onChange}
        placeholder="Task name"
        className="border p-1 mr-2"
      />
      {/* Other form fields for priority, etc. */}
      <button onClick={onSave} className="mr-2">
        Save
      </button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default TaskForm;






