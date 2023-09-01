import './ExpenseForm.css'

function ExpenseForm() {
    return <form>
        <div className='new-expense_controls'>
            <div className='new-expense_control'>
                <label>Title</label>
                <input type='text' />
            </div>
            <div className='new-expense_control'>
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" />
            </div>
            <div className='new-expense_control'>
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2022-12-31" />
            </div>
        </div>
        <button type='submit'>Add EXpense</button>
    </form>
}

export default ExpenseForm