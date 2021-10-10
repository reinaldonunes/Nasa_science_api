var marsSection = document.querySelector("#mars-section main");
let marsRequest = '/mars-photos/api/v1/rovers/curiosity/photos?sol=1000';


// start api
var requestMarsURL = baseUrl+marsRequest+'&api_key='+api_key;
var requestMars = new XMLHttpRequest();
requestMars.open('GET',requestMarsURL);
requestMars.responseType = 'json';
requestMars.send();

requestMars.onload = function(){
    var marsContent = requestMars.response;
    showMarsGallery(marsContent);
}

function showMarsGallery(jsonMars){
    var photos = jsonMars['photos'];

    for(var idLine in photos) {
        var imgMars  = document.createElement('img');
        imgMars.src = photos[idLine].img_src;
        marsSection.appendChild(imgMars);

        console.log(photos[idLine].img_src);

    }
}
