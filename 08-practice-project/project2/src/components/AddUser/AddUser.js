import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

function AddUser() {
  return (
    <Card>
      <form className={styles.input}>
        <label>Username</label>
        <input />
        <label>Age (Years)</label>
        <input type={"number"} />
        <Button type={"submit"}>Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
