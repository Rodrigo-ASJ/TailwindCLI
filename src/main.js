const theme = document.getElementById('typeModeColor');


const chamgeTheme = () => {
    const HTML = document.querySelector('html');
    HTML.classList.toggle('dark');
}


const render = () => {
    theme.addEventListener( 'click', chamgeTheme );
}

render();