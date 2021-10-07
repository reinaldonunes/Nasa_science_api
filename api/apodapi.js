let heroEndPoint = '/planetary/apod/';

$.ajax({
    url:'https://api.nasa.gov'+heroEndPoint+'?api_key='+api_key,
    success:function(herodata){
        document.querySelector('#featured-img').innerHTML="<img src='"+herodata.url+"' alt='"+herodata.copyright+"' title='"+herodata.title+"' />";
        document.querySelector('.featured-title').innerHTML= herodata.title;
        document.querySelector('.featured-description').innerHTML = herodata.explanation;
    }
})