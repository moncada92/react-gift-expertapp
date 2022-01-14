

export const getGifs = async (category) => {

    const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=N7Sz689TcRdubfTHWUY5DoEH9vHTW0g3`;

    const resp = await fetch(URL);
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    console.log(gifs);
    return gifs
}