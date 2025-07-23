
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Review {
  id: string;
  rating: number;
  title?: string;
  comment?: string;
  created_at: string;
  profiles?: {
    full_name: string | null;
    avatar_url?: string | null;
  } | null;
  products?: {
    name: string;
  } | null;
}

interface ReviewsListProps {
  reviews: Review[];
  isLoading: boolean;
}

const ReviewsList: React.FC<ReviewsListProps> = ({ reviews, isLoading }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  if (isLoading) {
    return <div className="animate-pulse">Chargement des avis...</div>;
  }

  if (reviews.length === 0) {
    return (
      <Card>
        <CardContent className="p-6 text-center text-gray-500">
          Aucun avis pour le moment. Soyez le premier à laisser un avis !
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-4">
      {reviews.map((review) => (
        <Card key={review.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={review.profiles?.avatar_url} />
                  <AvatarFallback>
                    {review.profiles?.full_name?.charAt(0) || 'U'}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{review.profiles?.full_name || 'Utilisateur'}</p>
                  <div className="flex">{renderStars(review.rating)}</div>
                  {review.products && (
                    <p className="text-sm text-gray-500">{review.products.name}</p>
                  )}
                </div>
              </div>
              <span className="text-sm text-gray-500">
                {new Date(review.created_at).toLocaleDateString('fr-FR')}
              </span>
            </div>
            {review.title && <CardTitle className="text-lg">{review.title}</CardTitle>}
          </CardHeader>
          {review.comment && (
            <CardContent>
              <p className="text-gray-700">{review.comment}</p>
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  );
};

export default ReviewsList;
