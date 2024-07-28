import React, { useState } from 'react';
import './BudgetTracker.css';  // Ensure this path is correct based on your project structure

const BudgetTracker = () => {
    const [transactions, setTransactions] = useState([]);
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    const addTransaction = () => {
        if (description && amount) {
            setTransactions([...transactions, { description, amount: parseFloat(amount) }]);
            setDescription('');
            setAmount('');
        }
    };

    const clearTransactions = () => {
        setTransactions([]);
    };

    const getTotal = () => {
        return transactions.reduce((total, transaction) => total + transaction.amount, 0);
    };

    return (
        <div className="budget-tracker">
            <h1>Budget Tracker</h1>
            <div className="form">
                <input
                    type="text"
                    value={description}
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="number"
                    value={amount}
                    placeholder="Amount"
                    onChange={(e) => setAmount(e.target.value)}
                />
                <button onClick={addTransaction}>Add Transaction</button>
                <button onClick={clearTransactions}>Clear Transactions</button>
            </div>
            <div className="transactions">
                <h2>Transactions</h2>
                <ul>
                    {transactions.map((transaction, index) => (
                        <li key={index}>
                            <span>{transaction.description}</span>
                            <span>${transaction.amount.toFixed(2)}</span>
                        </li>
                    ))}
                </ul>
                <h2>Total: ${getTotal().toFixed(2)}</h2>
            </div>
        </div>
    );
};

export default BudgetTracker;
