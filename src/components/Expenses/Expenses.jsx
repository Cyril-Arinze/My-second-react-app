import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from '../NewExpenses/ExpensesFilter';
import './ExpensesItem.css'
import ExpensesList from '../NewExpenses/ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = (Year) => {
        setFilteredYear(Year);
    }

    const filteredExpenses = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });


    return (

        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList filteredYear={filteredYear} filteredExpenses={filteredExpenses} />
        </Card>
    );
}

export default Expenses;