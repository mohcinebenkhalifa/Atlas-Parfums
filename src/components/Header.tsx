import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import AuthButton from './AuthButton';
import CartButton from './CartButton';
import NotificationCenter from './NotificationCenter';
import AvatarUpload from './AvatarUpload';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
import { useCart } from '@/hooks/useCart';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userProfile, setUserProfile] = useState<{ avatar_url?: string }>({});
  const { user, signOut } = useAuth();
  const { totalItems } = useCart();

  useEffect(() => {
    if (user) {
      loadUserProfile();
    }
  }, [user]);

  const loadUserProfile = async () => {
    if (!user) return;
    try {
      const response = await fetch(`http://localhost:8000/api/profile`, {
        credentials: 'include',
      });
      if (!response.ok) throw new Error("Erreur lors du chargement du profil");
      const data = await response.json();
      setUserProfile(data);
    } catch (error) {
      console.error('Erreur chargement profil:', error);
    }
  };

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

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/lovable-uploads/33f9d4e7-8979-44fa-bf04-272eab6a1772.png"
              alt="Benkhalifa Parfum Logo"
              className="h-12 w-12 object-cover rounded-full border-2 border-moroccan-gold shadow-md hover:shadow-lg transition-shadow"
            />
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-bold text-moroccan-burgundy">
                BENKHALIFA
              </h1>
              <span className="text-xs text-moroccan-gold font-medium -mt-1">
                Parfum
              </span>
            </div>
          </Link>

          {/* Spacer */}
          <div className="hidden md:block w-8"></div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-moroccan-burgundy hover:text-moroccan-gold transition-colors"
            >
              Accueil
            </Link>
            <Link 
              to="/catalog" 
              className="text-moroccan-burgundy hover:text-moroccan-gold transition-colors"
            >
              Catalogue
            </Link>
            <Link 
              to="/our-story" 
              className="text-moroccan-burgundy hover:text-moroccan-gold transition-colors"
            >
              Notre Histoire
            </Link>
            <Link 
              to="/contact" 
              className="text-moroccan-burgundy hover:text-moroccan-gold transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Rechercher un parfum..."
                className="pl-10 border-moroccan-gold/30 focus:border-moroccan-gold"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <span className="relative">
              <CartButton />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
                  {totalItems}
                </span>
              )}
            </span>
            
            {user && <NotificationCenter />}
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="relative h-8 w-8 rounded-full">
                    <AvatarUpload 
                      size="sm" 
                      avatarUrl={userProfile.avatar_url}
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium text-sm">{user.email}</p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="flex items-center cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      <span>Mon Profil</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    onClick={handleSignOut}
                    className="flex items-center cursor-pointer text-red-600 focus:text-red-600"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Déconnexion</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <AuthButton />
            )}
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-moroccan-burgundy" />
              ) : (
                <Menu className="h-5 w-5 text-moroccan-burgundy" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Rechercher un parfum..."
                className="pl-10 border-moroccan-gold/30 focus:border-moroccan-gold"
              />
            </div>
            
            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="text-moroccan-burgundy hover:text-moroccan-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                to="/catalog" 
                className="text-moroccan-burgundy hover:text-moroccan-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Catalogue
              </Link>
              <Link 
                to="/our-story" 
                className="text-moroccan-burgundy hover:text-moroccan-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Notre Histoire
              </Link>
              <Link 
                to="/contact" 
                className="text-moroccan-burgundy hover:text-moroccan-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              {user && (
                <>
                  <Link 
                    to="/profile" 
                    className="text-moroccan-burgundy hover:text-moroccan-gold transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Mon Profil
                  </Link>
                  <button
                    onClick={() => {
                      handleSignOut();
                      setIsMenuOpen(false);
                    }}
                    className="text-red-600 hover:text-red-700 transition-colors py-2 text-left flex items-center"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Déconnexion
                  </button>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
