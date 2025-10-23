// you instantly update the UI while waiting for a server response, then automatically rolls back if the action fails
// social media apps / api calls sometimes
import { useOptimistic, useState } from "react";

export default function UseOptimistic() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // here we start using our hook
  // it takes 2 arguments
  // 1st is the current state that you want to optimistically update (tasks)
  // 2nd is a function that defines how to update the state optimistically
  const [optimisticTasks, addOptimisticTasks] = useOptimistic(
    tasks,
    (state, newTasks) => [...state, newTasks]
  );

  // below function as old use of submission without the hook

  // async function handleSubmit(formData) {
  //   await new Promise((resolve) => setTimeout(resolve, 1000)); //<-- this line is just to imitate realtime network delay (not needed in real projects)

  //   const task = formData.get("task"); //<-- the name called (task) form the form
  //   // task input isn't empty
  //   if (task?.trim()) {
  //     setTasks([...tasks, task]); //<-- add the new task to the tasks
  //     setNewTask(""); //<-- clear input
  //   }
  // }

  // here while using the hook
  async function handleSubmit(formData) {
    const task = formData.get("task"); //<-- the name called (task) form the form
    if (!task.trim()) return;

    // optimistically updating UI
    addOptimisticTasks(task);
    console.log("added optimistacally");
    setNewTask("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 5000)); //<-- imitate realtime network delay (5 seconds to be easily noticed)

      // if successfull then final update
      setTasks([...tasks, task]);
      console.log("actually added");
    } catch (err) {
      // the optimistic update will roll back automatically if error happened
      console.error("failed adding task:", err);
    }
  }
  return (
    <>
      <form action={handleSubmit}>
        <input
          type="text"
          placeholder="add a task..."
          name="task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">add</button>
      </form>
      <ul>
        {/* here old way to display tasks using normal method that might have delay */}
        {/* {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))} */}

        {/* here we are displaying the optimistic update */}
        {optimisticTasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </>
  );
}
// if you're getting a response from an api and it's different from what you gave to the optimistic
// then the actual response will overwrite waht you did
