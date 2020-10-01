const randomgifs = () => {
    return fetch('http://api.giphy.com/v1/gifs/trending?api_key=chAK8UHNPJzMaHhy37UbEjkle5NpUs6L&limit=10')
        .then(res => res.json())
        .then(res => res.data);
};
       
function outputGif (gifs) {
    gifs.forEach(({images}) => {
        const { url } = images.original;
        view.insertAdjacentHTML('beforeend', `<img src=${url}>`);
    });     
};

randomgifs().then(res => {
    console.log(res);
    outputGif(res);
});
