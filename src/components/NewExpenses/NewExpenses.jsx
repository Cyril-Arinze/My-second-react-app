import React from 'react';
import Card from '../UI/Card';
import ExpensesForm from './ExpensesForm';
import "./NewExpenses.css"

function NewExpenses(props) {
    return (
        <Card className="new-expense">
            <ExpensesForm onAddExpenses={props.onAddNewExpenses} />
        </Card>
    );
}

export default NewExpenses;