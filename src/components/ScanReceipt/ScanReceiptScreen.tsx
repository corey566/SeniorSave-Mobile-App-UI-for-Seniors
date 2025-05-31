import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import { ResultPreview } from './ResultPreview';
export function ScanReceiptScreen() {
  const [scanCompleted, setScanCompleted] = useState(false);
  const [previewData, setPreviewData] = useState(null);
  const handleScan = () => {
    // Simulate scanning a receipt and OCR processing
    setTimeout(() => {
      setPreviewData({
        merchant: 'Grocery Store',
        date: 'Aug 15, 2023',
        total: 42.75,
        items: [{
          name: 'Milk',
          price: 3.99
        }, {
          name: 'Bread',
          price: 2.49
        }, {
          name: 'Eggs',
          price: 5.99
        }, {
          name: 'Apples',
          price: 4.5
        }, {
          name: 'Chicken',
          price: 12.99
        }, {
          name: 'Cereal',
          price: 3.99
        }, {
          name: 'Juice',
          price: 4.29
        }, {
          name: 'Coffee',
          price: 8.99
        }]
      });
      setScanCompleted(true);
    }, 1500);
  };
  const handleReset = () => {
    setScanCompleted(false);
    setPreviewData(null);
  };
  return <div className="py-6 space-y-6">
      <header>
        <h1 className="text-3xl font-bold mb-6">Scan Receipt</h1>
      </header>
      {!scanCompleted ? <div className="flex flex-col items-center space-y-6">
          <div className="w-full aspect-[3/4] bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
            <div className="text-center p-6">
              <Camera size={64} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-xl font-medium">Position receipt in frame</p>
              <p className="text-muted-foreground">
                Make sure the receipt is well-lit and flat
              </p>
            </div>
          </div>
          <button onClick={handleScan} className="w-full py-4 bg-primary text-primary-foreground rounded-lg text-xl font-medium">
            Take Photo
          </button>
        </div> : <ResultPreview data={previewData} onReset={handleReset} />}
    </div>;
}