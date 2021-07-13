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
        $('li').last().css('background-color', '#FF0');
    });

    //when any h3 is clicked, the li below should be bold
    $('h3').click(function () {
        $('ul').children().css('font-weight', 'bold');
    });

    // when any li is clicked, the first li of the parent ul should turn blue
    $('li').click(function () {
        $('#state-parks1 > li').first().css('color', 'blue');
    });

    $('li').click(function () {
        $('#state-parks2 > li').first().css('color', 'blue');
    });

    $('li').click(function () {
        $('#state-parks3 > li').first().css('color', 'blue');
    });



});
