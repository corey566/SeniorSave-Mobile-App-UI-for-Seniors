import React from 'react';
interface SpendingCardProps {
  amount: number;
}
export function SpendingCard({
  amount
}: SpendingCardProps) {
  return <div className="bg-card text-card-foreground rounded-lg p-6 shadow-sm border border-border">
      <h3 className="text-xl font-medium mb-2">Today's Spending</h3>
      <p className="text-3xl font-bold">${amount.toFixed(2)}</p>
    </div>;
}