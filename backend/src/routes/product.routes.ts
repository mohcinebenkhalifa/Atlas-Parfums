import { Router } from 'express';
import { Product } from '../models/product.model';

const router = Router();

// Get all products
router.get('/', (req, res) => {
  Product.find()
    .then(products => {
      res.json(products);
    })
    .catch(err => {
      res.status(500).json({ message: 'Server error', error: err.message });
    });
});

// Get one product
router.get('/:id', (req, res) => {
  Product.findById(req.params.id)
    .then(product => {
      if (!product) {
        // This will be caught by the .catch block below
        throw { status: 404, message: 'Cannot find product' };
      }
      res.json(product);
    })
    .catch(err => {
      if (err.status) {
        res.status(err.status).json({ message: err.message });
      } else {
        res.status(500).json({ message: 'Server error', error: err.message });
      }
    });
});

// Create a product
router.post('/', (req, res) => {
  const product = new Product(req.body);

  product.save()
    .then(newProduct => {
      res.status(201).json(newProduct);
    })
    .catch(err => {
      res.status(400).json({ message: 'Validation error', error: err.message });
    });
});

export default router; 