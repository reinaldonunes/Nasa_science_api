var asteroidSection = document.querySelector("#asteroid-section main");
let asteroidRequest = '/neo/rest/v1/feed?start_date=2021-10-08&end_date=2021-10-11';


// start api
var requestURL2 = baseUrl+asteroidRequest+'&api_key='+api_key;
var request2 = new XMLHttpRequest();
request2.open('GET',requestURL2);
request2.responseType = 'json';
request2.send();

request2.onload = function(){
    var asteroidContent = request2.response;
    showAsteroids(asteroidContent);
}

function showAsteroids(jsonObject2){
    var near_objects_list = jsonObject2['near_earth_objects'];

    for(var k in near_objects_list) {
        console.log(near_objects_list[k]);

        console.log(near_objects_list[k].length);
       
        for(i = 0; i < near_objects_list[k].length; i++) {
            console.log(near_objects_list[k][i].nasa_jpl_url);
        }
    }
}