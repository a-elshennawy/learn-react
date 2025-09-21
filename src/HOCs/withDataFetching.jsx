import { useState, useEffect } from "react";

// here it will accept the other components and the url (the api) as args
const withDataFetching = (WrappedComp, url) => {
  // the function which will be actually exported and used
  const WithDataFetching = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    // here's the logic we need to write only once so we use it more than once in other components
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
    }, [url]);

    if (loading) {
      return <div>Loading...</div>;
    }

    // then here we pass fetched data and any props down to wrapped component
    return <WrappedComp data={data} {...props} />;
  };

  return WithDataFetching;
};

export default withDataFetching;

// so in this component is actually a function that takes a component then enhance it and return another component
