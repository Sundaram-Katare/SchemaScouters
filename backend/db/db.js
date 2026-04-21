import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://sundaramkatare53:BGb$44qF6DtS*VK@cluster0.qsjbx.mongodb.net/Policy?retryWrites=true&w=majority");
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectDB;