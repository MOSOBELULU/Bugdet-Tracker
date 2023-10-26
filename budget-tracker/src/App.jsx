import {Route, Switch} from 'react-router-dom'
import FinancialTips from './pages/FinancialTips'
import Transactions from './pages/Transactions'
import MainNavigation from './components/layout/MainNavigation'
import Footer from './components/Footer'

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
      
      </Switch>
      <Footer />
      
    </div>
  )
}
