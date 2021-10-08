var heroSection = document.querySelector("#featured-section main");
let heroPointRequest = '/planetary/apod/';

// start api
var requestURL = baseUrl+heroPointRequest+'?api_key='+api_key;
var request = new XMLHttpRequest();
request.open('GET',requestURL);
request.responseType = 'json';
request.send();

request.onload = function(){
    var dailyContent = request.response;
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