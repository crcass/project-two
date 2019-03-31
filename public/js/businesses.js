
$(function () {

    $('.businessButton').on('click', function () {
        console.log(123);
        var contentId = $(this).attr('data-id');
        $('#exampleModal-' + contentId).modal('show');
    })

    $('.btn-primary').on('click', function (err) {
        var value = $('.form-check-input:checked').val();
        if (value === 'true') {
            value = 1
            console.log(value);

            var Contacts = {
                company: $(this).attr('data-name'),
                interested: value
            };

            $.post('/api/contacts', Contacts).then(function () {
                location.reload();
                console.log('added to contact table');
            })

        } else {
            throw err;
        }
    })

});