// simple example for using UseEffect to fetch data from API
import { useEffect, useState } from "react";

export default function UseEffect() {
  // UseState to be able to track the changes on our data fetched from the API
  const [data, setData] = useState([]);

  // using fetch and promises to get our data
  useEffect(() => {
    // fetch it
    fetch("https://jsonplaceholder.typicode.com/posts")
      // json it
      .then((response) => response.json())
      // set the change to it
      .then((json) => setData(json));
  }, []);
  // empty dep. list.

  return (
    <>
      <h1>posts</h1>
      <ul>
        {/* mapping on our data */}
        {data.map((item) => (
          // unique key to avoid messy console
          // (be aware that id, title,body are in the response of the API we using so u might need to see you API response first using console.log(json))
          <li key={item.id}>
            <strong>{item.title}</strong> <br />
            <span>{item.body}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
