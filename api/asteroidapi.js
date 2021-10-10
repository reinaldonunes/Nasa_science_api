var asteroidSection = document.querySelector(".objects-list-grid");
let asteroidRequest = '/neo/rest/v1/feed?start_date=2021-10-08&end_date=2021-10-11';

// start api
var requestObjectsURL = baseUrl+asteroidRequest+'&api_key='+api_key;
var requestObjects = new XMLHttpRequest();
requestObjects.open('GET',requestObjectsURL);
requestObjects.responseType = 'json';
requestObjects.send();

requestObjects.onload = function(){
    var asteroidContent = requestObjects.response;
    showAsteroids(asteroidContent);
}

function showAsteroids(jsonObject2){
    var near_objects_list = jsonObject2['near_earth_objects'];

    for(var k in near_objects_list) {
        var articleAsteroid = document.createElement('article');
        asteroidSection.appendChild(articleAsteroid);
        
        var titleAsteroid = document.createElement('h3');
        titleAsteroid.innerHTML = 'When?';
        articleAsteroid.appendChild(titleAsteroid);

        var titleContent = document.createElement('span');
        titleContent.innerHTML = k;
        articleAsteroid.appendChild(titleContent);

        var titleAmount = document.createElement('h3');
        titleAmount.innerHTML = 'How many?';
        articleAsteroid.appendChild(titleAmount);
        
        var amount = near_objects_list[k].length;
        var amountAsteroid = document.createElement('span');
        amountAsteroid.innerHTML = amount + ' objects';
        articleAsteroid.appendChild(amountAsteroid);
    }
}