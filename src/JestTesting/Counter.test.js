// render : Renders your React component into a temporary, in-memory DOM environment
// screen : An object that provides access to the DOM that was rendered. It's your main tool for finding elements on the page
// fireEvent : a utility for simulate user actions like clicking or hovering
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

// the below is a jest function that groups related tests
describe("counter comp", () => {
  // test is the core jest function defining an individual test case
  // takes description of what should the test do and a function containing the test logic
  // test case 1: counter should display initial value of 0
  test("counter should display initial value of 0", () => {
    render(<Counter />);

    // find the element in the DOM which is (<h1>Count : {count}</h1>)
    const counterElement = screen.getByRole("heading", { name: /Count : 0/i });

    // assert the element is in document
    expect(counterElement).toBeInTheDocument();
  });

  //   test case 2: checking increment function
  test("increment the count when the + button is clicked", () => {
    render(<Counter />);

    // find the button
    const incBtn = screen.getByRole("button", { name: "+" });

    // simulate the user click
    fireEvent.click(incBtn);

    // After the click, check that the heading has updated to 'Count : 1'
    const counterElement = screen.getByRole("heading", { name: /Count : 1/i });

    // this is a jest matcher makes as assertion it varefies that element exists in the "screen"
    // Assert that the updated element is in the document
    expect(counterElement).toBeInTheDocument();
  });

  //   test case : checking decrement function
  test("decrement the count when the - button is clicked", () => {
    render(<Counter />);

    // find the button
    const decBtn = screen.getByRole("button", { name: "-" });

    // simulate the user click
    fireEvent.click(decBtn);

    // After the click, check that the heading has updated to 'Count : -1' as the initial value is 0
    const counterElement = screen.getByRole("heading", { name: /Count : -1/i });

    // Assert that the updated element is in the document
    expect(counterElement).toBeInTheDocument();
  });
});
