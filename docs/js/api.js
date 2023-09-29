import { render } from './home.js'

//* print API
const dasboard = document.getElementById('apiDashboard');
let fragment = document.createDocumentFragment();

//* Resources
export const apiTab = document.querySelector('#apiTab');
export const apiNav = document.querySelectorAll('#apiNav button');
export let currentResource = 'character';

//* Pagination 
export const next = document.getElementById('nextPage');
export const back = document.getElementById('backPage');
const currentPage = document.getElementById('currentPage');
const totalPage = document.getElementById('totalPage');
let page = 1;
let lastPage;


//* API Card
function createCard({ id, name, image,gender,species,status,type,dimension,residents,air_date, episode }){

    const templateCharacters = document.querySelector('#cardTemplateCharacters');
    const templateLocations = document.querySelector('#cardTemplateLocations');
    const templateEpisodes = document.querySelector('#cardTemplateEpisodes');

    let card;

  

   switch (currentResource) {
    case "character":
        card = templateCharacters.content.cloneNode(true);
        card.querySelector('.card').dataset.identity = id;
        card.querySelector('.card_name').textContent = name;
        card.querySelector('.card_img').src = image;
        card.querySelector('.card_gender').textContent = gender;
        card.querySelector('.card_status').textContent = status;
        card.querySelector('.card_species').textContent = species;    
   
    break;
   
    case "location":     
        card = templateLocations.content.cloneNode(true);
        card.querySelector('.card').dataset.identity = id;
        card.querySelector('.card_name').textContent = name;
        card.querySelector('.card_type').textContent = type;
        card.querySelector('.card_dimension').textContent = dimension;
        card.querySelector('.card_residents').textContent = residents;   
   
    break;

    case "episode":
        card = templateEpisodes.content.cloneNode(true);
        card.querySelector('.card').dataset.identity = id;
        card.querySelector('.card_name').textContent = name;
        card.querySelector('.card_episode').textContent = episode;
        card.querySelector('.card_air_date').textContent = air_date;
     
    break;

    default:
        break;
   }

   return card;

    }

//* consumo de API
export const getRickAndMortyApiData = async() => {

    try{

      

        const response = await fetch(`https://rickandmortyapi.com/api/${currentResource}/?page=${page}`);        
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


//* Pagination buttons

export function pagination(e) {

    let target = e.target;   

    if(target.id === "nextPage" && page < lastPage ){
        page++;
        render();

    }else if(target.id === "backPage" && page > 1){     
        page--;
        render();    
    }
  
}

export function initOrLastPage(){
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


//* Resources

export function getResources(){
   
//* Desktop
    apiNav.forEach( item => {
        
        item.addEventListener( 'click', (e) =>{
            //* change the endpoint
            currentResource = `${e.target.id}`;
            
            //* clear attributes and select the current resource
            apiNav.forEach( buttons => buttons.setAttribute('aria-current', "false"));
            apiTab.querySelectorAll('option').forEach( option => option.value === currentResource ? option.setAttribute('selected', "true") : option.removeAttribute('selected', "false") );

            //* add styles css
            e.target.setAttribute('aria-current', "true");
            
            //* reset page
            page = 1
            render();
        });
    })

  //* Moviles
    apiTab.addEventListener( "change", (e) =>{

            currentResource = `${e.target.value}`;

            //* clear attributes and select the current resource
            apiNav.forEach( buttons => buttons.id === currentResource ? buttons.setAttribute('aria-current', "true") : buttons.setAttribute('aria-current', "false"));
            
            //* reset page
            page = 1
            render();
        });

}