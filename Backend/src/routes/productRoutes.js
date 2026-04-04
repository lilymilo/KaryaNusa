import express from 'express';
import { createProduct, getProducts, deleteProduct, updateProduct } from '../controller/productController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Ini yang benar:
router.get('/', getProducts); 
router.post('/', protect, createProduct);
router.put('/:id', protect, updateProduct);
router.delete('/:id', protect, deleteProduct);

export default router;