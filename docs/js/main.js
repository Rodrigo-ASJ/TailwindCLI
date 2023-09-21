//* Dark mode
const theme = document.getElementById('typeModeColor');

//* API
const dasboard = document.getElementById('apiDashboard');
let fragment = document.createDocumentFragment();

//* Pagination 
const next = document.getElementById('nextPage');
const back = document.getElementById('backPage');
const currentPage = document.getElementById('currentPage');
const totalPage = document.getElementById('totalPage');
let page = 1;
let lastPage;

//* Cambiar el color del theme
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
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
        
        const data = await response.json();

        //* API data
        lastPage = data.info.pages;
        const results = data.results;

        //* Pagination
        getCurrentPage();
        
        //* almacenar la info en un fragmento
        results.forEach((element) => {
            const card = createCard(element);
            fragment.append(card);
        });

        dasboard.innerHTML = '';
        //* mostrar la info en pantalla
        dasboard.append(fragment);

    }
    catch(error){
        console.error('Aviso de error en la API:', error.message);
    }

}



function getCharacters(done) {

    const results = fetch("https://rickandmortyapi.com/api/character/?page=1");

    results.then(response => response.json()).then(data => {
        done(data);
    });

}



function pagination(e) {

    let target = e.target;   

    if(target.id === "nextPage" && page < lastPage ){
        page++;
        render();

    }else if(target.id === "backPage" && page > 1){     
        page--;
        render();    
    }
  
}


function initOrLastPage(){
    if( page >= lastPage ){
        next.classList.add("hidden");
        back.classList.remove("hidden");
    }else if(page === 1){
        back.classList.add("hidden");
        next.classList.remove("hidden");
    }else{
        back.classList.remove("hidden");
        next.classList.remove("hidden");
    }
}

function getCurrentPage(){
    currentPage.innerHTML = `${page}`;
    totalPage.innerHTML = `${lastPage}`;
}



//* Renderizado en pantalla
const render = () => {
    theme.addEventListener( 'click', changeTheme );
    
    next.addEventListener('click', pagination);
    back.addEventListener('click', pagination);
    getRickAndMortyApiData();
    
    initOrLastPage(); 
    
}

render();