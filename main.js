$('input').on('keyup', function (evt) {
    $("#search").autocomplete({
        source: function (request, response) {


            $.ajax({
                url: "http://api.bing.net/qson.aspx?Query=" + encodeURI(request.term) + "&JsonType=callback&JsonCallback=?",
                dataType: "jsonp",
   

                success: function (data) {
                    var returned = [];
                    $.each(data.SearchSuggestion.Section, function (i, val) {
                        returned.push(val.Text);
                    });
                    response(returned);
                }
            });
        }
    });
});