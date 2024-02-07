import {Link} from 'react-router-dom'
import classes from './MainNavigation.module.css'

export default function MainNavigation() {
  return (
    <div>
      <header className={classes.header}>
        
          <Link to='/transactions'>
            <img src='../images/budget-logo.png' alt='logo' className={classes.logo}/>
            </Link>
      
        {/* <nav>
            <ul>
                <li>
                    <Link to='/transactions'>Transactions</Link>
                </li>
            </ul>
        </nav> */}
      </header>
    </div>
  )
}
