import { useState, useEffect } from "react";

// here it will accept the other components and the url (the api) as args
const withDataFetching = (WrappedComp, url) => {
  // the function which will be actually used
  const WithDataFetching = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    // here's the logic we need to write only once so we use it more than once in other components
    // which is normal data fetching logic
    useEffect(() => {
      setLoading(true);
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("failed fetching data:", err);
          setLoading(false);
        });
    }, [url]); //<-- dep. list so it changes based on each comp. api end point

    if (loading) {
      return <div>Loading...</div>;
    }

    // then here we pass fetched data and any props down to wrapped component
    return <WrappedComp data={data} {...props} />;
  };

  return WithDataFetching; // we return the function which contains the logic
};

export default withDataFetching;

// so in this component is actually a function that takes a component, enhance it, return it
