import React from 'react';
interface Transaction {
  id: number;
  merchant: string;
  amount: number;
  date: string;
}
interface TransactionListProps {
  transactions: Transaction[];
}
export function TransactionList({
  transactions
}: TransactionListProps) {
  return <ul className="space-y-3">
      {transactions.map(transaction => <li key={transaction.id} className="bg-card text-card-foreground rounded-lg p-4 border border-border shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">{transaction.merchant}</p>
              <p className="text-sm text-muted-foreground">
                {transaction.date}
              </p>
            </div>
            <p className="font-semibold">${transaction.amount.toFixed(2)}</p>
          </div>
        </li>)}
    </ul>;
}