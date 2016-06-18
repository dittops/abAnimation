/**
 * Created by DITTO on 18-06-2016.
 */
var $animation_elements ;
var $window ;

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.height();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {//console.log($element)
//            console.log(element_bottom_position)
//            console.log(window_top_position)
//            console.log(element_top_position)
//            console.log(window_bottom_position)
            $element.addClass('in-view');
        } else {
            //$element.removeClass('in-view');
        }
    });

}

$(document).ready(function(){
    $animation_elements = $('.animation');
    $window = $(window);

    $window.on('scroll resize', check_if_in_view);
    check_if_in_view();
});