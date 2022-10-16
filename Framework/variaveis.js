/*var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var red = rootStyles.getPropertyValue('--red');
console.log('red: ', red);

root.style.setProperty('--red', 'green');*/


var root = document.querySelector(':root');

root.style.setProperty('--grid-columns', '12');
root.style.setProperty('--text-color', 'white');
root.style.setProperty('--main-theme-color', '#0d324d');
root.style.setProperty('--secondary-theme-color', '#3c3c3c');
root.style.setProperty('--tertiary-theme-color', '#7f5a83');
root.style.setProperty('--title-font', "'Montserrat', sans-serif");
root.style.setProperty('--text-font', "'Libre Baskerville', serif");
