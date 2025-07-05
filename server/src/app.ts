import express from 'express';
import cors from 'cors';
import connectDB from './config/db';
import bookRoutes from './routes/book.route';
import borrowRoutes from './routes/borrow.route';

const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(
  cors({
    origin: [
      'https://library-with-redux-client.vercel.app',
      'http://localhost:5173',
    ],
    credentials: true,
  })
);
app.use(express.json());

// routes
app.use('/api/books', bookRoutes);
app.use('/api/borrows', borrowRoutes);

// ✅ database
connectDB();

// endpoints
app.get('/', (req, res) => {
  res.send('📚 Library API is Running');
});

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});

export default app;
