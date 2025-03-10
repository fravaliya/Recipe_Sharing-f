if (process.env.NODE_ENV != "production") {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// Mongodb Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('MongoDB Connection Failed', err);
        process.exit(1);
    }
};
connectDB();


// Models
const User = require('./models/users');
const Recipe = require('./models/users');

// Routes
const userRoutes = require('./routes/userRoutes');
const recipeRoutes = require('./routes/recipeRoutes');

// Use Routes
app.use('/api/users', userRoutes);
app.use('/api/recipes', recipeRoutes);


// root route
app.get("/" , (req, res) => {
    res.send("Welcome to Flavoriz..");
});


// port listening
app.listen(PORT, ()=> {
    console.log(`server listening at port ${PORT}`)
})