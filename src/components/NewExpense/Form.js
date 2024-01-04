import React, { useState } from "react";
import './Form.css';

const ExpenseForm = (props) => {
  const [enterdTitle, setEnterdTitle] = useState("");
  const [enterdAmount, setEnterdAmount] = useState("");
  const [enteredDate, setEnterdDate] = useState("");
  //   const [userInput, setUserInput] = useState({
  //     enterdTitle: "",
  //     enterdAmount: "",
  //     enterdDate: "",
  //   });

  const titleChangHandler = (event) => {
    setEnterdTitle(event.target.value);
    // setUserInput((prevState) => {
    //     return { ...prevState, enteredTitle: event.target.value};
    // });
  };

  const amountChangeHandler = (event) => {
    setEnterdAmount(event.target.value);
    // setUserInput((prevState) => {
    //     return { ...prevState, enteredAmount: event.target.value};
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enterdTitle,
      amount: enterdAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    console.log(expenseData);
    setEnterdTitle("");
    setEnterdAmount("");
    setEnterdDate("");
  };

  const dateChangeHandler = (event) => {
    setEnterdDate(event.target.value);
    // setUserInput((prevState) => {
    //     return { ...prevState, enteredDate: event.target.value};
    // });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterdTitle} onChange={titleChangHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enterdAmount}
            min="0.01"
            step="0.01" 
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
