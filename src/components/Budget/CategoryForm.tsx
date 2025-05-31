import React, { useEffect, useState } from 'react';
interface Category {
  id?: number;
  name: string;
  budget: number;
  spent: number;
}
interface CategoryFormProps {
  category: Category | null;
  onSave: (category: Category) => void;
  onCancel: () => void;
}
export function CategoryForm({
  category,
  onSave,
  onCancel
}: CategoryFormProps) {
  const [name, setName] = useState('');
  const [budget, setBudget] = useState('');
  const [spent, setSpent] = useState('0');
  useEffect(() => {
    if (category) {
      setName(category.name);
      setBudget(category.budget.toString());
      setSpent(category.spent.toString());
    }
  }, [category]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCategory = {
      id: category?.id || undefined,
      name,
      budget: parseFloat(budget),
      spent: parseFloat(spent)
    };
    onSave(newCategory);
  };
  return <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-semibold">
        {category ? 'Edit Category' : 'Add Category'}
      </h2>
      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-lg font-medium block">
            Category Name
          </label>
          <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} className="w-full p-3 text-lg border border-input rounded-lg bg-background" placeholder="e.g., Groceries" required />
        </div>
        <div className="space-y-2">
          <label htmlFor="budget" className="text-lg font-medium block">
            Monthly Budget ($)
          </label>
          <input id="budget" type="number" value={budget} onChange={e => setBudget(e.target.value)} className="w-full p-3 text-lg border border-input rounded-lg bg-background" placeholder="e.g., 400" min="0" step="0.01" required />
        </div>
        {category && <div className="space-y-2">
            <label htmlFor="spent" className="text-lg font-medium block">
              Amount Spent ($)
            </label>
            <input id="spent" type="number" value={spent} onChange={e => setSpent(e.target.value)} className="w-full p-3 text-lg border border-input rounded-lg bg-background" placeholder="e.g., 250" min="0" step="0.01" required />
          </div>}
      </div>
      <div className="flex space-x-4">
        <button type="button" onClick={onCancel} className="flex-1 py-4 bg-secondary text-secondary-foreground rounded-lg text-xl font-medium">
          Cancel
        </button>
        <button type="submit" className="flex-1 py-4 bg-primary text-primary-foreground rounded-lg text-xl font-medium">
          Save
        </button>
      </div>
    </form>;
}