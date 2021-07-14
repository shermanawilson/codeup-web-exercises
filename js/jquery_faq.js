'use script'

$(document).ready(function () {

    $('#water_color_img').click(function () {
        $('dd').addClass('invisible')

        $('#water_color_img').click(function () {
            $('dd').toggleClass('invisible')
        });

        $('dt').click(function () {
            $(this).css('background-color', 'yellow')
        });
    });

    //make the last li in each ul have a yellow background
    $('#yellowButton').click(function () {
        $('ul').each(function () {
            // $('li').last().css('background-color', '#FF0'); // I needed to add . children
            $(this).children().last().css('background-color', '#FF0');

        });
    });

    //when any h3 is clicked, the li below should be bold
    $('h3').click(function () {
        $(this).next().children().css('font-weight', 'bold');
    });

    // when any li is clicked, the first li of the parent ul should turn blue
    $('li').click(function () {
        $(this).parent().children().first().css('color', 'blue');
    });


});
