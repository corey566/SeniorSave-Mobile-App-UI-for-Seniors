import React from 'react';
import { SpendingCard } from './SpendingCard';
import { BudgetProgressBar } from './BudgetProgressBar';
import { TransactionList } from './TransactionList';
export function DashboardScreen() {
  // Mock data
  const todaySpending = 42.75;
  const budgetProgress = 65; // percentage
  const transactions = [{
    id: 1,
    merchant: 'Grocery Store',
    amount: 32.5,
    date: 'Today, 2:30 PM'
  }, {
    id: 2,
    merchant: 'Pharmacy',
    amount: 10.25,
    date: 'Today, 11:15 AM'
  }, {
    id: 3,
    merchant: 'Coffee Shop',
    amount: 4.75,
    date: 'Yesterday, 9:20 AM'
  }];
  return <div className="py-6 space-y-6">
      <header>
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      </header>
      <SpendingCard amount={todaySpending} />
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Budget Progress</h2>
        <BudgetProgressBar percentage={budgetProgress} />
      </section>
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Recent Transactions</h2>
        <TransactionList transactions={transactions} />
      </section>
    </div>;
}