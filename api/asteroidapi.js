let paramsEndPoint = '/neo/rest/v1/neo/3542519';

$.ajax({
    url:'https://api.nasa.gov'+paramsEndPoint+'?api_key='+api_key,
    success:function(asteroids){
        //console.log(asteroids.url);
        //document.querySelector('#featured-img').innerHTML="<img src='"+nasadata.url+"' alt='"+nasadata.copyright+"' title='"+nasadata.title+"' />";
        //document.querySelector('.featured-title').innerHTML= nasadata.title;
        //document.querySelector('.featured-description').innerHTML = nasadata.explanation;
    }
})