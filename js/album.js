
function loadAlbum() {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(res => res.json())
      .then(data =>displayAlbum(data))
}

function displayAlbum(album) {
    const albumContainer = document.getElementById('albums');
    for(const albums of album){
        const div = document.createElement('div');
        div.classList.add('picture');
        div.innerHTML = `
            <h4>${albums.id}</h4>
            <p>${albums.title}</p>
        `;

        albumContainer.appendChild(div);
    }
}
