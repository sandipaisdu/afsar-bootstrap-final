$(document).ready(function(){
	$('#nav').slicknav();
});

$(function(){

	// Instantiate MixItUp:

	$('#work_item').mixItUp();

});



$(document).ready(function(){
	$('.clientfeedbak_list').owlCarousel({
		singleItem:true,
		autoPlay:true,
		pagination:false,
		theme:"chickny-angle-paged",
	});
});


//Scroll to top
jQuery(document).ready(function() {
    var offset = 250;
    var duration = 300;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });

    jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});







