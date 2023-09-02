/*eslint-disable*/
//Renders a form for users to input income or expense transactions. It should have fields for amount, description, and type (income/expense).
import { useState } from "react"

export default function TransactionForm({addTransaction}) {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] =useState("income");

    //function to hanlde submit button
    const handleSubmit = (event) => {
        event.preventDefault();
        addTransaction({amount, description, type});
        setAmount('');
        setDescription('')
    }

  return (
    <div >
      <form className="form-container" onSubmit={handleSubmit}>
        <label> Amount:
        <input 
        type="number" 
        required 
        value={amount} 
        onChange={(event) => setAmount(event.target.value)}></input>
        </label>
        <label> Description:
            <input type="text" required value={description} onChange={(event) => setDescription(event.target.value)}></input>
        </label>
        <label>
    <input
      type="radio"
      value="income"
      checked={type === 'income'}
      onChange={(e) => setType(e.target.value)}
    />
    Income
  </label>

  <label>
    <input
      type="radio"
      value="expense"
      checked={type === 'expense'}
      onChange={(e) => setType(e.target.value)}
    />
    Expense
  </label>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  )
}


