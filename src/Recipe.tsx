import React from 'react'
import classes from './Recipe.module.css'

interface IRecipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
}

interface IRecipeProps {
    recipeData: IRecipe;
}

function Recipe({ recipeData }: IRecipeProps) {
    return (
        <div className={classes.box}>
            <h2>{recipeData.name}</h2>
            <h3>Ingredients</h3>
            <ul>
                {recipeData.ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>

            <h3>Instructions</h3>
            <ol>
                {recipeData.instructions.map((instruction) => (
                    <li key={instruction}>{instruction}</li>
                ))}
            </ol>
        </div>
    )
}

export default Recipe