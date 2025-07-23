import { Schema, model, Document, Types } from 'mongoose';

export interface IProduct extends Document {
  _id: Types.ObjectId; // ✅ Ajouté pour corriger l'erreur
  name: string;
  brand: string;
  description: string;
  price: number;
  category: string;
  collection_name: string;
  size_ml: number;
  concentration: string;
  stock_quantity: number;
  is_active: boolean;
  is_featured: boolean;
  target_gender: string;
  age_group: string;
  notes_top: string[];
  notes_heart: string[];
  notes_base: string[];
  image_url: string | null;
  images: string[] | null;
  launch_year: number | null;
  original_price: number | null;
  category_id: string | null;
}

const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  collection_name: { type: String },
  size_ml: { type: Number },
  concentration: { type: String },
  stock_quantity: { type: Number, required: true },
  is_active: { type: Boolean, default: true },
  is_featured: { type: Boolean, default: false },
  target_gender: { type: String },
  age_group: { type: String },
  notes_top: [{ type: String }],
  notes_heart: [{ type: String }],
  notes_base: [{ type: String }],
  image_url: { type: String },
  images: [{ type: String }],
  launch_year: { type: Number },
  original_price: { type: Number },
  category_id: { type: String },
}, { timestamps: true });

export const Product = model<IProduct>('Product', ProductSchema);
