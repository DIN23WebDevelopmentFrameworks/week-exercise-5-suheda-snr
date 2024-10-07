import React from 'react'
import RecipeTag from './RecipeTag'

interface IRecipeTagListProps {
    tagList: string[];
    onSelectTag: (tagName: string) => void;
}

function RecipeTagList({ tagList, onSelectTag }: IRecipeTagListProps) {

    return (
        <div>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
                {tagList.map((tag) => (
                    <RecipeTag key={tag} tagName={tag} onSelectTag={onSelectTag} />
                ))}
            </ul>
        </div >
    )
}

export default RecipeTagList