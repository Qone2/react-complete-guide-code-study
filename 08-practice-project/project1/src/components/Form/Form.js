import styles from "./Form.module.css";
import Button from "../UI/Button";
import { useState } from "react";

const currentSavingId = "current-savings";
const yearlyContribId = "yearly-contribution";
const expectedReturnId = "expected-return";
const durationId = "duration";

const initialUserInput = {
  [currentSavingId]: "10000",
  [yearlyContribId]: "1200",
  [expectedReturnId]: "5",
  [durationId]: "15",
};

function Form(props) {
  // const [currentSaving, setCurrentSaving] = useState("");
  // const [yearlyContrib, setYearlyContrib] = useState("");
  // const [expectedReturn, setExpectedReturn] = useState("");
  // const [duration, setDuration] = useState("");
  const [userInput, setUserInput] = useState({
    [currentSavingId]: "10000",
    [yearlyContribId]: "1200",
    [expectedReturnId]: "5",
    [durationId]: "15",
  });

  function inputChangeHandler(input, value) {
    setUserInput({
      ...userInput,
      [input]: value,
    });
  }

  function submitHandler(event) {
    event.preventDefault();

    // const userInput = {
    //   currentSavingId: currentSaving,
    //   yearlyContribId: yearlyContrib,
    //   expectedReturnId: expectedReturn,
    //   duration: duration,
    // };

    props.calculateHandler(userInput);
  }

  function resetHandler() {
    // setDuration("");
    // setCurrentSaving("");
    // setExpectedReturn("");
    // setYearlyContrib("");

    setUserInput(initialUserInput);

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
          <label htmlFor={currentSavingId}>Current Savings ($)</label>
          <input
            value={userInput[currentSavingId]}
            onChange={(event) =>
              inputChangeHandler(currentSavingId, event.target.value)
            }
            type="number"
            id={currentSavingId}
          />
        </p>
        <p>
          <label htmlFor={yearlyContribId}>Yearly Savings ($)</label>
          <input
            type="number"
            id={yearlyContribId}
            value={userInput[yearlyContribId]}
            onChange={(event) =>
              inputChangeHandler(yearlyContribId, event.target.value)
            }
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor={expectedReturnId}>
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id={expectedReturnId}
            value={userInput[expectedReturnId]}
            onChange={(event) =>
              inputChangeHandler(expectedReturnId, event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor={durationId}>Investment Duration (years)</label>
          <input
            type="number"
            id={durationId}
            value={userInput[durationId]}
            onChange={(event) =>
              inputChangeHandler(durationId, event.target.value)
            }
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
