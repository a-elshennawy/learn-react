import { Client, Provider, cacheExchange, fetchExchange, useQuery } from "urql";
// let's discuss the imports first
// - client : main brain of URQL, it's the "connection manager" that knows where to send requests (API URL)

// - Provider : just like Context API making sure connection manager available for all child comps.

// - chacheExchange : assuring to avoid unneeded calls in case you requested the same thing again it will give you a chached version for better performance

// - fetchExchange : sends HTTP requests to the GraphQL server, like fetch(), converts GraphQL queries into network requests

// here we create the client
const client = new Client({
  url: "https://rickandmortyapi.com/graphql",
  exchanges: [cacheExchange, fetchExchange],
});

// Your actual GraphQL component that will use the data
function GraphQLContent() {
  // Define your GraphQL query
  //   which will be soooo specific as graphQl only gives what back what u asked for
  const GET_CHARACTERS = `
    query {
      characters {
        results {
          name
          gender
        }
      }
    }
  `;
  // just in case u wannat know how it works (what does it have you can get) visit the online playground
  // https://rickandmortyapi.com/graphql and see the docs it will show u the schema

  // Use the hook - it automatically runs when component mounts
  const [result] = useQuery({ query: GET_CHARACTERS });

  // Extract what you need
  const { data, fetching, error } = result;

  // Handle different states
  if (fetching) return <p>loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // display the data
  return (
    <>
      <div>
        <h1>GraphQL Testing using urQl</h1>
        <h3>Rick and morty characters :</h3>
        <div>
          {data.characters.results.map((character, index) => (
            <div key={index}>
              <h4>
                {character.name} he is a {character.gender}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// Main component that provides the client
export default function GraphQl() {
  return (
    <>
      <Provider value={client}>
        <GraphQLContent />
      </Provider>
    </>
  );
}
