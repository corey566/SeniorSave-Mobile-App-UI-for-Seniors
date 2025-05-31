import React, { useEffect, useState } from 'react';
import { BottomNavigation } from './components/Layout/BottomNavigation';
import { DashboardScreen } from './components/Dashboard/DashboardScreen';
import { ScanReceiptScreen } from './components/ScanReceipt/ScanReceiptScreen';
import { BudgetScreen } from './components/Budget/BudgetScreen';
import { SettingsScreen } from './components/Settings/SettingsScreen';
import { OnboardingScreen } from './components/Onboarding/OnboardingScreen';
import { VoiceAssistantButton } from './components/shared/VoiceAssistantButton';
export function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [fontSize, setFontSize] = useState('medium'); // small, medium, large, x-large
  const [darkMode, setDarkMode] = useState(false);
  const [voiceAssistantEnabled, setVoiceAssistantEnabled] = useState(true);
  const [familyViewMode, setFamilyViewMode] = useState(false);
  useEffect(() => {
    // Apply dark mode class to root element
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  // Apply font size to root element
  useEffect(() => {
    document.documentElement.dataset.fontSize = fontSize;
    const fontSizeClasses = {
      small: 'text-base',
      medium: 'text-lg',
      large: 'text-xl',
      'x-large': 'text-2xl'
    };
    document.body.className = fontSizeClasses[fontSize] || 'text-lg';
  }, [fontSize]);
  const completeOnboarding = () => {
    setShowOnboarding(false);
  };
  const renderActiveScreen = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardScreen />;
      case 'scan':
        return <ScanReceiptScreen />;
      case 'budget':
        return <BudgetScreen />;
      case 'settings':
        return <SettingsScreen fontSize={fontSize} setFontSize={setFontSize} darkMode={darkMode} setDarkMode={setDarkMode} voiceAssistantEnabled={voiceAssistantEnabled} setVoiceAssistantEnabled={setVoiceAssistantEnabled} familyViewMode={familyViewMode} setFamilyViewMode={setFamilyViewMode} />;
      default:
        return <DashboardScreen />;
    }
  };
  if (showOnboarding) {
    return <OnboardingScreen onComplete={completeOnboarding} />;
  }
  return <div className="w-full min-h-screen bg-background text-foreground">
      <div className="max-w-md mx-auto h-screen flex flex-col relative">
        <main className="flex-1 overflow-y-auto pb-20 px-4">
          {renderActiveScreen()}
        </main>
        {voiceAssistantEnabled && <VoiceAssistantButton className="fixed right-4 bottom-20 z-10" />}
        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>;
}