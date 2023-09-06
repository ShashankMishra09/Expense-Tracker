import React, {useState} from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {
   const[newTitle, setNewTitle] = useState('')
   const[newAmount, setNewAmount] = useState('')
   const[newDate, setNewDate] = useState('')


    const titleChangeHandler = (event)=>{
        setNewTitle(event.target.value)
    }

    const amountChangeHandler = (event)=>{
        setNewAmount(event.target.value)
    }

    const dateChangeHandler = (event)=>{
        setNewDate(event.target.value)
    }

    const submitHandler = (event)=>{
        event.preventDefault();

        const expenseData ={
            title: newTitle,
            amount: newAmount,
            date: new Date(newDate)
        }
        props.onSaveExpense();
        setNewTitle('');
        setNewAmount('');
        setNewDate('');
    }

    return <form onSubmit={submitHandler}>
        <div className='new-expenses'>
            <div className='new-expensed'>
                <label>Title</label>
                <input type='text' value={newTitle} onChange={titleChangeHandler} />
            </div>
            <div className='new-expensed'>
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" value={newAmount} onChange={amountChangeHandler}  />
            </div>
            <div className='new-expensed'>
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2023-12-31" value={newDate} onChange={dateChangeHandler}  />
            </div>
        </div>
        <button type='submit'>Add EXpense</button>
    </form>
}

export default ExpenseForm