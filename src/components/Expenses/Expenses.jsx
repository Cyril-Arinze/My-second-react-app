import React from 'react'
import ExpensesItem from './ExpensesItem'
import expensesData from '../../ExpensesData';
import Card from '../UI/Card';
import './ExpensesItem.css'

function Expenses() {
    return (
        <Card className='expenses'>
            {expensesData.map((expensesDatum, index) => {
                return (
                    <ExpensesItem
                        key={index}
                        date={expensesDatum.date}
                        amount={expensesDatum.amount}
                        title={expensesDatum.title}
                    />
                )
            })}
        </Card>
    );
}

export default Expenses;