import './NewExpense.css';
import ExpenseForm from './Form';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enterdExpenseData) => {
        const expenseData = {
            ...enterdExpenseData,
            id: Math.random().toStringe(),
        };
        props.onAddExpense(expenseData);
    };

    return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
    );
};

export default NewExpense;