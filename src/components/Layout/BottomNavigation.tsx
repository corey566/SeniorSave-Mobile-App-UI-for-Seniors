import React from 'react';
import { Home, Camera, PieChart, Settings } from 'lucide-react';
interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}
export function BottomNavigation({
  activeTab,
  onTabChange
}: BottomNavigationProps) {
  const tabs = [{
    id: 'dashboard',
    label: 'Dashboard',
    icon: <Home size={28} />
  }, {
    id: 'scan',
    label: 'Scan Receipt',
    icon: <Camera size={28} />
  }, {
    id: 'budget',
    label: 'Budget',
    icon: <PieChart size={28} />
  }, {
    id: 'settings',
    label: 'Settings',
    icon: <Settings size={28} />
  }];
  return <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border max-w-md mx-auto">
      <div className="flex justify-around items-center h-16">
        {tabs.map(tab => <button key={tab.id} onClick={() => onTabChange(tab.id)} className={`flex flex-col items-center justify-center w-full h-full min-h-[64px] min-w-[64px] ${activeTab === tab.id ? 'text-primary font-bold' : 'text-muted-foreground'}`} aria-label={tab.label} aria-selected={activeTab === tab.id}>
            <div className="mb-1">{tab.icon}</div>
            <span className="text-sm">{tab.label}</span>
          </button>)}
      </div>
    </nav>;
}