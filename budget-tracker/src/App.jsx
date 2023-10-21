import {Route, Switch} from 'react-router-dom'
// import TransactionForm from './pages/TransactionForm'
// import TransactionList from './components/TransactionList'
import FinancialTips from './pages/FinancialTips'
import Transactions from './pages/Transactions'
import MainNavigation from './components/layout/MainNavigation'
import Footer from './components/Footer'


// const transactionData = [
//   { id: 1, description: 'Income 1', amount: 100, type: 'income' },
//   { id: 2, description: 'Expense 1', amount: 50, type: 'expense' },
 
// ];

export default function App() {

  
  return (
    <div>
      <MainNavigation/>
      <Switch>
      <Route path='/' exact>
        <FinancialTips/>
      </Route>
      <Route path='/transactions'>
        <Transactions />
      </Route>
      {/* <Route path='/transactionForm'>
        <TransactionForm addTransaction={addTransaction}/>
      </Route>
      <Route path='/transactionList'>
        <TransactionList transactions={transactions} />
      </Route> */}
      </Switch>
      <Footer />
      
    </div>
  )
}
