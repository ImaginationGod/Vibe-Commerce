import express from 'express';
import {
    getCart,
    addToCart,
    removeCartItem,
    updateCartItem
} from '../controllers/cartController.js';

const router = express.Router();

// GET /api/cart?sessionId=...
router.get('/', getCart);

// POST /api/cart
router.post('/', addToCart);

// PUT /api/cart/:id
router.put('/:id', updateCartItem);

// DELETE /api/cart/:id
router.delete('/:id', removeCartItem);

export default router;
