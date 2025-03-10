import React, { useState } from 'react';

function AddRecipe() {
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [category, setCategory] = useState('');
    const [hashtags, setHashtags] = useState('');
    const [image, setImage] = useState(null);

    const categories = ['Dessert', 'Main Course', 'Appetizer', 'Salad', 'Beverage']; // Example categories

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const recipeData = { recipeName, ingredients, instructions, category, hashtags, image };
    
        try {
            const response = await fetch('http://localhost:5000/api/recipes/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(recipeData),
            });
    
            const data = await response.json();
            if (response.ok) {
                alert('Recipe added successfully!');
                setRecipeName('');
                setIngredients('');
                setInstructions('');
                setCategory('');
                setHashtags('');
                setImage(null);
            } else {
                alert(data.message || 'Error adding recipe');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong!');
        }
    };
    

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center min-vh-100"
            style={{ backgroundColor: ' #f8f9fa' }} // Optional background color
        >
            <div
                className="container shadow-lg p-4"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100vw',
                    borderRadius: '8px',
                    backgroundColor: 'white',
                }}
            >
                {/* Left Section: Image Upload with Box */}
                <div className="col-5 d-flex flex-column align-items-center justify-content-center">
                <label htmlFor="image" className="form-label">Recipe Image</label>
                   
                    <div
                        className="mt-3"
                        style={{
                            width: '100%',
                            height: '200px',
                            border: '1px solid #ccc',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: 'hidden',
                            borderRadius: '8px',
                            backgroundColor: '#f8f9fa',
                        }}
                    >
                        {image ? (
                            <img
                                src={image}
                                alt="Recipe"
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    objectFit: 'contain',
                                }}
                            />
                        ) : (
                            <span>No Image Selected</span>
                        )}
                    </div>
                    <input
                        type="file"
                        className="form-control"
                        id="image"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>

                {/* Right Section: Recipe Details Form */}
                <div className="col-7">
                    <h2>Add Recipe</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="recipeName" className="form-label">Recipe Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="recipeName"
                                value={recipeName}
                                onChange={(e) => setRecipeName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="ingredients" className="form-label">Ingredients</label>
                            <textarea
                                className="form-control"
                                id="ingredients"
                                value={ingredients}
                                onChange={(e) => setIngredients(e.target.value)}
                                rows="3"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="instructions" className="form-label">Instructions</label>
                            <textarea
                                className="form-control"
                                id="instructions"
                                value={instructions}
                                onChange={(e) => setInstructions(e.target.value)}
                                rows="3"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="category" className="form-label">Category</label>
                            <select
                                className="form-control"
                                id="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                            >
                                <option value="">Select a Category</option>
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="hashtags" className="form-label">Special Hashtags</label>
                            <input
                                type="text"
                                className="form-control"
                                id="hashtags"
                                value={hashtags}
                                onChange={(e) => setHashtags(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn"
                            style={{ backgroundColor: 'Orange', color: 'white' }}
                        >
                            Add Recipe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddRecipe;
