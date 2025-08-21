import AlbumsListWithData from "./AlbumsList";
import UserListWithData from "./UserList";

export default function DataDisplay() {
  return (
    <>
      <div>
        <h1>data fetched</h1>
        <UserListWithData />
        <AlbumsListWithData />
      </div>
    </>
  );
}
