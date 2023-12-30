const accessKey = 't96X_AAB0d0zLUhnm1TbG-JpUDaCaWjLopSGL4Rrqxg';
const collectionId = '9510741';
const apiUrl = `https://api.unsplash.com/collections/${collectionId}/photos`;
const fotos = document.querySelector('#medicosFotos')

const queryParams = {
    count: 15,
};


const url = new URL(apiUrl);
url.search = new URLSearchParams(queryParams).toString();


fetch(url, {
    method: 'GET',
    headers: {
        'Authorization': `Client-ID ${accessKey}`
    }
})
    .then(response => response.json())
    .then(data => {

        data.forEach(photo => {
            let contenedorFoto = document.createElement('div');
            contenedorFoto.classList.add('foto-container');


            let imagen = document.createElement('img');
            imagen.src = photo.urls.small;
            imagen.alt = photo.alt_description;


            contenedorFoto.appendChild(imagen);


            fotos.appendChild(contenedorFoto);
        });
    })
    .catch(error => {

        console.error('Error fetching data from Unsplash API', error);
    });
