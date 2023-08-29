import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";

const initialState = {
  name: "",
  age: "",
};

function AddUser(props) {
  const [userInfo, setUserInfo] = useState(initialState);

  function onSubmitHandler(event) {
    event.preventDefault();

    props.onAddUser({ ...userInfo });
    setUserInfo(initialState);
  }

  function inputChangeHandler(input, value) {
    setUserInfo((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  }

  return (
    <Card className={styles.input}>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor={"text"}>Username</label>
        <input
          type={"text"}
          value={userInfo.name}
          onChange={(event) => inputChangeHandler("name", event.target.value)}
        />
        <label htmlFor={"text"}>Age (Years)</label>
        <input
          type={"number"}
          value={userInfo.age}
          onChange={(event) => inputChangeHandler("age", event.target.value)}
        />
        <Button type={"submit"}>Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
