import {Link} from 'react-router-dom'
import classes from './MainNavigation.module.css'

export default function MainNavigation() {
  return (
    <div>
      <header className={classes.header}>
        <div>
            <img src='../images/budget-logo.png' alt='logo' className={classes.logo}/>
        </div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Financial Tips</Link>
                </li>
                <li>
                    <Link to='/transactionList'>Transaction List</Link>
                </li>
                <li>
                    <Link to='/transactionForm'>Transaction Form</Link>
                </li>
            </ul>
        </nav>
      </header>
    </div>
  )
}
