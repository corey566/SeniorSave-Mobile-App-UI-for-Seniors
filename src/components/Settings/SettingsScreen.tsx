import React from 'react';
interface SettingsScreenProps {
  fontSize: string;
  setFontSize: (size: string) => void;
  darkMode: boolean;
  setDarkMode: (enabled: boolean) => void;
  voiceAssistantEnabled: boolean;
  setVoiceAssistantEnabled: (enabled: boolean) => void;
  familyViewMode: boolean;
  setFamilyViewMode: (enabled: boolean) => void;
}
export function SettingsScreen({
  fontSize,
  setFontSize,
  darkMode,
  setDarkMode,
  voiceAssistantEnabled,
  setVoiceAssistantEnabled,
  familyViewMode,
  setFamilyViewMode
}: SettingsScreenProps) {
  return <div className="py-6 space-y-6">
      <header>
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
      </header>
      <section className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Font Size</h2>
          <div className="grid grid-cols-2 gap-3">
            {['small', 'medium', 'large', 'x-large'].map(size => <button key={size} onClick={() => setFontSize(size)} className={`p-4 border rounded-lg ${fontSize === size ? 'bg-primary text-primary-foreground border-primary' : 'bg-card text-card-foreground border-border'}`}>
                <span className={size === 'small' ? 'text-base' : size === 'medium' ? 'text-lg' : size === 'large' ? 'text-xl' : 'text-2xl'}>
                  {size.charAt(0).toUpperCase() + size.slice(1)}
                </span>
              </button>)}
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Display</h2>
          <div className="flex items-center justify-between p-4 bg-card rounded-lg border border-border">
            <span className="text-xl">Dark Mode</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} className="sr-only peer" />
              <div className="w-14 h-7 bg-secondary rounded-full peer peer-checked:after:translate-x-7 peer-checked:bg-primary after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:rounded-full after:h-6 after:w-6 after:transition-all"></div>
            </label>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Accessibility</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-card rounded-lg border border-border">
              <span className="text-xl">Voice Assistant</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={voiceAssistantEnabled} onChange={() => setVoiceAssistantEnabled(!voiceAssistantEnabled)} className="sr-only peer" />
                <div className="w-14 h-7 bg-secondary rounded-full peer peer-checked:after:translate-x-7 peer-checked:bg-primary after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:rounded-full after:h-6 after:w-6 after:transition-all"></div>
              </label>
            </div>
            <div className="flex items-center justify-between p-4 bg-card rounded-lg border border-border">
              <span className="text-xl">Family View Mode</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={familyViewMode} onChange={() => setFamilyViewMode(!familyViewMode)} className="sr-only peer" />
                <div className="w-14 h-7 bg-secondary rounded-full peer peer-checked:after:translate-x-7 peer-checked:bg-primary after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:rounded-full after:h-6 after:w-6 after:transition-all"></div>
              </label>
            </div>
          </div>
        </div>
      </section>
    </div>;
}