(function ($) {
  var meetupResults;
  var userId = userId();

  $(function(){
    //http://api.meetup.com/2/events?group_id=13038502&sign=true&key=6330357c7f54114c744c5f33cd122f
    $.getJSON( "http://api.meetup.com/2/events?text_format=simplehtml&format=json&page=4&group_id="+meetup.groupId+"&sign=true&key="+meetup.APIKey+"&callback=?", function(data){
      meetupResults = data.results;
    }).done(function(){
      printResults();
    });

    $.getJSON( "http://woh-ideas.herokuapp.com/idea/list/"+userId ).done(function(data) {
      //console.log(data);
      $("#ideas").html(HandlebarsTemplates['ideas']({ "ideas": data } ));
    });

    $('#ideas').on('click', 'a.vote', function(e) {
      e.preventDefault();
      var vote_link = $(this);
      var idea = vote_link.data('idea');
      $.post( "http://woh-ideas.herokuapp.com/vote", { userId: userId, idea: idea }).done(function(data) {
        if(data.id) {
          console.log('voted!');
          vote_link.before('<span class="voted">Agreed!</span>').remove();
        }
        else
          console.log('something went wrong!');
      });
    })
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

  function userId() {
    var woh_token = $.cookie('woh_token') || uuid.v4();
    $.cookie('woh_token', woh_token, { expires: 30 });
    return woh_token;
  }

  // this is bananas
  Handlebars.registerHelper('idHelper', function() {
    return 'data-idea='+this.id;
  });

}(jQuery));
