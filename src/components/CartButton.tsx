
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/hooks/useCart';
import { useAuth } from '@/hooks/useAuth';
import { Link } from 'react-router-dom';

const CartButton = () => {
  const { user } = useAuth();
  const { totalItems } = useCart();

  if (!user) {
    return null;
  }

  return (
    <Link to="/cart">
      <Button variant="ghost" size="sm" className="relative">
        <ShoppingCart className="h-5 w-5 text-moroccan-burgundy" />
        {totalItems > 0 && (
          <Badge 
            variant="destructive" 
            className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-moroccan-gold hover:bg-moroccan-gold/90"
          >
            {totalItems}
          </Badge>
        )}
        <span className="ml-1 hidden sm:inline text-moroccan-burgundy">
          Panier
        </span>
      </Button>
    </Link>
  );
};

export default CartButton;
