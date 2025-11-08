import Product from '../models/Product.js';
import fs from 'fs';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const getProducts = async (req, res) => {
    // Fetch from DB; if empty, fallback to data/products.json
    const products = await Product.find({}).lean();

    if (products.length > 0) {
        return res.json(products);
    }

    // fallback to bundled data
    const fallbackPath = path.join(__dirname, '..', 'data', 'products.json');
    const raw = fs.readFileSync(fallbackPath, 'utf-8');
    const fallbackProducts = JSON.parse(raw);
    return res.json(fallbackProducts);
};

// optional: route to create product (used by seed script or admin)
export const createProduct = async (req, res) => {
    const { name, price, description, image, metadata } = req.body;
    const p = new Product({ name, price, description, image, metadata });
    const saved = await p.save();
    res.status(201).json(saved);
};
