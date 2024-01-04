import React, { useState } from "react";
import "./Expeses.css";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card.js';
import ExpensesFilter from './ExpensesFilter.js';

const Expenses = (props) => {
  const [filterdYear, setFilterdYear] = useState('2020');
  
  const filterChangeHandler = selectedYear => {
    setFilterdYear(selectedYear);
  };

  return (
    <Card className="expeses">

      <ExpensesFilter selected={filterdYear} onChangeFilter={filterChangeHandler}/>
      {props.items.map(expense =><ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>)}
    </Card>
  );
}

export default Expenses;