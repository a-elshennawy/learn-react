// you have to npm install zustand first to import the create function
import { create } from "zustand";

// then we start "creating" the store
// set is to change
// get is to update over already existing thing (update)
export const useComplexStore = create((set, get) => ({
  // no need to set as it's a single variable
  count: 0,

  // here a normal function to increment the counter BUT with it we call the checkMatch function
  // as to check the count after each process is being done to the counter
  // using get. as it's a get function

  // state is to change over the current state
  inc: () => {
    set((state) => ({ count: state.count + 1 }));
    get().checkMatch();
  },

  // decrease by 1
  dec: () => {
    set((state) => ({ count: state.count - 1 }));
    get().checkMatch();
  },

  // reset to 0
  reset: () => set(() => ({ count: 0 })),

  match: false,
  checkMatch: () => {
    // get the current count value
    const { count } = get();
    if (count === 11) {
      set(() => ({ match: true }));
    } else {
      set(() => ({ match: false }));
    }
  },

  // here we start doing something not realte to the counter
  theme: "dark",
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
}));

// in general Zustand State Managment is just a store for states to share & use across your app
// next you need to check count / inc / dec / multiply / split / reset / checkmatchcomp / displaytheme / toggletheme / mainComp
// for understanding how it all used
