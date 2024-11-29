$(document).ready(function() {
    $('.js-toggle-submenu').on('click', function(){
        $(this).closest('ul').toggleClass('mobile-sub-open');
    });
    $('.js-mobile-nav-toggle').on('click',function(){
        $('body').toggleClass('onqor-mobile-menu-active');
    });
    // $('.site-nav--has-dropdown').on('hover',function(){
    // 	$(this).addClass('site-nav--has-dropdown');
    // });
	$(".site-nav--has-dropdown").hover(function(){
	    $(this).addClass('site-nav--active-dropdown');
	    }, function(){
	    if(! $('.site-nav__dropdown:hover').length != 0){
	    	$(this).removeClass('site-nav--active-dropdown');
	    }
	});
    // $(document).on('DOMNodeInserted', function(e) {
    //     if (!$('.onqor-cart-count').hasClass('onqor-cart-count--show')){
    //         $('.onqor-cart-count,#CartCount').addClass('onqor-cart-count--show');
    //     }
    // });
    $('.product-form__item--payment-button button').on('click', function(){
        if (!$('.onqor-cart-count').hasClass('onqor-cart-count--show')){
            $('.onqor-cart-count,#CartCount').addClass('onqor-cart-count--show');
        }
    });
});

