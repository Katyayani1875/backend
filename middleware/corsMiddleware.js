// src/middleware/corsMiddleware.js
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const allowedOrigins = [
  process.env.FRONTEND_URL || 'http://localhost:5174','http://localhost:5173','https://frontend-wf6t.onrender.com'
];

const corsMiddleware = cors({
  origin: function (origin, callback) {
    console.log('CORS Origin:', origin);  // Debugging: See what origin is coming

    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error('Blocked by CORS:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
});

export default corsMiddleware;
