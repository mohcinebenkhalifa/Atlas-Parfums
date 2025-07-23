
import React from 'react';
import { Link } from 'react-router-dom';
import { LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';

const AuthButton = () => {
  const { user, signOut, loading } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Déconnexion réussie",
        description: "À bientôt sur Parfum Maroc !",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Erreur lors de la déconnexion",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <Button variant="ghost" size="sm" disabled>
        <User className="h-5 w-5" />
      </Button>
    );
  }

  if (user) {
    return (
      <div className="flex items-center space-x-2">
        <span className="text-sm text-moroccan-burgundy hidden sm:inline">
          {user.email}
        </span>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleSignOut}
          className="text-moroccan-burgundy hover:bg-moroccan-gold/10"
        >
          <LogOut className="h-5 w-5" />
          <span className="ml-1 hidden sm:inline">Déconnexion</span>
        </Button>
      </div>
    );
  }

  return (
    <Link to="/auth">
      <Button 
        variant="ghost" 
        size="sm"
        className="text-moroccan-burgundy hover:bg-moroccan-gold/10"
      >
        <User className="h-5 w-5" />
        <span className="ml-1 hidden sm:inline">Connexion</span>
      </Button>
    </Link>
  );
};

export default AuthButton;
