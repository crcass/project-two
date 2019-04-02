// Aimes
$(function() {
  $('.businessButton').on('click', function() {
    console.log(123);
    var contentId = $(this).attr('data-id');
    $('#devModal-' + contentId).modal('show');
  });

  $('.btn-primary').on('click', function(err) {
    var message = $('#devNote').val();
    if (message) {
      console.log(message);
    } else {
      throw err;
    }
  });
});
