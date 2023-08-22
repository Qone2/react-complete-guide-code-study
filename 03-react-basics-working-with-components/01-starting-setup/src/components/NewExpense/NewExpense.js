import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const [isFormMode, setIsFormMode] = useState(false);

  const saveExpenseHandler = (enteredExpense) => {
    const expenseData = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!isFormMode && (
        <button type="button" onClick={() => setIsFormMode(true)}>
          Add New Expense
        </button>
      )}
      {isFormMode && (
        <ExpenseForm
          onSaveExpense={saveExpenseHandler}
          onCancel={() => setIsFormMode(false)}
        />
      )}
    </div>
  );
}

export default NewExpense;
