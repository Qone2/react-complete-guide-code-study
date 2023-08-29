function UserItem(props) {
  return (
    <div>
      {props.userName} ({props.userAge} years old)
    </div>
  );
}

export default UserItem;
