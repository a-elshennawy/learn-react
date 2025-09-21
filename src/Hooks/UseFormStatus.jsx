// it's a new hook used to avoid multiple inputs in case of slow connection as user spams the submit button
// you will not feel that as you are testing locally
// usually we use an additional state [isloading, setIsLoading] and disable the submit button if loading but the new hook made it more automated for us
// if you're goingg to use NextJS make sure you put
// "use client"; <-- in case NextJs

import { useState } from "react";
import { useFormStatus } from "react-dom";

// here we are going to create the whole button using the hook
function SubmitButton() {
  // pending / method / data / action <-- what is used in the hook but we will just need pending most of the time
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "adding" : "add"}
    </button>
  );
}

export default function UseFormStatus() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  //   this is old way of submitting using onSubmit={handleSubmit} on the form
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (newTask.trim()) {
  //       setTasks([...tasks, newTask]);
  //       setNewTask("");
  //     }
  //   };

  //   using the hook we need to do this
  async function handleSubmit(formData) {
    await new Promise((resolve) => setTimeout(resolve, 1000)); //<-- this line is just to imitate realtime network delay (not needed in real projects)

    const task = formData.get("task"); //<-- the name called (task) form the form
    // task input isn't empty
    if (task?.trim()) {
      setTasks([...tasks, task]); //<-- add the new task to the tasks
      setNewTask(""); //<-- clear input
    }
  }

  return (
    <>
      <form action={handleSubmit}>
        <input
          type="text"
          name="task" //we add a name for the formData to use
          placeholder="add a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <SubmitButton />
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </>
  );
}
// so eventually it's for form action instead of using loading state to handle slow connection bugs that might results in doubled insertions when user spam the button
// yet loading state is fine in case of simple small forms but sometimes this is needed in more complex cases
