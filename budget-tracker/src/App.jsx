import {Route, Switch} from 'react-router-dom'
import TransactionForm from './pages/TransactionForm'
import TransactionList from './pages/TransactionList'
import FinancialTips from './pages/FinancialTips'
import MainNavigation from './components/layout/MainNavigation'

export default function App() {
  return (
    <div>
      <MainNavigation/>
      <Switch>
      <Route path='/' exact>
        <FinancialTips/>
      </Route>
      <Route path='/transactionForm'>
        <TransactionForm />
      </Route>
      <Route path='/transactionList'>
        <TransactionList />
      </Route>
      </Switch>
      
    </div>
  )
}
