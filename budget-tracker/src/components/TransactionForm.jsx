/*eslint-disable*/
//Renders a form for users to input income or expense transactions. It should have fields for amount, description, and type (income/expense).
import { useState, useEffect
 } from "react";
import classes from './TransactionForm.module.css'

export default function TransactionForm({ addTransaction }) {
  const [transaction, setTransaction] = useState({ title: '', amount: 0 });
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState("income");
  const [resetForm, setResetForm] = useState(false); 
  
  const databaseURL = 'https://budget-tracker-ba2ae-default-rtdb.firebaseio.com'; 
 

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new transaction object
    const newTransaction = {
      amount: parseFloat(amount),
      description,
      type,
    };

    // Call the addTransaction function to pass the data to the parent component
    addTransaction(newTransaction);

    // Set resetForm to true to trigger form reset
    setResetForm(true);
  }

  // Reset the form fields when resetForm is true
  if (resetForm) {
    setAmount('');
    setDescription('');
    setResetForm(false); // Reset the resetForm state
  }


  return (
    <div >
      <form className={classes.formContainer} onSubmit={handleSubmit}>
        <label className={classes.label}> Amount:
        <input 
        type="number" 
        required 
        value={amount} 
        onChange={(event) => setAmount(event.target.value)}></input>
        </label>
        <label> Description:
            <input type="text" required value={description} onChange={(event) => setDescription(event.target.value)}></input>
        </label>
        <label className={classes.label}>
    <input
      type="radio"
      value="income"
      checked={type === 'income'}
      onChange={(e) => setType(e.target.value)}
    />
    Income
  </label>

  <label className={classes.label}>
    <input
      type="radio"
      value="expense"
      checked={type === 'expense'}
      onChange={(e) => setType(e.target.value)}
    />
    Expense
  </label>
        <button type="submit" className={classes.btn}>Add Transaction</button>
      </form>
    </div>
  )
}


