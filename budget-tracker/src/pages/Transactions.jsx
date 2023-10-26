import { useState, useEffect } from 'react';
import classes from './transactions.module.css' 

import TransactionList from '../components/TransactionList';
import TransactionForm from '../components/TransactionForm';

 function Transactions() {
  const [typedTitle, setTypedTitle] = useState('');
  const originalTitle = "SMART MONEY💸 MANAGEMENT BEGINS HERE📍";
  

  
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
    }, 100); // Adjust typing speed here
  };

  useEffect(() => {
    typeTitle(originalTitle);
  }, []);



  // Create state to store the transactions
  const [transactions, setTransactions] = useState([]);

  // Function to add a new transaction to the state
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  }
return (
    
    <div className={classes.transactionsContainer}>
      <h1 className={`fadeIn ${typedTitle === originalTitle ? 'typed-title' : ''}`} style={{ textAlign: 'center', fontSize: '42px' }}>
        {typedTitle}
        </h1>
        <p style={{textAlign: 'center', fontSize: '20px'}}>Financial freedom begins with a well-planned budget.</p>
        <TransactionForm addTransaction={addTransaction} />
        <TransactionList transactions={transactions} />
        </div>
   
)
}
    
export default Transactions;