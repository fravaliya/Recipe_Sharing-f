import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import homeimg from "../assets/Main.png";

export default function Home() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/recipes") // Fetch recipes from backend
            .then((res) => res.json())
            .then((data) => setRecipes(data))
            .catch((err) => console.error("Error fetching recipes:", err));
    }, []);

    return (
        <>
            <div className="px-4">
                <Navbar />
                <div className="row g-4">
                    {recipes.length > 0 ? (
                        recipes.map((recipe, i) => (
                            <div className="col-3 mb-4" key={i}>
                                <div className="card">
                                    <a href="#"><img src={recipe.image || homeimg} className="card-img-top" alt={recipe.recipeName} /></a>
                                    <div className="card-body">
                                        <h5 className="card-title">{recipe.recipeName}</h5>
                                        <p className="card-text">{recipe.ingredients}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No recipes found.</p>
                    )}
                </div>
            </div>
        </>
    );
}
