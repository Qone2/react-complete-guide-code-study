import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useRef, useState } from "react";
import ErrorModal from "../UI/ErrorModal";

// const initialState = {
//   name: "",
//   age: "",
// };

function AddUser(props) {
  // const [userInfo, setUserInfo] = useState(initialState);
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  function onSubmitHandler(event) {
    event.preventDefault();
    if (
      nameInputRef.current.value.trim().length === 0 ||
      ageInputRef.current.value.trim().length === 0
    ) {
      setError({
        title: "Invalid input.",
        message: "이름과 나이를 입력하세요.",
      });
      return;
    }

    if (+ageInputRef.current.value < 0) {
      setError({
        title: "Invalid age.",
        message: "나이가 0보다 작을 순 없습니다.",
      });
      return;
    }

    props.onAddUser({
      name: nameInputRef.current.value,
      age: ageInputRef.current.value,
    });
    // setUserInfo(initialState);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  }

  // function inputChangeHandler(input, value) {
  //   setUserInfo((prevState) => ({
  //     ...prevState,
  //     [input]: value,
  //   }));
  // }

  function onCloseHandler() {
    setError(undefined);
  }

  return (
    <>
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
            // value={userInfo.name}
            // onChange={(event) => inputChangeHandler("name", event.target.value)}
            ref={nameInputRef}
          />
          <label htmlFor={"text"}>Age (Years)</label>
          <input
            type={"number"}
            // value={userInfo.age}
            // onChange={(event) => inputChangeHandler("age", event.target.value)}
            ref={ageInputRef}
          />
          <Button type={"submit"}>Add User</Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
