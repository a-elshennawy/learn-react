// in this component we will be assuming that this is a really huge componenent (expensive)
// we can't afford to rerender it if something else in the home page render
// we will import in another page (ParentComponent) where other thing happens
import React, { useState, useEffect } from "react";

// be aware that most of the time it's used for components with props so re-rendring is decided with the change of these props
function ExpensiveComponent() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https:jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((data) => {
        setAlbums(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading albums...</div>;
  }
  return (
    <>
      <div className="text-center">
        <h2>albums list</h2>
        {albums.map((album) => (
          <div key={album.id}>
            <p>{album.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

// Export the memoized version of the component
// which will prevent the re-render of our expensive component if unrelated render happen in parent component
export default React.memo(ExpensiveComponent);
