var heroSectionContent = document.querySelector(".description-content");
var heroSectionMedia = document.querySelector(".hero-preview-image");

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
    var mediaType = jsonObject['media_type'];
    if(mediaType == 'image'){
        var imgDaily = document.createElement('img');
        imgDaily.src = jsonObject['url'];
        heroSectionMedia.appendChild(imgDaily);
    }
    if(mediaType == 'video'){
        var imgDaily = document.createElement('iframe');
        imgDaily.src = jsonObject['url'];
        imgDaily.width = '100%';
        heroSectionMedia.appendChild(imgDaily);
    }

    var titleDaily = document.createElement('h1');
    titleDaily.textContent = jsonObject['title'];
    heroSectionContent.appendChild(titleDaily);

    var authorDaily = document.createElement('span');
    authorDaily.textContent = "Author: "+jsonObject['copyright'];
    heroSectionContent.appendChild(authorDaily);

    var dateDaily = document.createElement('span');
    dateDaily.textContent = "Date: "+jsonObject['date'];
    heroSectionContent.appendChild(dateDaily);   
}