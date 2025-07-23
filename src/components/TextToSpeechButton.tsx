
import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTextToSpeech } from '@/hooks/useTextToSpeech';

interface TextToSpeechButtonProps {
  text: string;
  language?: string;
  size?: 'sm' | 'default' | 'lg';
  variant?: 'default' | 'ghost' | 'outline';
  className?: string;
}

const TextToSpeechButton: React.FC<TextToSpeechButtonProps> = ({
  text,
  language = 'fr-FR',
  size = 'sm',
  variant = 'ghost',
  className = ''
}) => {
  const { speak, stop, isSpeaking, isSupported } = useTextToSpeech();

  if (!isSupported) {
    return null;
  }

  const handleClick = () => {
    if (isSpeaking) {
      stop();
    } else {
      speak(text, language);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleClick}
      className={`${className} transition-colors`}
      title={isSpeaking ? 'Arrêter la lecture' : 'Écouter'}
    >
      {isSpeaking ? (
        <VolumeX className="h-4 w-4 text-moroccan-gold" />
      ) : (
        <Volume2 className="h-4 w-4 text-gray-600 hover:text-moroccan-gold" />
      )}
    </Button>
  );
};

export default TextToSpeechButton;
