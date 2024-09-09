import express from  'express';

import { userSignUp } from '../controller/user-controller.js';

import { getProducts ,getProductById } from '../controller/product-controller.js';

const URL = 'http://localhost:8000';

const router = express.Router();

router.post('/signup', userSignUp);
router.get('/products', getProducts);
router.get('/product/:id', getProductById)

export default router;                               