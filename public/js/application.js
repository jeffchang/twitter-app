$(document).ready(function() {
  $('#tweet').submit(function(e) {
    e.preventDefault();
    var data = "tweet="+$(this).find('input[name="tweeted"]').val();
    $.post("/", data, function(response) {
      $('.container').html(response);
    });
  });
});
