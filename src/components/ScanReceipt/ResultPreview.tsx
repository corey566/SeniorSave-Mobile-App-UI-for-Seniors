import React from 'react';
interface Item {
  name: string;
  price: number;
}
interface ReceiptData {
  merchant: string;
  date: string;
  total: number;
  items: Item[];
}
interface ResultPreviewProps {
  data: ReceiptData | null;
  onReset: () => void;
}
export function ResultPreview({
  data,
  onReset
}: ResultPreviewProps) {
  if (!data) return null;
  return <div className="space-y-6">
      <div className="bg-card text-card-foreground rounded-lg p-6 shadow-sm border border-border space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold">Merchant:</h3>
            <p className="text-xl">{data.merchant}</p>
          </div>
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold">Date:</h3>
            <p className="text-xl">{data.date}</p>
          </div>
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold">Total:</h3>
            <p className="text-xl font-bold">${data.total.toFixed(2)}</p>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Items:</h3>
          <ul className="space-y-2">
            {data.items.map((item, index) => <li key={index} className="flex justify-between border-b border-border pb-2">
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
              </li>)}
          </ul>
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-center text-muted-foreground">
          Need to make corrections? Tap on any item to edit.
        </p>
        <div className="flex space-x-4">
          <button onClick={onReset} className="flex-1 py-4 bg-secondary text-secondary-foreground rounded-lg text-xl font-medium">
            Scan Again
          </button>
          <button className="flex-1 py-4 bg-primary text-primary-foreground rounded-lg text-xl font-medium">
            Save Receipt
          </button>
        </div>
      </div>
    </div>;
}