import { useState } from "react";

export default function NewTask({ onAddNew }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    onAddNew(enteredTask);
    setEnteredTask("");
    console.log(enteredTask);
  }

  return (
    <div className="flex item-center gap-4">
      <input
        type="text"
        className="w-64 px-2 oy-1 rounded-sm bg-stone-200"
        onChange={(e) => handleChange(e)}
        value={enteredTask}
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}
