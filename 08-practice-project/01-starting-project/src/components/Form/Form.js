import styles from "./Form.module.css";
import Button from "../UI/Button";

function Form() {
  return (
    <form className={styles.form}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings" />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return" />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" />
        </p>
      </div>
      <p className="actions">
        <Button className="buttonAlt">Reset</Button>
        <Button className="button">Calculate</Button>
      </p>
    </form>
  );
}

export default Form;
