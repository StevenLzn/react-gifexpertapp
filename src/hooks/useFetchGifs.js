import {useEffect, useState} from 'react';
import {getGifs} from '../helpers/getGifs'
// custom hook
// Un hook es similar a un functional component, con la diferencia que no renderiza un html
// Este hook se puede usar en cualquier parte del codigo de nuestra apliacación
export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getGifs(category)
        .then( imgs => {
            setState({
                data: imgs,
                loading: false,
            });
        });
    }, [category])


    return state;
}
