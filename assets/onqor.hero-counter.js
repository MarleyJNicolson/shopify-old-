$(document).ready(function() {
	countDownDataRaw = $('.countdown-hero__count-container').data('countdown'); 
	countDownDate = countDownDataRaw.replace("+", "/");
	var end = new Date( countDownDate );
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;
    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        // var distance = -1;
        if (distance < 0) {
            clearInterval(timer);
            $('.countdown-hero__count-container-content').addClass('count-down-ended');
            // document.getElementById('countdown').fadeOut();
            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);
        document.getElementById('countdown').innerHTML = '<div><p class="number">' + days + '</p> <p>days</p> </div> ';
        document.getElementById('countdown').innerHTML += '<div><p class="number">' + hours + '</p> <p>hrs</p></div> ';
        document.getElementById('countdown').innerHTML += '<div><p class="number">' + minutes + '</p><p>mins</p></div> ';
        document.getElementById('countdown').innerHTML += '<div><p class="number">' + seconds + '</p><p>secs</p>';
    }
    timer = setInterval(showRemaining, 1000);


    $('.countdown-hero .countdown-hero__count-container-content .inactive-stock, .join-mailing-list').on('click',function(){
        $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    });

    if($(document).find('.countdown-hero__slider-inside')){
        $('.countdown-hero__slider-inside').slick({
            appendArrows: $('.countdown-hero__slider-buttons'),
            dots: true,
            appendDots: $('.countdown-hero__slider-buttons'),
            prevArrow:'<button type="button" class="slick-prev"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right fa-w-10 fa-5x"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" class=""></path></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right fa-w-10 fa-5x"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" class=""></path></svg></button>'
        });
    }
});