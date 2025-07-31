// a game changer , simply it does what useFormStatus & useFormState do but in just one hook
import { useActionState } from "react";

export default function UseActionState() {
  // [state, action, isPending] <-- same order
  const [state, formAction, isPending] = useActionState(
    async (prev, formData) => {
      // normal validation we did in useFormState

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

      // here we imitate network delay or api call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return { success: "form submitted" };
    },
    null //<-- initial state
  );
  return (
    <>
      <form action={formAction}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name (min 6 chars)"
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Enter your age (18-45)"
          required
        />

        {/* used the ispending to prevent the doubled inputs and button spam */}
        <button type="submit" disabled={isPending}>
          {isPending ? "Adding..." : "Add"}
        </button>

        {/* messeges from validation */}
        {state?.error && <p style={{ color: "red" }}>{state.error}</p>}
        {state?.success && <p style={{ color: "green" }}>{state.success}</p>}
      </form>
    </>
  );
}
// eventually .. just a newer react hook to replace useFormState & useFormStatus
