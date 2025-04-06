import React, { useState } from 'react';
import './Transactions.css';

const Transactions = () => {
  const [statuses, setStatuses] = useState({
    1: 'report', // Default status for transaction 1
    2: 'report', // Default status for transaction 2
    3: 'report', // Default status for transaction 3
  });

  const transactions = [
    { id: 1, date: '2023-04-01', amount: 125.99, status: 'Completed' },
    { id: 2, date: '2023-03-25', amount: 89.50, status: 'Completed' },
    { id: 3, date: '2023-03-18', amount: 220.00, status: 'Processing' },
  ];

  const handleStatusChange = (id, event) => {
    const newStatus = event.target.value;
    setStatuses({ ...statuses, [id]: newStatus });

    // Show alert based on the selected status
    if (newStatus === 'working') {
      alert('Thank you for using our service!');
    } else if (newStatus === 'not-working') {
      alert('Sorry for the inconvenience. We will issue your refund once we check your ticket soon.');
    }
  };

  return (
    <div className="transactions-page">
      <h1 className="page-title">Your Transactions</h1>
      <div className="transactions-container">
        {transactions.length > 0 ? (
          <div className="transactions-list">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="transaction-item">
                <div className="transaction-date">
                  {new Date(transaction.date).toLocaleDateString()}
                </div>
                <div className="transaction-amount">
                  ${transaction.amount.toFixed(2)}
                </div>
                <div
                  className={`transaction-status ${transaction.status.toLowerCase()}`}
                >
                  {transaction.status}
                </div>
                {/* Dropdown Button for Each Transaction */}
                <div className="status-dropdown">
                  <select
                    value={statuses[transaction.id] || 'report'}
                    onChange={(event) => handleStatusChange(transaction.id, event)}
                    className={`status-button ${statuses[transaction.id]}`}
                  >
                    <option value="report" disabled>
                      Report Working
                    </option>
                    <option value="working">Working</option>
                    <option value="not-working">Not Working</option>
                  </select>
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
