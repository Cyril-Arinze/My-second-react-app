import React, { useState } from 'react'
import "./ExpensesForm.css";

function ExpensesForm(props) {
    const [expandForm, setExpandForm] = useState(false)

    const [expensesInput, setExpensesInput] = useState({
        title: "",
        amount: '',
        date: '',
    })

    const userInput = { title: expensesInput.title, amount: expensesInput.amount, date: new Date(expensesInput.date) }

    const expensesInputHandler = evt => {
        const { name, value } = evt.target
        setExpensesInput(prevState => {
            return { ...prevState, [name]: value }
        })
    }

    const expensesSubmitHandler = evt => {
        evt.preventDefault();
        props.onAddExpenses(userInput)
        setExpensesInput({
            title: "",
            amount: '',
            date: "",
        })
        setExpandForm(false)
    }
    const expandFormHandler = () => {
        setExpandForm(true)
    }
    return (
        <form onSubmit={expensesSubmitHandler}>
            <div div className='new-expense__controls'>

                {expandForm ? (
                    <div>
                        <div className='new-expense__control'>
                            <label>Title</label>
                            <input onChange={expensesInputHandler} type="text" placeholder='Enter Title of Expense here' name='title' value={expensesInput.title} />
                        </div>
                        <div className='new-expense__control'>
                            <label>Amount</label>
                            <input onChange={expensesInputHandler} type="number" min="0.01" step='0.01' name='amount' value={expensesInput.amount} />
                        </div>
                        <div className='new-expense__control' >
                            <label>Date</label>
                            <input onChange={expensesInputHandler} type="date" min='2019-01-01' max='2023-30-12' name='date' value={expensesInput.date} />
                        </div>
                        <div className='new-expense__actions'>
                            <button type="submit">Add Expense</button>
                        </div>
                    </div>



                ) : (
                    <div onClick={expandFormHandler} className='new-expense__actions'>
                        <button>Add New Expense</button>
                    </div>)}

            </div>
        </form >
    );
}

export default ExpensesForm;