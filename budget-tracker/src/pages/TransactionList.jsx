/*eslint-disable*/


export default function TransactionList  ({ transactions = [] }) {
    const incomeTransactions = transactions.filter(transaction => transaction.type === 'income');
    const expenseTransactions = transactions.filter(transaction => transaction.type === 'expense');
    
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
        <h2>Transaction List</h2>
        {transactions.length > 0 ? (
          <div>
            <table border="2" className="table">
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
  
  
  
