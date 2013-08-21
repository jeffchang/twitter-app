$(document).ready(function() {
  $('#tweet').submit(function(e) {
    e.preventDefault();
    var url = $(this).find('input[name="username"]').val();
    $.get(("/"+url), function(response) {
      $('.container').html(response);
    });
  });
});
