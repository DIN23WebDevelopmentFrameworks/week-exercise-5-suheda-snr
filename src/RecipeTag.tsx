import React from 'react'
import classes from './RecipeTag.module.css'

interface IRecipeTagProps {
    tagName: string;
    onSelectTag: (tagName: string) => void;
}

function RecipeTag({ tagName, onSelectTag }: IRecipeTagProps) {

    return (
        <div className={classes.box} onClick={() => onSelectTag(tagName)} style={{ cursor: 'pointer' }}>
            <li>
                {tagName}
            </li>
        </div>
    );
}

export default RecipeTag