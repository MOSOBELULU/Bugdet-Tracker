import Firebase from "../components/Firebase/Firebase"
import classes from './FinancialTips.module.css'
export default function FinancialTips() {
  return (
    <div className={classes.financialTips}>
      <h1 className={classes.title}>Tips</h1>
      <Firebase />
    </div>
  )
}

