'use script'

$(document).ready(function () {

$('#water_color_img').click(function () {
    $('dd').addClass('invisible')

    $('#water_color_img').click(function () {
        $('dd').toggleClass('invisible')
    })

    $('dt').click(function () {
        $(this).css('background-color', 'yellow')
    })

});


});