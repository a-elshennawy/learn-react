import withDataFetching from "./withDataFetching";

// passing the data
const UserList = ({ data }) => {
  return (
    <>
      <div className="text-center">
        <h2>user list</h2>
        {data.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </>
  );
};

// here we apply the HOC
const UserListWithData = withDataFetching(
  UserList,
  "https://jsonplaceholder.typicode.com/users"
);
export default UserListWithData;

// this is the component if we are not using HOC
// import React, { useState, useEffect } from 'react';

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
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
// //     <div className="text-center">
//         <h2>user list</h2>
//         {data.map((user) => (
//           <p key={user.id}>{user.name}</p>
//         ))}
//       </div>
//   );
// };

// export default UserList;
