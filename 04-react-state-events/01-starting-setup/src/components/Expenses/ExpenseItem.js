import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import {useState} from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  function changeTitle() {
    setTitle("updated!");
    console.log(title);
  }

  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={changeTitle}>update</button>
    </Card>
  );
}

export default ExpenseItem;
