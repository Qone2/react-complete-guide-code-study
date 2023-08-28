import styles from "./Form.module.css";
import Button from "../UI/Button";
import { useState } from "react";

function Form(props) {
  const [currentSaving, setCurrentSaving] = useState("");
  const [yearlyContrib, setYearlyContrib] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    const userInput = {
      "current-savings": currentSaving,
      "yearly-contribution": yearlyContrib,
      "expected-return": expectedReturn,
      duration: duration,
    };

    props.calculateHandler(userInput);
  }

  function resetHandler(event) {
    event.preventDefault();
    setDuration("");
    setCurrentSaving("");
    setExpectedReturn("");
    setYearlyContrib("");

    props.resetHandler();
  }

  return (
    <form
      className={styles.form}
      onSubmit={submitHandler}
      onReset={resetHandler}
    >
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            value={currentSaving}
            onChange={(event) => setCurrentSaving(event.target.value)}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={yearlyContrib}
            onChange={(event) => setYearlyContrib(event.target.value)}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={expectedReturn}
            onChange={(event) => setExpectedReturn(event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={(event) => setDuration(event.target.value)}
          />
        </p>
      </div>
      <p className="actions">
        <Button type="reset" className="buttonAlt">
          Reset
        </Button>
        <Button type="submit" className="button">
          Calculate
        </Button>
      </p>
    </form>
  );
}

export default Form;
