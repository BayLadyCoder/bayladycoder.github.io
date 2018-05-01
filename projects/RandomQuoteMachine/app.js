$(document).ready(function() {
	
$(".quote").html("<p id=\"theQuote\"> Press the button to see a random quote.");
  
   $("#newQuote").on("click", function() {
      $.getJSON("https://talaikis.com/api/quotes/random/", function(json) {
          
	var html = "";
      console.log(json);

     html += "<p id=\"theQuote\"> Quote: " + json.quote + "<br><br>" + " Author: " + json.author + "<p/>";
      
		var theQuote = json.quote + ", " + json.author;

		console.log(theQuote);
	
      $(".quote").html(html);

      $(".twitter-share-button").on("click", function () {

      		var arr = [];
      		var str = "";

      		arr = theQuote.split(" ");
      		str = arr.join("%20");

      		$("a").attr('href', 'https://twitter.com/intent/tweet?text=' + str + "&url=https%3A%2F%2Fcodepen.io%2Fbaebay%2Fpen%2FXZyjQv" );
      });

	}); 
    }); 
  });  