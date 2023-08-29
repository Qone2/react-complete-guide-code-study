import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";

let count = 0;

function App() {
  const [userList, setUserList] = useState([]);

  function onAddUserHandler(user) {
    user["id"] = ++count;
    setUserList((prevState) => [...prevState, user]);
  }

  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />
      <UserList userList={userList} />
    </div>
  );
}

export default App;
