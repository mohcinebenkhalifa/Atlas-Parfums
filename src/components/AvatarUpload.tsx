
import React, { useRef } from 'react';
import { Camera, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useStorage } from '@/hooks/useStorage';
import { useAuth } from '@/hooks/useAuth';

interface AvatarUploadProps {
  avatarUrl?: string;
  onAvatarChange?: (url: string) => void;
  size?: 'sm' | 'md' | 'lg';
}

const AvatarUpload: React.FC<AvatarUploadProps> = ({
  avatarUrl,
  onAvatarChange,
  size = 'md',
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { uploadFile, uploading } = useStorage();
  const { user } = useAuth();

  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32',
  };

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !user) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      console.error('Le fichier doit être une image');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      console.error('Le fichier ne doit pas dépasser 5MB');
      return;
    }

    console.log('Uploading file:', file.name, 'Size:', file.size);
    
    const url = await uploadFile(file, 'avatars', user.id);
    console.log('Upload result:', url);
    
    if (url && onAvatarChange) {
      onAvatarChange(url);
    }
  };

  const handleClick = () => {
    if (!uploading) {
      fileInputRef.current?.click();
    }
  };

  return (
    <div className="relative group">
      <Avatar className={`${sizeClasses[size]} cursor-pointer border-2 border-moroccan-gold/20 hover:border-moroccan-gold transition-colors`} onClick={handleClick}>
        <AvatarImage src={avatarUrl} alt="Avatar" />
        <AvatarFallback className="bg-moroccan-gold/10">
          <User className="h-1/2 w-1/2 text-moroccan-burgundy" />
        </AvatarFallback>
      </Avatar>
      
      <Button
        size="sm"
        variant="secondary"
        className="absolute bottom-0 right-0 rounded-full p-1 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity bg-moroccan-gold hover:bg-moroccan-gold/80"
        onClick={handleClick}
        disabled={uploading}
      >
        <Camera className="h-3 w-3 text-white" />
      </Button>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />
      
      {uploading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default AvatarUpload;
