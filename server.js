const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Routes
const authRoutes = require('./routes/auth');
const trainingModuleRoutes = require('./routes/trainingModules');
const userProgressRoutes = require('./routes/userProgress');

app.use('/api/auth', authRoutes);
app.use('/api/training-modules', trainingModuleRoutes);
app.use('/api/user-progress', userProgressRoutes);

// Error handler middleware
const errorHandler = require('./utils/errorHandler');
app.use(errorHandler);

const { swaggerUi, specs } = require('./swagger');
// Add this line after other route definitions
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));
  
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
