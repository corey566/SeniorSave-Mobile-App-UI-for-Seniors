import React from 'react';
interface BudgetProgressBarProps {
  percentage: number;
}
export function BudgetProgressBar({
  percentage
}: BudgetProgressBarProps) {
  // Determine color based on percentage
  let color = 'bg-green-500';
  if (percentage > 90) {
    color = 'bg-red-500';
  } else if (percentage > 75) {
    color = 'bg-yellow-500';
  }
  return <div className="space-y-2">
      <div className="flex justify-between">
        <span className="font-medium">Monthly Budget</span>
        <span className="font-medium">{percentage}%</span>
      </div>
      <div className="h-6 w-full bg-secondary rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full`} style={{
        width: `${percentage}%`
      }} role="progressbar" aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100}></div>
      </div>
    </div>;
}