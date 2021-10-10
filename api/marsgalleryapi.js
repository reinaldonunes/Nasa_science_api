var marsSection = document.querySelector("#gallerySlider .swiper-wrapper");
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

        var swiperSlide = document.createElement('a');
        swiperSlide.classList.add('swiper-slide');
        swiperSlide.href = photos[idLine].img_src;
        swiperSlide.setAttribute('data-fancybox','gallery');
        swiperSlide.setAttribute('data-caption', photos[idLine].rover['name']);
        
        marsSection.appendChild(swiperSlide);

        var photoMars = document.createElement('img');
        photoMars.src = photos[idLine].img_src;
        photoMars.title = photos[idLine].rover['name'];
        photoMars.alt = photos[idLine].rover['name'];
        
        swiperSlide.appendChild(photoMars);
    }
}
