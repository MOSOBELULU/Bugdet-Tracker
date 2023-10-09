/*eslint-disable*/
import classes from './TransactionList.module.css'
import { useState, useEffect } from 'react';


export default function TransactionList  ({ 
  transactions = [] }) {
    const [typedTitle, setTypedTitle] = useState(''); 
    const originalTitle = "UR FINANCIAL LEDGER"; 

    const incomeTransactions = transactions.filter(transaction => transaction.type === 'income');
    const expenseTransactions = transactions.filter(transaction => transaction.type === 'expense');

    // A function to simulate the typing effect
  const typeTitle = (title) => {
    let index = 0;
    const titleInterval = setInterval(() => {
      if (index <= title.length) {
        setTypedTitle(title.substring(0, index));
        index++;
      } else {
        clearInterval(titleInterval);
      }
    }, 100); 
  };

  useEffect(() => {
    typeTitle(originalTitle);
  }, []);
    
    const calculateTotal = (type) => {
      return transactions
        .filter(transaction => transaction.type === type)
        .reduce((total, transaction) => total + parseFloat(transaction.amount), 0);
    };
  
  
    const totalIncome = calculateTotal('income');
    const totalExpenses = calculateTotal('expense');
    const balance = totalIncome - totalExpenses;
    
  
    
    return (
      <div>
        <h2 className={classes.headerTitle}>{typedTitle}</h2>
        {transactions.length > 0 ? (
          <div>
            <table border="2" className={classes.table}>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Amount (R)</th>
                </tr>
              </thead>
              <tbody>
                {incomeTransactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>{transaction.description}</td>
                    <td>{transaction.amount}</td>
                  </tr>
                ))}
                <tr>
                  <td><strong>Total Income</strong></td>
                  <td>{totalIncome}</td>
                </tr>
                {expenseTransactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>{transaction.description}</td>
                    <td>{transaction.amount}</td>
                  </tr>
                ))}
                <tr>
                  <td><strong>Total Expenses</strong></td>
                  <td>{totalExpenses}</td>
                </tr>
                <tr>
                  <td><strong>Balance</strong></td>
                  <td>{balance}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <p>No transactions yet.</p>
        )}
      </div>
    );
  };
  
  
  
