// imporando Imagem Astronômica do Dia
let baseUrl = 'https://api.nasa.gov';
let api_key ='Y1NJVaV0VWcI9AnYNkcmTMdhLpcWMwlRjqpbIyW3';

var heroimage = document.createElement('script');
heroimage.src = 'assets/api/herodaily.js';
document.body.appendChild(heroimage);


var asteroids = document.createElement('script');
asteroids.src = 'assets/api/asteroidapi.js';
document.body.appendChild(asteroids);

var marsgallery = document.createElement('script');
marsgallery.src = 'assets/api/marsgalleryapi.js';
document.body.appendChild(marsgallery);