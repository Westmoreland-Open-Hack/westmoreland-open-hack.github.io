(function ($) {
  var meetupResults;

  $(function(){
    http://api.meetup.com/2/events?group_id=13038502&sign=true&key=6330357c7f54114c744c5f33cd122f
    $.getJSON( "http://api.meetup.com/2/events?text_format=simplehtml&format=json&page=4&group_id="+meetup.groupId+"&sign=true&key="+meetup.APIKey+"&callback=?", function(data){
      meetupResults = data.results;
    }).done(function(){
      printResults();
    });
  });

  function printResults(){
    $("#events").html();
  };

}(jQuery));