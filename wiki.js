
$(document).ready(function(){

  $('#search').on('click', function(){
     var searchItem = $('#searchItem').val();

     var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=' + searchItem + '&format=json';
      
     $.getJSON(url, function(data){
        //console.log(data);

        $('#display').html('');

        for(var i = 0; i < data[1].length; i++){

             $('#display').append('<div><a href=' + data[3][i] +'><h2>' + data[1][i] +'</h2></a>' +'<p>' + data[2][i] +
           '</p></div');

        }

         $('#searchItem').val('');

     });

  });


  $('#searchItem').keypress(function(event){
    if(event.which === 13){
      $('search').click();
    }
  });

});
