
function loadPhoto() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(data => displayPhoto(data))
}

function displayPhoto(photos){
    const photoContainer = document.getElementById('photos');
    for (const photo of photos){
        const div = document.createElement('div');
        div.classList.add('pic');
        div.innerHTML = `
            <h4>${photo.id}</h4>
            <p>${photo.title}</p>
            <img src =${photo.url}/>
        `;
        photoContainer.appendChild(div);
    }
}