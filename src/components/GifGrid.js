import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    //const [images, setImages] = useState([]);

    // useEffect sirve para indicar que codigo quiero que se ejecute cuando el componente
    // es renderizado por primera vez, esto permite que la función solo se dispare una vez
    // Como segundo parametro al useEffect se le pasan las dependencias
    // Que cuando esta cambie, significa que debe ejecutar la función
    /*useEffect( () => {
        getGifs(category)
            .then( setImages );
    }, [category]);*/

    // custom hook
    const {data: images, loading} = useFetchGifs(category);
    
    // En el GifGridItem enviamos las propiedades de las imagenes con el spread operator, se envía cada propiedad(id, url, title)
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Cargando...</p>}
            <div className="card-grid">
                {
                    images.map( img => {
                        return <GifGridItem key={img.id} {...img} />
                    })
                }
    
            </div>
        </>
    )
}
