function UserItem(props) {
  return (
    <li>
      {props.userName} ({props.userAge} years old)
    </li>
  );
}

export default UserItem;
