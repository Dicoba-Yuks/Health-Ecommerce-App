import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

// Contoh koneksi database menggunakan environment variable
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('Koneksi Gagal:', err));

app.get('/api/products', async (req, res) => {
  res.status(200).json({ message: 'Data produk dari MongoDB Atlas' });
});

// Wajib diekspor untuk Vercel Serverless Functions
export default app;