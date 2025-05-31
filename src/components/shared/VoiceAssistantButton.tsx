import React, { useState } from 'react';
import { Mic } from 'lucide-react';
interface VoiceAssistantButtonProps {
  className?: string;
}
export function VoiceAssistantButton({
  className = ''
}: VoiceAssistantButtonProps) {
  const [isActive, setIsActive] = useState(false);
  const handleVoiceAssistant = () => {
    setIsActive(true);
    // Simulate voice assistant activation
    setTimeout(() => {
      alert('Voice Assistant: How can I help you today?');
      setIsActive(false);
    }, 1000);
  };
  return <button onClick={handleVoiceAssistant} className={`${className} flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground shadow-lg ${isActive ? 'animate-pulse' : ''}`} aria-label="Activate voice assistant">
      <Mic size={32} />
    </button>;
}