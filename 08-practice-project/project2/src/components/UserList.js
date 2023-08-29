import UserItem from "./UserItem";

function UserList(props) {
  return (
    <div>
      {props.userList.map((e) => (
        <UserItem key={e.id} userName={e.name} userAge={e.age} />
      ))}
    </div>
  );
}

export default UserList;
