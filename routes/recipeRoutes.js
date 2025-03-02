const express = require('express');
const router = express.Router({mergeParams : true});
const recipeController = require('../controllers/recipeController');
const methodOverride = require("method-override");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// JWT Middleware
const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Access Denied' });

    try {
        const verified = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid Token' });
    }
};

router.use(express.urlencoded({extended : true}));
router.use(methodOverride("_method"));

router.route('/')
    .get(recipeController.index)
    .post(verifyToken, recipeController.createNewRecipe);

router.route('/:id')
    .put(verifyToken, recipeController.updateRecipe)
    .delete( verifyToken, recipeController.destroyRecipe);

module.exports = router;