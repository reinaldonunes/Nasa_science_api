// imporando Imagem Astronômica do Dia
let baseUrl = 'https://api.nasa.gov';
let api_key ='Y1NJVaV0VWcI9AnYNkcmTMdhLpcWMwlRjqpbIyW3';

var heroimage = document.createElement('script');
heroimage.src = 'api/herodaily.js';
document.head.appendChild(heroimage);


var asteroids = document.createElement('script');
asteroids.src = 'api/asteroidapi.js';
document.head.appendChild(asteroids);