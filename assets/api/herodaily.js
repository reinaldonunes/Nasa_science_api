var heroSection = document.querySelector("#featured-section main");
let heroPointRequest = '/planetary/apod/';

// start api
var requestHeroURL = baseUrl+heroPointRequest+'?api_key='+api_key;
var requestHero = new XMLHttpRequest();
requestHero.open('GET',requestHeroURL);
requestHero.responseType = 'json';
requestHero.send();

requestHero.onload = function(){
    var dailyContent = requestHero.response;
    showDaily(dailyContent);
}

function showDaily(jsonObject){
    var imgDaily = document.createElement('img');
    imgDaily.src = jsonObject['url'];
    imgDaily.classList.add('hero-daily-img');
    heroSection.appendChild(imgDaily);

    var titleDaily = document.createElement('h1');
    titleDaily.textContent = jsonObject['title'];
    titleDaily.classList.add('hero-daily-title');
    heroSection.appendChild(titleDaily);

    var descriptionDaily = document.createElement('span');
    descriptionDaily.textContent = jsonObject['explanation'];
    descriptionDaily.classList.add('hero-daily-description');
    heroSection.appendChild(descriptionDaily);
}