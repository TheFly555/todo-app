"use client";

import { useState } from "react";

export default function Home() {
  const [inputDescription, setInputDescription] = useState("");

  const [tasks, setTasks] = useState([
    { id: 1, description: "task 1" },
    { id: 2, description: "task 2" },
  ]);

  function addTask() {
    event.preventDefault();
    if (inputDescription.trim() === "") return;

    const listSize = tasks.length > 0 ? tasks[tasks.length - 1].id : null;

    const newTaskId = listSize + 1;

    setTasks((prevList) => [
      ...prevList,
      { id: newTaskId, description: inputDescription },
    ]);

    setInputDescription("");
  }

  function deleteTask(id) {
    console.log(id);
    setTasks((prevItems) => prevItems.filter((task) => task.id !== id));
  }

  return (
    <div className="flex h-screen">
      <div className="mx-auto">
        <h1 className="font-bold tracking-wide text-2xl text-center p-3">
          TASKS
        </h1>
        <ul className="list-none align-middle  min-h-[400px]">
          {tasks.map((task) => (
            <li
              className="border-white border-2 w-96 flex flex-row"
              key={task.id}
            >
              <div className="grow p-2">{task.description}</div>
              <button
                className="border-l-2 border-white p-2 hover:cursor-pointer"
                onClick={() => deleteTask(task.id)}
              >
                DEL
              </button>
            </li>
          ))}
        </ul>
        <form className="mt-2">
          <input
            className="h-12 w-full text-black p-3"
            type="text"
            name="description"
            value={inputDescription}
            onChange={(e) => setInputDescription(e.target.value)}
          />
          <button
            className="border-2 border-white p-2 h-12 w-full"
            name="submit"
            onClick={addTask}
          >
            add task
          </button>
        </form>
      </div>
    </div>
  );
}
