import mongoose from 'mongoose';

const connectDB = async (mongoUri) => {
    if (!mongoUri) {
        console.error('MONGO_URI not provided. Set MONGO_URI in .env');
        process.exit(1);
    }

    try {
        const conn = await mongoose.connect(mongoUri, {
            // options are handled by mongoose v6+ defaults
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
};

export default connectDB;
