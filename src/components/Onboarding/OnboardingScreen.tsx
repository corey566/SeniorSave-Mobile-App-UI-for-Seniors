import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, Wallet, Receipt, PieChart, Mic } from 'lucide-react';
interface OnboardingScreenProps {
  onComplete: () => void;
}
export function OnboardingScreen({
  onComplete
}: OnboardingScreenProps) {
  const [step, setStep] = useState(0);
  const steps = [{
    title: 'Welcome to SeniorSave',
    description: 'Your simple budget and expense tracker designed with you in mind.',
    icon: <Wallet size={120} className="text-primary" />,
    bgColor: 'bg-primary/10'
  }, {
    title: 'Track Your Spending',
    description: 'Scan receipts or manually enter expenses to keep track of where your money goes.',
    icon: <Receipt size={120} className="text-success" />,
    bgColor: 'bg-success/10'
  }, {
    title: 'Manage Your Budget',
    description: "Set budgets for different categories and see how well you're doing.",
    icon: <PieChart size={120} className="text-warning" />,
    bgColor: 'bg-warning/10'
  }, {
    title: 'Voice Assistant',
    description: 'Need help? Just tap the microphone button on any screen to use the voice assistant.',
    icon: <Mic size={120} className="text-info" />,
    bgColor: 'bg-info/10'
  }];
  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };
  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };
  const currentStep = steps[step];
  const isLastStep = step === steps.length - 1;
  return <div className="h-screen flex flex-col bg-background text-foreground">
      <div className="flex-1 flex flex-col">
        <div className={`h-1/2 flex items-center justify-center ${currentStep.bgColor}`}>
          <div className="transform transition-all duration-500 hover:scale-110">
            {currentStep.icon}
          </div>
        </div>
        <div className="flex-1 p-6 flex flex-col">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4 text-primary">
              {currentStep.title}
            </h1>
            <p className="text-xl text-foreground/80">
              {currentStep.description}
            </p>
          </div>
          <div className="py-4">
            <div className="flex justify-center space-x-2 mb-6">
              {steps.map((_, i) => <div key={i} className={`h-3 rounded-full transition-all duration-300 ${i === step ? 'w-8 bg-primary' : 'w-3 bg-secondary/30'}`}></div>)}
            </div>
            <div className="flex space-x-4">
              {step > 0 && <button onClick={handlePrevious} className="flex-1 py-4 flex items-center justify-center space-x-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-lg text-xl font-medium transition-colors">
                  <ChevronLeft size={24} />
                  <span>Back</span>
                </button>}
              <button onClick={handleNext} className={`flex-1 py-4 flex items-center justify-center space-x-2 ${isLastStep ? 'bg-success hover:bg-success/90' : 'bg-primary hover:bg-primary/90'} text-primary-foreground rounded-lg text-xl font-medium transition-colors`}>
                {isLastStep ? <>
                    <span>Get Started</span>
                    <Check size={24} />
                  </> : <>
                    <span>Next</span>
                    <ChevronRight size={24} />
                  </>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
}