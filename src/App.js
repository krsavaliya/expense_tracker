import React from "react";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 5599,
      date: new Date(2023, 1, 2),
    },
    { id: "e2", title: "T V ", amount: 55999, date: new Date(2023, 1, 2) },
    { id: "e3", title: "New Desk", amount: 499, date: new Date(2023, 1, 2) },
    { id: "e4", title: "El Bill", amount: 1599, date: new Date(2023, 1, 2) },
  ];

  const addExpenseHandler = expense => {
    console.log(expense);
  };

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Lets get Started!"),
  //   React.createElement(Expenses, {items:expenses})
  // );

    return (
      <div className="App">
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses}/>
      </div>
    );
}

export default App;
