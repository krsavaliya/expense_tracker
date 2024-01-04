import React, { useState } from "react";
import "./Expeses.css";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card.js';
import ExpensesFilter from './ExpensesFilter.js';

const Expenses = (props) => {
  const [filterdYear, setFilterdYear] = useState('2020');
  const [filterInfoText, setFilterInfoText] = useState('2019, 2020 & 2022');

  const filterChangeHandler = selectedYear => {
    setFilterdYear(selectedYear);
    if(selectedYear==='2019'){
      setFilterInfoText('2020, 2021 & 2020');
    } else if (selectedYear === '2020'){
      setFilterInfoText('2019, 2021 & 2022');
    }
     else if (selectedYear === '2021'){
      setFilterInfoText('2019, 2020 & 2022');
    }
     else{
      setFilterInfoText('2019, 2020 & 2021');
    }
  };

  return (
    <Card className="expeses">

      <ExpensesFilter selected={filterdYear} onChangeFilter={filterChangeHandler}/>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
}

export default Expenses;