const theme = document.getElementById('typeModeColor');
const dasboard = document.getElementById('apiDashboard');
let fragment = document.createDocumentFragment();

//* cambiar color del theme
const changeTheme = () => {
    const HTML = document.querySelector('html');
    HTML.classList.toggle('dark');
}

//* API Card
function createCard({ id, name, image,gender,species,status }){

    const templateCard = document.querySelector('#cardTemplate');
    const card = templateCard.content.cloneNode(true);

    card.querySelector('.card').dataset.identity = id;
    card.querySelector('.card_name').textContent = name;
    card.querySelector('.card_img').src = image;
    card.querySelector('.card_gender').textContent = gender;
    card.querySelector('.card_status').textContent = status;
    card.querySelector('.card_species').textContent = species;
    
    return card;
    }


//* consumo de API
const getRickAndMortyApiData = async() => {

    try{
        const response = await fetch('https://rickandmortyapi.com/api/character/?page=1');
        
        const data = await response.json();
        console.log(data)
        const results = data.results;
        console.log(results);
        //* almacenar la info en un fragmento
        results.forEach((element) => {
            const card = createCard(element);
            fragment.append(card);
        });

        //* mostrar la info en pantalla
        dasboard.append(fragment);
    }
    catch(error){
        console.error('Aviso de error en la API:', error.message);
    }

}

//* Renderizado en pantalla
const render = () => {
    theme.addEventListener( 'click', changeTheme );
    getRickAndMortyApiData(); 
}



render();