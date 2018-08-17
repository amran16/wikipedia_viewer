
$(document).ready(function(){

  $('form').on('submit', function(event){
    
     event.preventDefault();

     var searchItem = $('#searchItem').val();

     var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=' +                   searchItem + '&format=json';
      
     $.getJSON(url, function(data){

        for(var i = 0; i < data[1].length; i++){

          $('#display').append('<li><a href=' + data[3][i] +'><h2>' + data[1][i] +'</h2></a>' +'<p>' + data[2][i] +
            '</p></li>');
        }
        $('#searchItem').val('');
     });
  });
});
