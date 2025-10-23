// it's a brand new hook in react 19 as alternative for useEffect in API data fetching
import { useEffect, useState, use, Suspense } from "react";
// declare a function (not useEffect to fetch the data)
async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

// pass the promise here
const postsPromise = fetchPosts();

export default function Use() {
  //   const [data, setData] = useState([]); //<-- don't need this anymore

  //   old way to fetch an Api

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((response) => response.json())
  //       .then((json) => setData(json));
  //   },[]);

  // the hook is using the promise not the fetch function
  // if it does the fetch function it will result in a loop
  const posts = use(postsPromise);

  return (
    <>
      {/* you have to have suspense (fallback) */}
      <Suspense fallback={<div>Loading posts...</div>}>
        <h1>Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </Suspense>
    </>
  );
}
// so it allows to do the await & promise without even doing them or risk the useEffect costs and probable mistakes
