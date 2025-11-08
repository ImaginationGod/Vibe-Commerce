import express from 'express';
import { getProducts, createProduct } from '../controllers/productController.js';

const router = express.Router();

// GET /api/products
router.get('/', getProducts);

// POST /api/products  (admin/seed helper - not secured)
router.post('/', createProduct);

export default router;
