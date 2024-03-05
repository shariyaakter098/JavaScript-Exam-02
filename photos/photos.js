"use stric"

console.log("myWork");
function loadPhotos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayPhotos(data))
}
loadPhotos();

function displayPhotos(data){
    const sectionid = document.getElementById('photos');
    for(const photos of data){
        const div = document.createElement('div');
        div.classList.add('style')
        div.innerHTML = `
            <h1>${photos.title}</h1>
            <h1>${photos.albumId}</h1>
            <h1>${photos.id}</h1>
          
            
        `;


        sectionid.appendChild(div);


        console.log(photos);
    }
}