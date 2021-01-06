// Los helpers sirven para funciones especificas que no necesitan renderizar componentes
export const getGifs = async(category) => {

    // encodeURI() sirve para formatear el string y poder ponerlo en la url
    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=BzYFcUXf7wKHk5rOZFhF9IXGAHM0JZ6T`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs; 
}