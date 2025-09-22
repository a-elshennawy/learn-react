// import the store we created using create function in ComplexStore.js
import { useComplexStore } from "../ComplexStore";
export default function ToggleTheme() {
  // importing what we need
  const toggleTheme = useComplexStore((state) => state.toggleTheme);
  return (
    <>
      <button onClick={toggleTheme}>toggle theme</button>
    </>
  );
}
