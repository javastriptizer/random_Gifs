const searchId = document.getElementById('search');

const randomgifs = () => {
    return fetch('http://api.giphy.com/v1/gifs/trending?api_key=chAK8UHNPJzMaHhy37UbEjkle5NpUs6L&limit=5')
        .then(res => res.json())
        .then(res => res.data);
};
       
function outputGif (gifs) {
    view.innerHTML = '';
    gifs.forEach(({images}) => {
        const { url } = images.original;
        view.insertAdjacentHTML('beforeend', `<img src=${url}>`);
    });     
};

const searchGifs = (search) => {
    return fetch(`http://api.giphy.com/v1/gifs/search?api_key=chAK8UHNPJzMaHhy37UbEjkle5NpUs6L&limit=5&q=${search}`)
    .then(res => res.json())
    .then(res => res.data)
    .then(res => {console.log(res);
    return res;
    });
}

 randomgifs().then(outputGif);

searchId.addEventListener('input', (e) => {
    const { value } = searchId;
    if (!value) {
        randomgifs().then(outputGif);
        return;
    }
    searchGifs(value).then(outputGif);
});
