import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // Cuando el array va a cambiar es mejor hacerlo con el estado
    const [categories, setCategories] = useState(['Dragon ball']);

    /*const handleAdd = () => {
        // Se puede hacer una función de callback, donde el argumento cats es el valor del array anterior
        // Luego usamos el spread operator (...) para tomar los elementos anteriores y le agregamos el nuevo 'Naruto'
        setCategories(cats =>  [...cats, 'Naruto']);
    }*/

    // En el key va el id unico del elemento
    // El map nos sirve para iterar un array y transfomarlo en algo, en este caso metemos su valor en una etiqueta li
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map( category => (
                        <GifGrid category={category} key={category} />
                    ))
                }
            </ol>
        </>
    )
}
