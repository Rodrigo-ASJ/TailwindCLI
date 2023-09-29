//* Dark mode
export const theme = document.getElementById('typeModeColor');

//* Cambiar el color del theme
export const changeTheme = () => {
    const HTML = document.querySelector('html');
    HTML.classList.toggle('dark');
}