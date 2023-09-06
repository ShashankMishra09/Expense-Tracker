import './NewExpenses.css'
import ExpenseForm from './ExpenseForm'

function NewExpenses(props){
    const saveExpenseHandeler=(newExpenseData)=>{
        const expenseData = {
            ...newExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }


    return <div className = "new-expense">
        <ExpenseForm onSaveExpense={saveExpenseHandeler} />
    </div>
}

export default NewExpenses