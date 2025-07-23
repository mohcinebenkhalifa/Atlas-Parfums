
import React from 'react';
import { useReviews } from '@/hooks/useReviews';
import { useAuth } from '@/hooks/useAuth';
import { useProducts } from '@/hooks/useProducts';
import AddReviewForm from './AddReviewForm';
import ReviewsList from './ReviewsList';

interface CustomerReviewsProps {
  productId?: string;
  showAddReview?: boolean;
}

const CustomerReviews: React.FC<CustomerReviewsProps> = ({ 
  productId, 
  showAddReview = false 
}) => {
  const { reviews, isLoading, addReview, isAddingReview } = useReviews(productId);
  const { user } = useAuth();
  const { data: products = [] } = useProducts({});

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">Avis clients</h3>
        {showAddReview && user && (
          <AddReviewForm
            productId={productId}
            products={products}
            onSubmit={addReview}
            isSubmitting={isAddingReview}
          />
        )}
      </div>

      <ReviewsList reviews={reviews} isLoading={isLoading} />
    </div>
  );
};

export default CustomerReviews;
