import { changeTheme , theme } from './darkmode.js'
import { getRickAndMortyApiData, initOrLastPage, pagination, next, back, getResources, apiNav, apiTab, currentResource} from './api.js'

//* Renderizado en pantalla
export const render = () => {
    //*dark mode
    theme.addEventListener( 'click', changeTheme );
    
    //* Resources
    getResources();

    //* Pagination
    next.addEventListener('click', pagination);
    back.addEventListener('click', pagination);
    getRickAndMortyApiData();    
    initOrLastPage();     
}

render();