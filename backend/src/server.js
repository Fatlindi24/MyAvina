const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const intakeRoutes = require('./routes/intakeRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

// ✅ Unified CORS Configuration (include methods)
app.use(cors({
  origin: 'http://localhost:3000', // 🔒 Replace with your frontend domain in production
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// ✅ Middleware
app.use(bodyParser.json());

app.use(session({
  secret: 'my_super_secret_key', // 🔒 Use env variable in production
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: parseInt(process.env.SESSION_TTL_MS) || 30 * 60 * 1000, // 30 minutes
    httpOnly: true,
    secure: false // 🔒 Set to true with HTTPS in production
  }
}));

// ✅ Routes
app.use('/api/auth', authRoutes);
app.use('/api', intakeRoutes); // Mount all intake routes under /api
app.use('/api/products', productRoutes);

// ✅ Test Route
app.get('/', (req, res) => {
  res.send('🚀 Server running...');
});

// ✅ Start server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`✅ Server listening on port ${PORT}`);
});
