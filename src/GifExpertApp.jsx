import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState( ['Gatitos'] );

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) {
            return;
        }
        setCategories( [newCategory, ...categories] )
    }

    return (
        <>
            {/* Título de la aplicación */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory onNewCategory = { onAddCategory } />

            {/* Listado de Gifs */}
            <div>
                { 
                    categories.map( (category) => 
                        (
                            <GifGrid category = {category} key={category} />
                        )
                    )
                }
            </div>
        </>
    )
}
