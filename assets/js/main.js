/*==============================================================
    wow animation - on scroll
 ==============================================================*/

var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 90,
    mobile: true,
    live: true
});
wow.init();

(function( $ ) {
	$('.navbar-collapse a').click(function(){
		$(".navbar-collapse").collapse('hide');
	});
	$('.carousel').carousel({
        interval: 5000 //changes the speed
    })

    jQuery("input.telefone")
        .mask("(99) 9999-9999?9")
        .focusout(function (event) {
            var target, phone, element;
            target = (event.currentTarget) ? event.currentTarget : event.srcElement;
            phone = target.value.replace(/\D/g, '');
            element = $(target);
            element.unmask();
            if(phone.length > 10) {
                element.mask("(99) 99999-999?9");
            } else {
                element.mask("(99) 9999-9999?9");
            }
        });


    /*==============================================================
        navbar fixed top
     ==============================================================*/
    var headerHeight = 200;

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > headerHeight) {
            $('#navbar-top-custom').removeClass('navbar-top');
            $('#navbar-top-custom').addClass('navbar-fixed-top');
        }
        else {
            $('#navbar-top-custom').removeClass('navbar-fixed-top');
            $('#navbar-top-custom').addClass('navbar-top');
        }
    });




})(jQuery);
