(function(b){b.support.touch="ontouchend" in document;if(!b.support.touch){return;}var c=b.ui.mouse.prototype,e=c._mouseInit,a;function d(g,h){if(g.originalEvent.touches.length>1){return;}g.preventDefault();var i=g.originalEvent.changedTouches[0],f=document.createEvent("MouseEvents");f.initMouseEvent(h,true,true,window,1,i.screenX,i.screenY,i.clientX,i.clientY,false,false,false,false,0,null);g.target.dispatchEvent(f);}c._touchStart=function(g){var f=this;if(a||!f._mouseCapture(g.originalEvent.changedTouches[0])){return;}a=true;f._touchMoved=false;d(g,"mouseover");d(g,"mousemove");d(g,"mousedown");};c._touchMove=function(f){if(!a){return;}this._touchMoved=true;d(f,"mousemove");};c._touchEnd=function(f){if(!a){return;}d(f,"mouseup");d(f,"mouseout");if(!this._touchMoved){d(f,"click");}a=false;};c._mouseInit=function(){var f=this;f.element.bind("touchstart",b.proxy(f,"_touchStart")).bind("touchmove",b.proxy(f,"_touchMove")).bind("touchend",b.proxy(f,"_touchEnd"));e.call(f);};})(jQuery);

$(document).ready(function(){
	$('.slider-mask').each(function(){
		var before = $(this).find('.slider-bef');
	    var after = $(this).find('.slider-after');
	    var handle = $(this).find('.handle-wrapper');
	    var slider = $(this).find('.AB-slidebar');
		  var tooltip = $(this).find('.slider-tip');
	    
	    var currentWidth = $(before).width(); //get current width of top image
	    var newTopWidth = currentWidth * 2/3; //calculate new top width -> 2/3 of current width
	    var slideLeft = newTopWidth * 2/3; //set # of pixels to slide left
	    var slideRight = newTopWidth; //set # of pixels to slide right
		
	    
	    before.width(newTopWidth); //set top image with new width
	    handle.css('left', newTopWidth); //set left margin for bar

	function slideBar(e) {
	    
	  setTimeout(function () {
	     var newWidth = parseInt($(handle).css('left'));
	     // set width of before img div 
	     before.width(newWidth);
	        }, 30);

	     e.stopPropagation();
	    }


	  handle.draggable({
	        containment: slider,
	        axis: 'x'
	    });

	  slider.bind('drag', slideBar).bind('mousedown',     function(){
	    	tooltip.fadeOut(10);
	    });
	});
	// $('.before-after__slider').slick({
	// 	draggable: false,
	// });
	$('.before-after__dot').on('click',function(){
		dotClicked = $(this).data('dot');
		console.log(dotClicked);
		$(this).addClass('before-after__dot--active').siblings().removeClass('before-after__dot--active');
		$('.before-after__item-' + dotClicked ).addClass('before-after__item--active').siblings().removeClass('before-after__item--active');
	});
	$('.before-after__button-before').on('click',function(){
		buttonClicked =	$(document).find('.before-after__dot--active').data('dot');
		if(buttonClicked == 1){
			nomore = $('.before-after__dot').length;
			console.log(nomore);
			$('.before-after__item-' + nomore ).addClass('before-after__item--active').siblings().removeClass('before-after__item--active');
			$('.before-after__dot-' + nomore ).addClass('before-after__dot--active').siblings().removeClass('before-after__dot--active');
		}else{
			buttonClicked = buttonClicked - 1;
			$('.before-after__item-' + buttonClicked ).addClass('before-after__item--active').siblings().removeClass('before-after__item--active');
			$('.before-after__dot-' + buttonClicked ).addClass('before-after__dot--active').siblings().removeClass('before-after__dot--active');
		}
	});

	$('.before-after__button-after').on('click',function(){
		buttonClicked =	$(document).find('.before-after__dot--active').data('dot');
		if(buttonClicked == $('.before-after__dot').length){
			nomore = 1;
			console.log(nomore);
			$('.before-after__item-' + nomore ).addClass('before-after__item--active').siblings().removeClass('before-after__item--active');
			$('.before-after__dot-' + nomore ).addClass('before-after__dot--active').siblings().removeClass('before-after__dot--active');
		}else{
			buttonClicked = buttonClicked + 1;
			$('.before-after__item-' + buttonClicked ).addClass('before-after__item--active').siblings().removeClass('before-after__item--active');
			$('.before-after__dot-' + buttonClicked ).addClass('before-after__dot--active').siblings().removeClass('before-after__dot--active');
		}
	});
});



