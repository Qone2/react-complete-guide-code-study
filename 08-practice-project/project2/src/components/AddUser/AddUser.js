import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const initialState = {
  name: "",
  age: "",
};

function AddUser(props) {
  const [userInfo, setUserInfo] = useState(initialState);
  const [error, setError] = useState();

  function onSubmitHandler(event) {
    event.preventDefault();
    if (userInfo.name.trim().length === 0 || userInfo.age.trim().length === 0) {
      setError({
        title: "Invalid input.",
        message: "이름과 나이를 입력하세요.",
      });
      return;
    }

    if (+userInfo.age < 0) {
      setError({
        title: "Invalid age.",
        message: "나이가 0보다 작을 순 없습니다.",
      });
      return;
    }

    props.onAddUser({ ...userInfo });
    setUserInfo(initialState);
  }

  function inputChangeHandler(input, value) {
    setUserInfo((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  }

  function onCloseHandler() {
    setError(undefined);
  }

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClose={onCloseHandler}
        />
      )}
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
    </div>
  );
}

export default AddUser;
