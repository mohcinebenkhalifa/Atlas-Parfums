import { Schema, model, Document, Types } from 'mongoose';

export interface IOrder extends Document {
  customer_name: string;
  customer_email: string;
  products: {
    product_id: Types.ObjectId;
    quantity: number;
    price: number;
  }[];
  total_amount: number;
  status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
  shipping_address: string;
}

const OrderSchema = new Schema<IOrder>({
  customer_name: { type: String, required: true },
  customer_email: { type: String, required: true },
  products: [
    {
      product_id: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    }
  ],
  total_amount: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'shipped', 'delivered', 'cancelled'], default: 'pending' },
  shipping_address: { type: String, required: true },
}, { timestamps: true });

export const Order = model<IOrder>('Order', OrderSchema); 