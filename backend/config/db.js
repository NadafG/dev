const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Ensure that MONGO_URI is defined in environment variables
        if (!process.env.MONGO_URI) {
            throw new Error('MONGO_URI is not defined in the environment variables');
        }
        const mongoURL = process.env.MONGO_URL || 'mongodb://root:example@mongo:27017/zoompoint?authSource=admin';
        // Establish MongoDB connection
        await mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: false });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;
