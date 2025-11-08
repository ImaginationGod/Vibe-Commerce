import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
// import 'express-async-errors';

import connectDB from './src/config/db.js';
import productRoutes from './src/routes/productRoutes.js';
import cartRoutes from './src/routes/cartRoutes.js';
import checkoutRoutes from './src/routes/checkoutRoutes.js';
import notFound from './src/middleware/notFound.js';
import { errorHandler } from './src/middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// connect DB
connectDB(process.env.MONGO_URI);

// middleware
app.use(cors());
app.use(express.json());
if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('dev'));
}

// routes
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/checkout', checkoutRoutes);

// health check
app.get('/health', (req, res) => res.json({ status: 'ok', time: new Date().toISOString() }));

// error handling
app.use(notFound);
app.use(errorHandler);

// start
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} on port ${PORT}`);
});
