import Card from "../UI/Card";
import "./ExpensePage.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function ExpensePage(props) {
  const [filteredYear, getFilteredYear] = useState("2020");

  const yearFilter = (selectYear) => {
    console.log(selectYear);
    getFilteredYear(selectYear);
    // console.log(event.target.value);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSaveExpenseFilter={yearFilter}
        />
        <ExpenseChart expense={filteredExpense}/>
        <ExpenseList items = {filteredExpense}/>
      </Card>
    </div>
  );
}

export default ExpensePage;
