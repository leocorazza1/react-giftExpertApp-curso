export const getImage = async (categoria)=>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${categoria}&api_key=txjDtAKfL0oJ0SXHVn3yAvoRnt2MjNKE&limit=1`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gift = data.map((elemento)=>{

       return (
           {
            id:elemento.id,
            titulo:elemento.title,
            url_image:elemento.images.downsized.url
            })
    })

    return gift;

}