import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
	const [showForm, setShowForm] = useState(true);

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
	};

	const showFormHandler = () => {
		showForm === true ? setShowForm(false) : setShowForm(true);
	};

	if (showForm === true) {
		return (
			<div className='new-expense'>
				<ExpenseForm isShown={showFormHandler} onSaveExpenseData={saveExpenseDataHandler} />
			</div>
		);
	}

	return (
		<div className='new-expense'>
			<button type='submit' onClick={showFormHandler}>
				Add New Expense
			</button>
		</div>
	);
};

export default NewExpense;
