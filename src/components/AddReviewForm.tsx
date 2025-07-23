
import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Product {
  id: string;
  name: string;
}

interface AddReviewFormProps {
  productId?: string;
  products?: Product[];
  onSubmit: (review: {
    productId: string;
    rating: number;
    title?: string;
    comment?: string;
  }) => void;
  isSubmitting: boolean;
}

const AddReviewForm: React.FC<AddReviewFormProps> = ({ 
  productId, 
  products = [], 
  onSubmit, 
  isSubmitting 
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    productId: productId || '',
    rating: 5,
    title: '',
    comment: '',
  });

  const handleSubmitReview = () => {
    if (!newReview.productId) {
      return;
    }
    
    onSubmit({
      productId: newReview.productId,
      rating: newReview.rating,
      title: newReview.title || undefined,
      comment: newReview.comment || undefined,
    });
    
    setNewReview({ 
      productId: productId || '', 
      rating: 5, 
      title: '', 
      comment: '' 
    });
    setIsDialogOpen(false);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Laisser un avis</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ajouter un avis</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {!productId && (
            <div>
              <Label htmlFor="product">Produit</Label>
              <Select value={newReview.productId} onValueChange={(value) => 
                setNewReview(prev => ({ ...prev, productId: value }))
              }>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner un produit" />
                </SelectTrigger>
                <SelectContent>
                  {products.map((product) => (
                    <SelectItem key={product.id} value={product.id}>
                      {product.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
          
          <div>
            <Label>Note</Label>
            <div className="flex space-x-1 mt-2">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 cursor-pointer ${
                    i < newReview.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                  }`}
                  onClick={() => setNewReview(prev => ({ ...prev, rating: i + 1 }))}
                />
              ))}
            </div>
          </div>
          
          <div>
            <Label htmlFor="title">Titre (optionnel)</Label>
            <Input
              id="title"
              value={newReview.title}
              onChange={(e) => setNewReview(prev => ({ ...prev, title: e.target.value }))}
              placeholder="Résumé de votre avis"
            />
          </div>
          
          <div>
            <Label htmlFor="comment">Commentaire (optionnel)</Label>
            <Textarea
              id="comment"
              value={newReview.comment}
              onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
              placeholder="Détaillez votre expérience"
              rows={4}
            />
          </div>
          
          <Button 
            onClick={handleSubmitReview} 
            disabled={isSubmitting || !newReview.productId}
            className="w-full"
          >
            {isSubmitting ? 'Envoi...' : 'Publier l\'avis'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddReviewForm;
