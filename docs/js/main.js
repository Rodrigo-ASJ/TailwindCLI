import { changeTheme , theme } from './darkmode.js'

//* Renderizado en pantalla
export const render = () => {
    theme.addEventListener( 'click', changeTheme );  
}

render();