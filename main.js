

var url = "http://api.bing.net/qson.aspx?Query=";
var endUrl = "&JsonType=callback&JsonCallback=?";
//url components

$('input').on('keyup', function (evt){
//event listener
    $.ajax({
        url : url + $(this).val() + endUrl,
        dataType: "jsonp",
        type: "GET"
    }).done(function(response){
    	var results = response.SearchSuggestion.Section;
        console.log(response.SearchSuggestion.Section);
        $(".results").empty();
// ajax call to return results and empty when delete key is hit


        $.each(results, function(i, value){
        	console.log(value.Text);
//jquery for loop 
       
        var html = $("<a>" + value.Text + "</a>");
        $(".results").append(html);
        	$("a").attr("href", encodeURI("http://www.bing.com/search?q=" + value.Text));
//turn to html and append DOM
      });  
    });
});

