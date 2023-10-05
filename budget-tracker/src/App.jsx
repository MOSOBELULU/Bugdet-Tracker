import {Route, Switch} from 'react-router-dom'
import TransactionForm from './pages/TransactionForm'
import TransactionList from './pages/TransactionList'
import FinancialTips from './pages/FinancialTips'
import MainNavigation from './components/layout/MainNavigation'
import { useState } from 'react'

// const transactionData = [
//   { id: 1, description: 'Income 1', amount: 100, type: 'income' },
//   { id: 2, description: 'Expense 1', amount: 50, type: 'expense' },
 
// ];

export default function App() {

  // Create state to store the transactions
  const [transactions, setTransactions] = useState([]);

  // Function to add a new transaction to the state
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  }
  return (
    <div>
      <MainNavigation/>
      <Switch>
      <Route path='/' exact>
        <FinancialTips/>
      </Route>
      <Route path='/transactionForm'>
        <TransactionForm addTransaction={addTransaction}/>
      </Route>
      <Route path='/transactionList'>
        <TransactionList transactions={transactions} />
      </Route>
      </Switch>
      
    </div>
  )
}
