// Adrian
$('#sendInterest2').on('click', function(err) {
  var devId = $('#sendInterest2').data('dev');
  var company = $('#companyName').text();
  var msgSubject = $('#msgSubject2')
    .val()
    .trim();
  var text = $('#devNote2')
    .val()
    .trim();
  var job = $('#jobUrl2')
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
    $('#msgSubject2').val('');
    $('#devNote2').val('');
    $('#jobUrl2').val('');
  });
});
