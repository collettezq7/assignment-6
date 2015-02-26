$('input').on('keyup', function (evt) {
    $.ajax({
        url: "http://api.bing.net/qson.aspx?Query=" + encodeURI(request.term) + "&JsonType=callback&JsonCallback=?",
        dataType: "jsonp",
        success: function (data) {
            $.each(data.SearchSuggestion.Section, function (i, val) {
                $('.results').append('<div>' + val.Text + '</div>');
            });
        }
    });
});
