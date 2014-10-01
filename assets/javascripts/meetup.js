(function ($) {
  var meetupResults;

  $(function(){
    //http://api.meetup.com/2/events?group_id=13038502&sign=true&key=6330357c7f54114c744c5f33cd122f
    $.getJSON( "http://api.meetup.com/2/events?text_format=simplehtml&format=json&page=4&group_id="+meetup.groupId+"&sign=true&key="+meetup.APIKey+"&callback=?", function(data){
      meetupResults = data.results;
    }).done(function(){
      printResults();
    });

    $.getJSON( "http://woh-ideas.herokuapp.com/idea" ).done(function(data) {
      //console.log(data);
      $("#ideas").html(HandlebarsTemplates['ideas']({ "ideas": data } ));
    });
  });

  function printResults(){
    $("#events").html(HandlebarsTemplates['events'](
      {
        "events": [
          {"name": "thing", "venue": "My Place", "time": "October 9th, 2014 @ 9:00PM"},
          {"name": "thing two", "venue": "Another Place", "time": "November 3rd, 2014 @ 6:00PM"},
          {"name": "thing the third", "venue": "Hill Valley", "time": "January 1st, 1885 @ 12:00 AM"}
        ]
      }
    ));
  }

}(jQuery));
