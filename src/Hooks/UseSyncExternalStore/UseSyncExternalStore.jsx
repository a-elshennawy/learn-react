// it's released in react 18 and it's for connection to EXTERNAL stores while avoiding concurrent render
// and sharing the data coming back across multiple comps (listeners) via store.js (PokemonStore.js in our case)
import { useEffect, useSyncExternalStore } from "react";
import { fetchPokemons, getState, subscribe } from "./PokemonsStore";

export default function UseSyncExternalStore() {
  //  how to use it ? useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot(optional))
  const { pokemons } = useSyncExternalStore(subscribe, getState);

  //   here normally importing the fetch function
  useEffect(() => {
    fetchPokemons();
  }, []);
  return (
    <>
      <h1>pokemon list</h1>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  );
}
// so it's same idea of useContext but no .. useContext is for sharing a state across your app
// while the is to SUBSCRIBE TO EXTERNAL STORES without worrying about concurrent render or causing any performance issues
// as avoiding unecessary renders
