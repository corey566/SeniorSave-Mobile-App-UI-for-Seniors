import React from 'react';
import { Edit2 } from 'lucide-react';
interface Category {
  id: number;
  name: string;
  budget: number;
  spent: number;
}
interface CategoryListProps {
  categories: Category[];
  onEditCategory: (category: Category) => void;
}
export function CategoryList({
  categories,
  onEditCategory
}: CategoryListProps) {
  return <ul className="space-y-4">
      {categories.map(category => {
      const percentSpent = Math.round(category.spent / category.budget * 100);
      let progressColor = 'bg-green-500';
      if (percentSpent > 90) {
        progressColor = 'bg-red-500';
      } else if (percentSpent > 75) {
        progressColor = 'bg-yellow-500';
      }
      return <li key={category.id} className="bg-card text-card-foreground rounded-lg p-4 border border-border shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-medium">{category.name}</h3>
              <button onClick={() => onEditCategory(category)} className="p-2 text-muted-foreground hover:text-foreground" aria-label={`Edit ${category.name} category`}>
                <Edit2 size={24} />
              </button>
            </div>
            <div className="flex justify-between mb-2">
              <span>${category.spent} spent</span>
              <span>${category.budget} budget</span>
            </div>
            <div className="h-5 w-full bg-secondary rounded-full overflow-hidden">
              <div className={`h-full ${progressColor} rounded-full`} style={{
            width: `${percentSpent}%`
          }} role="progressbar" aria-valuenow={percentSpent} aria-valuemin={0} aria-valuemax={100}></div>
            </div>
          </li>;
    })}
    </ul>;
}