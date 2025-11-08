import dotenv from 'dotenv';
dotenv.config();

import fs from 'fs';
import path from 'path';
import url from 'url';
import connectDB from '../config/db.js';
import Product from '../models/Product.js';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const seed = async () => {
    try {
        await connectDB(process.env.MONGO_URI);

        const dataPath = path.join(__dirname, '..', 'data', 'products.json');
        const raw = fs.readFileSync(dataPath, 'utf8');
        const products = JSON.parse(raw);

        if (!Array.isArray(products) || products.length === 0) {
            console.log('No products to seed');
            process.exit(0);
        }

        // Option: clear existing
        await Product.deleteMany({});
        const created = await Product.insertMany(products);
        console.log(`Seeded ${created.length} products`);
        process.exit(0);
    } catch (err) {
        console.error('Seeding error:', err);
        process.exit(1);
    }
};

seed();
