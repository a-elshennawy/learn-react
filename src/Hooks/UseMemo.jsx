// it's used for performance enhancment and avoid functions that is dealing with specific thing to start again wheneever any render happens even if it's related to it
// specifically when dealing with big amount of data like fetching API you don't that to redone everytime any other state changes even if it's not related to you data
import { useState, useEffect, useMemo } from "react";
export default function UseMemo() {
  // this the state that will be changing and cause the issue of re-rendering
  const [toggle, setToggle] = useState(false);
  //   for the API fetching
  const [data, setData] = useState([]);

  //   fetching 500 comments (postId, Id, name, email, body)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => console.error("error fetching data", err));
  }, []);

  //we gonna create a function to get us the longest name of these comments
  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("this was computed");
    return longestName;
  };

  //   here is the useMemo .. so instead of calling the function up there which will be excuted each time anything change
  // we will make excute evertime the data change

  const getLongestName = useMemo(() => findLongestName(data), [data]);
  //   the log "this is computed" will not be logged when toggle state change anymore

  return (
    <>
      {/* here to display the longest name and gave the function the data from the api as an argument */}
      {/* <div>{findLongestName(data)}</div> */}

      {/* above is the old way of calling the function */}
      {/* below is the way using UseMemo */}
      <div>{getLongestName}</div>

      {/* here is to use the toggle state and change it */}
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        toggle
      </button>
      {toggle && <h3>toggle</h3>}
    </>
  );
}
// you will need it with huge amopunt of data like if you're going to get longest name of a 100000000 comments not just 500
