import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: { type: String },
        email: { type: String, index: true },
        // simple mock user for persistence demo
        createdAt: { type: Date, default: Date.now }
    },
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);
export default User;
