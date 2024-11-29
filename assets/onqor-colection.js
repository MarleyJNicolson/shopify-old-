$(document).ready(function() {
	$('.onqor-select-collection').on('change', function(){
		var newValue = this.value;
		$('.onqor-hidden-input').val(newValue);
	});
	$('.onqor-product-item').each(function(){
		var thefromContainer = $(this).contents();
		$(thefromContainer).find('.btn').on('click', function(){

			var qunCap = $(thefromContainer).find('.onqor-colection-quantity').val() 
			var countTotal = parseInt($(thefromContainer).find('.btn').attr('data-cartcount')) + parseInt(qunCap);


			console.log(countTotal);

			if(countTotal){
				$(thefromContainer).find('.btn').attr('data-cartcount', countTotal);
				console.log('countTotal:' + countTotal );
			}else{
				$(thefromContainer).find('.btn').attr('data-cartcount', qunCap);
				console.log("qunCap:" + qunCap);
			}
			
			console.log($(thefromContainer).find('.btn').attr('data-cartcount'));
			
			if( countTotal >= 3 || qunCap >= 3 ){
				$(thefromContainer).find('.btn').addClass('qlr');
			}else{
				$(thefromContainer).find('.btn').removeClass('qlr');
				console.log('no');
			}

			$('#CartCount').removeClass('hide');
		});
		$(thefromContainer).find('.onqor-addtocart-button').on('click', function(){
			$(thefromContainer).find('.onqor-addtocart').toggleClass('onqor-addtocart--active');
		});
		$(thefromContainer).find('.onqor-colection-quantity').on('keydown keyup change', function(e){
		    if ($(this).val() > 3 
		        && e.keyCode !== 46 // keycode for delete
		        && e.keyCode !== 8 // keycode for backspace
		       ) {
		       e.preventDefault();
		       $(this).val(3);
		    }
		});
	});
	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
});