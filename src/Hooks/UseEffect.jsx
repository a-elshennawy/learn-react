import { useEffect, useState } from "react";

export default function UseEffect() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <div className="mainContainer">
        <h1>posts</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <strong>{item.title}</strong> <br />
              <span>{item.body}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
