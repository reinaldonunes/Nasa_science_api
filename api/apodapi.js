let api_key ='Y1NJVaV0VWcI9AnYNkcmTMdhLpcWMwlRjqpbIyW3';
let endpoint = '/planetary/apod/';

$.ajax({
    url:'https://api.nasa.gov'+endpoint+'?api_key='+api_key,
    success:function(nasadata){
        //seção de importações dos comandos
        // url -> caminho da imagem
        // copyright -> direitos autorais da imagem
        // explanation -> explicação da imagem
        // date -> data da foto
        // hdurl -> foto em alta resolução
        // media_type -> tipo do arquivo
        // service_version -> versão do serviço
        // title -> nome da foto
    }
})