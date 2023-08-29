import styles from "./AddUser.module.css";

function AddUser() {
  return (
    <form className={styles.input}>
      <label>Username</label>
      <input />
      <label>Age (Years)</label>
      <input type={"number"} />
      <button type={"submit"}>Add User</button>
    </form>
  );
}

export default AddUser;
