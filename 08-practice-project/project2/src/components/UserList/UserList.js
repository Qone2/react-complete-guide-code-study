import UserItem from "./UserItem";
import Card from "../UI/Card";
import styles from "./UserList.module.css";

function UserList(props) {
  return (
    <Card className={styles.users}>
      <ul>
        {props.userList.map((e) => (
          <UserItem key={e.id} userName={e.name} userAge={e.age} />
        ))}
      </ul>
    </Card>
  );
}

export default UserList;
