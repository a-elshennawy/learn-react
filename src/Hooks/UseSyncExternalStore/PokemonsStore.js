let state = { pokemons: [] }; //initial state
let listeners = []; //list of subscribers

// function to fetch data and update the state
export const fetchPokemons = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  const data = await response.json();
  state = { pokemons: data.results };
  listeners.forEach((listener) => listener()); //notify all subscribers
};

// things to be used in components to share the data
export const getState = () => state;
export const subscribe = (listener) => {
  listeners.push(listener);

  //   cleanup
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
};
