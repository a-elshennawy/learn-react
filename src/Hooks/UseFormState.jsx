// useFormState is some sort of validation method but it does validate or to be more acurate handle the action results
import { useFormState, useFormStatus } from "react-dom";

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

export default function UseFormState() {
  // here we start using the hook as a state of the form and the action (which will be submitting the form)
  //   and giving it the formData to be able to validate the inputs as we will see using normal if conditions
  const [state, formAction] = useFormState(async (prev, formData) => {
    // there's a name and it's > 6 chars
    if (!formData.get("name") || formData.get("name").length < 6) {
      return { error: "name have to be at least 6 characters" };
    }

    // there's an age & > 18 and < 45
    if (
      !formData.get("age") ||
      formData.get("age") < 18 ||
      formData.get("age") > 45
    ) {
      return { error: "age have to be between 18 and 45" };
    }

    return { success: "form submitted" };
  }, null);

  return (
    <>
      <form action={formAction}>
        <input type="text" name="name" placeholder="enter your name" />
        <input type="number" name="age" placeholder="enter your age" />
        <SubmitButton />
        {state?.error && <p style={{ color: "red" }}>{state.error}</p>}
        {state?.success && <p style={{ color: "green" }}>{state.success}</p>}
      </form>
    </>
  );
}
