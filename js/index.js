/* HW 19 Edits*/

$( document ).ready(function() {
    console.log("JS Working");
    const image = $('#my-work-image')
    image.on('mouseenter', function() {
        // on mouseenter
        image.addClass('animate__bounce')
    })
    image.on('mouseleave', function() {
        // on mouseleave
        image.removeClass('animate__bounce')
    })
});




/* HW 19 Edits END*/
