import UserItem from "./UserItem";
import Card from "../UI/Card";

function UserList(props) {
  return (
    <Card>
      {props.userList.map((e) => (
        <UserItem key={e.id} userName={e.name} userAge={e.age} />
      ))}
    </Card>
  );
}

export default UserList;
