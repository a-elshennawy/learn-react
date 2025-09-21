import withDataFetching from "./withDataFetching";

const AlbumsList = ({ data }) => {
  return (
    <>
      <div className="text-center">
        <h2>albums list</h2>
        {data.map((album) => (
          <div key={album.id}>
            <p>{album.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

// here we apply the HOC
const AlbumsListWithData = withDataFetching(
  AlbumsList,
  "https://jsonplaceholder.typicode.com/albums"
);
export default AlbumsListWithData;

// this is the component if we are not using HOC
// import React, { useState, useEffect } from 'react';

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/photos')
//       .then(response => response.json())
//       .then(data => {
//         setUsers(data);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading users...</div>;
//   }

//   return (
//     <div className="text-center">
//   <h2>albums list</h2>
//   {data.map((album) => (
//     <div key={album.id}>
//       <p>{album.title}</p>
//       <img src={album.thumbnailUrl} />
//     </div>
//   ))}
// </div>
//   );
// };

// export default UserList;
