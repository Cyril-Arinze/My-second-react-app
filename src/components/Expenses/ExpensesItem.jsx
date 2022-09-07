import React from 'react';
import "./ExpensesItem.css";
import ExpensesDate from './ExpensesDate';
import Card from '../UI/Card';

function ExpensesItem(props) {

    return (
        <li>
            <Card className='expense-item'>
                <ExpensesDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>
                        ${props.amount}
                    </div>
                </div>
            </Card>
        </li>
    );
}

export default ExpensesItem;