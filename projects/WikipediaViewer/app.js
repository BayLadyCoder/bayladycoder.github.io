$(document).ready(function() { 
    
    $(".search-btn").on("click", function() {
     
      var searchTerm = $("#searchTerm").val();
     var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
         $.getJSON(api, function(json) {
         
           $("#output").html("");
           
           for (var i=0 ; i < json[1].length ;  i++) {
             
           $("#output").append(
             "<li><a class=\"outputLink\" href=\"" + json[3][i] + "\" target=\"blank\"><strong>" + json[1][i] + "</strong><br>" + json[2][i] + "</a><br>");
             }
              
    
         });
    });
    
  
    
    $('.search-text').keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $(".search-btn").click();//Trigger search button click event
        }
    });
      
  }); 