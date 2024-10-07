import React, { useState, useEffect } from 'react';
import RecipeTagList from './RecipeTagList';
import RecipeList from './RecipeList';

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

const App = () => {
  const [tagList, setTagList] = useState<string[]>([]);
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(getTags, []);

  // Fetch tags from API
  function getTags() {
    fetch('https://dummyjson.com/recipes/tags')
      .then((response) => response.json())
      .then((data) => {
        setTagList(data);
      });
  }

  // Fetch recipes for selected tag
  useEffect(() => {
    if (!selectedTag) return; // Skip fetching if no tag is selected
    async function getRecipes() {
      const response = await fetch(`https://dummyjson.com/recipes/tag/${selectedTag}`);
      const data = await response.json();
      setRecipes(data.recipes);
    }
    getRecipes();
  }, [selectedTag]);

  // Clear selected tag and recipes when back button is clicked
  const handleBack = () => {
    setSelectedTag('');
    setRecipes([]);
  };

  return (
    <div>
      <h1>ACME Recipe O'Master</h1>
      <div>
        <div>
          {!selectedTag ? (
            <div>
              <h3>Choose a tag below</h3>
              <RecipeTagList tagList={tagList} onSelectTag={setSelectedTag} />
            </div>
          ) : (
            <div>
              <h2>Recipes for {selectedTag}</h2>
              <button onClick={handleBack}>Back</button>
              <RecipeList recipes={recipes} />
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default App;
