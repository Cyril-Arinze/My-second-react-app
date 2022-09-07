import React, { useState } from 'react'
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from './components/NewExpenses/NewExpenses';

const App = () => {
  const locallyStoredExpenseItem = JSON.parse(localStorage.getItem("storedExpenseItem") || "[]");
  locallyStoredExpenseItem.map(dateValue => {
    return (
      dateValue.date = new Date(dateValue.date)
    )
  })
  const [expenseItems, setExpenseItems] = useState(locallyStoredExpenseItem)

  const add = (userInput) => {
    setExpenseItems((prevState) => {
      return [userInput, ...prevState]
    })
    localStorage.setItem("storedExpenseItem", JSON.stringify([userInput, ...expenseItems]))
    console.log(locallyStoredExpenseItem);

  }

  return (
    <div>
      <NewExpenses onAddNewExpenses={add} />
      <Expenses item={expenseItems} />
    </div>
  );
}

export default App;
