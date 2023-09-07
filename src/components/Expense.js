import React, { useState } from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItems";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChange={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expense;