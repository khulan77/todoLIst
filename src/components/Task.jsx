import React from "react";

export const Task = ({ task, toggleCompleted, deleteTask }) => {
  return (
    <div className="task-item  flex  justify-between  h-[62px] w-[335px] bg-[#f9FAFB] items-center rounded-md p-4 ">
      <div className="flex gap-2 items-center  bg-[#f9FAFB] text-sm">
        <input
          type="checkbox"
          checked={task.isCompleted}
          className="h-5 w-5"
          onChange={() => toggleCompleted(task.id)}
        />
        <span
          className={`${
            task.isCompleted ? "completed" : ""
          } `}
        >
          {task.text}
        </span>
      </div>

      <button
        onClick={() => deleteTask(task.id)}
        className="delete-btn p-4  text-[#EF4444] text-sm h-[30px]  text-center  rounded-md bg-[#FEF2F2] flex items-center justify-center  "
      >
        Delete
      </button>
    </div>
  );
};
