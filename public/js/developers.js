// Aimes
$(function() {
  $('.businessButton').on('click', function() {
    var contentId = $(this).attr('data-id');
    $('#devModal-' + contentId).modal('show');
  });

  $('#sendInterest').on('click', function(err) {
    var devId = $('#sendInterest').data('dev');
    var company = $('#companyName').text();
    var msgSubject = $('#msgSubject')
      .val()
      .trim();
    var text = $('#devNote')
      .val()
      .trim();
    var job = $('#jobUrl')
      .val()
      .trim();
    var message = {
      devId: devId,
      company: company,
      msgSubject: msgSubject,
      message: text,
      jobPosting: job,
    };
    $.post('/api/contacts/', message).then(function(response) {
      console.log(response);
      $('#msgSubject').val('');
      $('#devNote').val('');
      $('#jobUrl').val('');
    });
  });
});

document.title = 'DevPool | For Employers';
