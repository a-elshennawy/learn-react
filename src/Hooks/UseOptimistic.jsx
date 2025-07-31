// lets you instantly update the UI while waiting for a server response, then automatically rolls back if the action fails
// social media apps / api calls sometimes
import { useOptimistic } from "react";

export default function UseOptimistic() {
  return <div>useOptimistic</div>;
}
// best part is if you 're getting a response from an api and it's different from waht you gave to the optimistic then the actual response will overwrite waht you did
