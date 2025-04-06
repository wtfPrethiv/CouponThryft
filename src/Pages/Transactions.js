import React from 'react';
import './Transactions.css';

const Transactions = () => {
  
  const transactions = [
    { id: 1, date: '2023-04-01', amount: 125.99, status: 'Completed' },
    { id: 2, date: '2023-03-25', amount: 89.50, status: 'Completed' },
    { id: 3, date: '2023-03-18', amount: 220.00, status: 'Processing' },
  ];

  return (
    <div className="transactions-page">
      <h1 className="page-title">Your Transactions</h1>
      <div className="transactions-container">
        {transactions.length > 0 ? (
          <div className="transactions-list">
            {transactions.map(transaction => (
              <div key={transaction.id} className="transaction-item">
                <div className="transaction-date">
                  {new Date(transaction.date).toLocaleDateString()}
                </div>
                <div className="transaction-amount">
                  ${transaction.amount.toFixed(2)}
                </div>
                <div className={`transaction-status ${transaction.status.toLowerCase()}`}>
                  {transaction.status}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>No transactions found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Transactions;
