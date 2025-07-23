import { Router } from 'express';
import { Order } from '../models/order.model';
import { Product } from '../models/product.model';

const router = Router();

// Get all orders
router.get('/', (req, res) => {
  Order.find().populate('products.product_id')
    .then(orders => {
      res.json(orders);
    })
    .catch(err => {
      res.status(500).json({ message: 'Server error', error: err.message });
    });
});

// Create an order
router.post('/', (req, res) => {
  const { customer_name, customer_email, products, shipping_address } = req.body;

  const product_ids = products.map((p: any) => p.product_id);
  Product.find({ '_id': { $in: product_ids } })
    .then(product_docs => {
      let total_amount = 0;
      const order_products: { product_id: any; quantity: number; price: number }[] = [];
      const stock_update_promises: Promise<any>[] = [];

      for (const p of products) {
        const product_doc = product_docs.find(doc => doc._id.toString() === p.product_id);

        if (!product_doc) {
          throw { status: 404, message: `Product with id ${p.product_id} not found` };
        }
        if (product_doc.stock_quantity < p.quantity) {
          throw { status: 400, message: `Not enough stock for ${product_doc.name}` };
        }

        total_amount += product_doc.price * p.quantity;
        order_products.push({
          product_id: p.product_id,
          quantity: p.quantity,
          price: product_doc.price,
        });

        product_doc.stock_quantity -= p.quantity;
        stock_update_promises.push(product_doc.save());
      }

      return Promise.all(stock_update_promises).then(() => {
        const order = new Order({
          customer_name,
          customer_email,
          products: order_products,
          shipping_address,
          total_amount,
        });
        return order.save();
      });
    })
    .then(newOrder => {
      res.status(201).json(newOrder);
    })
    .catch(err => {
      if (err.status) {
        res.status(err.status).json({ message: err.message });
      } else {
        res.status(400).json({ message: 'Error creating order', error: err.message });
      }
    });
});

export default router;
