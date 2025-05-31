import React, { useState } from 'react';
import { CategoryList } from './CategoryList';
import { CategoryForm } from './CategoryForm';
export function BudgetScreen() {
  const [showForm, setShowForm] = useState(false);
  const [categories, setCategories] = useState([{
    id: 1,
    name: 'Groceries',
    budget: 400,
    spent: 250
  }, {
    id: 2,
    name: 'Healthcare',
    budget: 200,
    spent: 75
  }, {
    id: 3,
    name: 'Dining',
    budget: 150,
    spent: 120
  }, {
    id: 4,
    name: 'Transportation',
    budget: 100,
    spent: 45
  }]);
  const [editingCategory, setEditingCategory] = useState(null);
  const handleAddCategory = () => {
    setEditingCategory(null);
    setShowForm(true);
  };
  const handleEditCategory = category => {
    setEditingCategory(category);
    setShowForm(true);
  };
  const handleSaveCategory = category => {
    if (editingCategory) {
      setCategories(categories.map(c => c.id === category.id ? category : c));
    } else {
      setCategories([...categories, {
        ...category,
        id: Date.now()
      }]);
    }
    setShowForm(false);
  };
  const handleCancel = () => {
    setShowForm(false);
  };
  // Calculate total budget and spending
  const totalBudget = categories.reduce((sum, cat) => sum + cat.budget, 0);
  const totalSpent = categories.reduce((sum, cat) => sum + cat.spent, 0);
  const percentSpent = totalBudget > 0 ? Math.round(totalSpent / totalBudget * 100) : 0;
  return <div className="py-6 space-y-6">
      <header>
        <h1 className="text-3xl font-bold mb-6">Budget</h1>
      </header>
      {!showForm ? <>
          <div className="bg-card text-card-foreground rounded-lg p-6 shadow-sm border border-border">
            <h2 className="text-2xl font-semibold mb-4">Monthly Overview</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-xl">Total Budget:</span>
                <span className="text-xl font-bold">${totalBudget}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xl">Total Spent:</span>
                <span className="text-xl font-bold">${totalSpent}</span>
              </div>
              <div className="h-6 w-full bg-secondary rounded-full overflow-hidden">
                <div className={`h-full ${percentSpent > 90 ? 'bg-red-500' : percentSpent > 75 ? 'bg-yellow-500' : 'bg-green-500'} rounded-full`} style={{
              width: `${percentSpent}%`
            }} role="progressbar" aria-valuenow={percentSpent} aria-valuemin={0} aria-valuemax={100}></div>
              </div>
              <div className="text-right">
                <span className="text-lg font-medium">
                  {percentSpent}% spent
                </span>
              </div>
            </div>
          </div>
          <section className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Categories</h2>
              <button onClick={handleAddCategory} className="py-2 px-4 bg-primary text-primary-foreground rounded-lg text-lg">
                Add Category
              </button>
            </div>
            <CategoryList categories={categories} onEditCategory={handleEditCategory} />
          </section>
        </> : <CategoryForm category={editingCategory} onSave={handleSaveCategory} onCancel={handleCancel} />}
    </div>;
}