import React from 'react'
import ExpensesItem from '../Expenses/ExpensesItem';
import "./ExpensesList.css"

const ExpensesList = (props) => {

    if (props.filteredExpenses.length === 0) {
        return (
            <div className='expenses-list__fallback'>
                <h2>{`No expenses for ${props.filteredYear}`}</h2>
            </div>
        )
    }
    return (
        <ul className='expenses-list'>
            {props.filteredExpenses.map((expensesDatum, index) => {
                return (
                    <ExpensesItem
                        key={index}
                        date={expensesDatum.date}
                        amount={expensesDatum.amount}
                        title={expensesDatum.title}
                    />
                )
            })}
        </ul>
    )
}

export default ExpensesList;

