//var token = 'EAAecdsQH0r0BAP5YJesCPVQTtYDZB3SSKLM0cGVcZAlzgrAyZAzMFeYe4UYMJSLAmoqnCGUvIEMg45xZAfuTleAYF2iXXqZBfC2MCDhtrOLZCjFZBttSbo3nRh2eu95vjyzGGq7ZCFW0ZAtE5bcQzEzNGQR8VM433KHX61dqr8S19xOhN4FR0VbuYXiGY7UsiNwmy9ntr9wVUB3FmFUsPAxnpFmZCpiFe1sItMR1f4iAboOwZDZD',
//     username = 'rudrastyh', // rudrastyh - my username :)
//     num_photos = 4;
 
// $.ajax({ // the first ajax request returns the ID of user rudrastyh
// 	url: 'https://api.instagram.com/v1/users/search',
// 	dataType: 'jsonp',
// 	type: 'GET',
// 	data: {access_token: token, q: username}, // actually it is just the search by username
// 	success: function(data){
// 		console.log(data);
// 		$.ajax({
// 			url: 'https://api.instagram.com/v1/users/' + data.data[0].id + '/media/recent', // specify the ID of the first found user
// 			dataType: 'jsonp',
// 			type: 'GET',
// 			data: {access_token: token, count: num_photos},
// 			success: function(data2){
// 				console.log(data2);
// 				for(x in data2.data){
// 					$('.onqor-socail').append('<li><img src="'+data2.data[x].images.thumbnail.url+'"></li>');  
// 				}
//     			},
// 			error: function(data2){
// 				console.log(data2);
// 			}
// 		});
// 	},
// 	error: function(data){
// 		console.log(data);
// 	}
// });


// var token = 'EAAVvhSaubgYBAM53MMthmgc51OchZAH0jUgGRO1CSVLMp0hgFgDi1CgxsMxfYsdtGVT1dnXFNwkdPY8Pn6UZCaYPV6pMIULsbtJcUo4WyE3Vxtj3PZBS8x2HtkqsFlTFsc66QlKF4trrMS8XmwlNVHUSO1mh51SkgIlIMmMFLSU3THMhg9UZCQTthaptTlkITOZAXgq6s1AZDZD', // learn how to obtain it below
//     userid = 1362124742, // User ID - get it in source HTML of your Instagram profile or look at the next example :)
//     num_photos = 4; // how much photos do you want to get
/*! js-cookie v3.0.0-rc.1 | MIT */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,function(){var n=e.Cookies,r=e.Cookies=t();r.noConflict=function(){return e.Cookies=n,r}}())}(this,function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var t={read:function(e){return e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};return function n(r,o){function i(t,n,i){if("undefined"!=typeof document){"number"==typeof(i=e({},o,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),n=r.write(n,t);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u].split(";")[0]));return document.cookie=t+"="+n+c}}return Object.create({set:i,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],o={},i=0;i<n.length;i++){var c=n[i].split("="),u=c.slice(1).join("=");'"'===u[0]&&(u=u.slice(1,-1));try{var f=t.read(c[0]);if(o[f]=r.read(u,f),e===f)break}catch(e){}}return e?o[e]:o}},remove:function(t,n){i(t,"",e({},n,{expires:-1}))},withAttributes:function(t){return n(this.converter,e({},this.attributes,t))},withConverter:function(t){return n(e({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(r)}})}(t,{path:"/"})});
 
if(Cookies.get('insta-1')){
	for(i = 0; i < 4; i++ ){
		console.log(i);
		const substring = "video";
		if(!Cookies.get('insta-'+ i ).includes(substring)){
			$('.onqor-socail__container').append('<div class="onqor-socail__item onqor-socail__item--'+ i +'"><img src="' + Cookies.get('insta-'+ i) + '" /></div>');
		}else{
			$('.onqor-socail__container').append('<div class="onqor-socail__item onqor-socail__item--'+ i +'"><video autoplay="" loop="" muted=""><source src="' + Cookies.get('insta-'+ i) + '" type="video/mp4"></video></div>');
		}
	}
}

$.ajax({
	url: 'https://graph.instagram.com/me/media?fields=media_url,like_count&access_token=IGQVJWeGl1VU1GOGJzakJPT2dwZAFoyeFlwLXNFVkRTZAzlfd0ZAiUUZADajFINE03aGsyNlRYMUlXYUo5bmZAuaE81MHQ3X0llM3FFUHdPc0l2aEUyd3poZAFM0YzQ0czdOOFNIMGZASR0ZAQeFF2dHBiSlMtNwZDZD',
	// url: 'https://graph.instagram.com/me/media?fields=media_url,like_count&access_token=IGQVJVREItTUxxcmEzMmdRT2xtaWo3dFQ3T25Xd1NUckRHTHJzcDFOTHBsQWpYamRRT1Q4YnpaRjV6S3pYeHdERTR4ZA0tCMmQ0bk9EMFBRTXB3bkd3V1FDWEJYZAEJ1b3ByX3ppMFBlU2VjalRtdklreDZD',
	dataType: 'jsonp',
	type: 'GET',
	success: function(data){
		console.log(data);
		$( ".onqor-socail__container" ).empty(); // clear the area of the cookie loaded images 
		for( x in data.data ){
			if(x < 4){
			// console.log(data.data[x].media_url);
			const substring = "video";
				if(!data.data[x].media_url.includes(substring)){
					$('.onqor-socail__container').append('<div class="onqor-socail__item onqor-socail__item--'+ x +'"><img src="' + data.data[x].media_url + '" /></div>');
				}else{
					$('.onqor-socail__container').append('<div class="onqor-socail__item onqor-socail__item--'+ x +'"><video autoplay="" loop="" muted=""><source src="' + data.data[x].media_url + '" type="video/mp4"></video></div>');
				}
			}
			if(x < 5){
				Cookies.set('insta-'+ x, data.data[x].media_url);
			}
		}
	},
	error: function(data){
		console.log(data); // send the error notifications to console
	}
});


