import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  function selectFilterHandler(year) {
    setFilteredYear(year);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectFilter={selectFilterHandler}
        />
        {props.list.map((e) => (
          <ExpenseItem title={e.title} date={e.date} amount={e.amount} />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
