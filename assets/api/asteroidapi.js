var asteroidSection = document.querySelector("#asteroid-section main");
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
        var titleAsteroids  = document.createElement('h1');
        titleAsteroids.textContent = k;
        asteroidSection.appendChild(titleAsteroids);

        //console.log(near_objects_list[k]);

        //console.log(near_objects_list[k].length);
       
        for(i = 0; i < near_objects_list[k].length; i++) {
            var photoAsteroid = document.createElement('img');
            photoAsteroid.src = near_objects_list[k][i].nasa_jpl_url;
            asteroidSection.appendChild(photoAsteroid);

            //console.log(near_objects_list[k][i]);
        }
    }
}