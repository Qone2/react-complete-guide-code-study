import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.list.map((e) => <ExpenseItem title={e.title} date={e.date} amount={e.amount} />)}
    </Card>
  );
}

export default Expenses;
