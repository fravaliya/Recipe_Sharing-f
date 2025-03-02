
module.exports.index = async(req, res) => {
    try {
        const recipes = await recipes.find().populate('user', 'username email');
        res.status(200).json(recipes);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports.createNewRecipe = async(req, res) => {
    const { title, description, ingredients, instructions } = req.body;
    try {
        const recipe = new Recipe({ title, description, ingredients, instructions, user: req.user.id });
        await recipe.save();
        res.status(201).json(recipe);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports.updateRecipe = async(req, res) => {
    try {
        const { title, description, ingredients, instructions } = req.body;
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, { title, description, ingredients, instructions }, { new: true });
        res.status(200).json(updatedRecipe);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports.destroyRecipe = async(req, res) => {
    try {
        await Recipe.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Recipe deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}