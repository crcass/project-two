// Aimes
$(function() {
  $('.businessButton').on('click', function() {
    var contentId = $(this).attr('data-id');
    $('#exampleModal-' + contentId).modal('show');
  });

  $('#sendInterest').on('click', function(err) {
    var value = $('.form-check-input:checked').val();
    if (value === 'true') {
      value = 1;

      var Contacts = {
        company: $(this).attr('data-name'),
        interested: value,
      };

      $.post('/api/contacts', Contacts).then(function() {
        location.reload();
      });
    } else {
      throw err;
    }
  });
});

document.title = 'DevPool | For Developers';
