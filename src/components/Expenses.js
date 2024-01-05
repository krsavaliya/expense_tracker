import React, { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card.js";
import ExpensesChart from "./ExpensesChart.js";
import ExpensesFilter from "./ExpensesFilter.js";

const Expenses = (props) => {
  const [filterdYear, setFilterdYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterdYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterdYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses = {filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
