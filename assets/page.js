/* Tab Switch */
$('.js_tabBtn').click(function() {
	var index = $('.js_tabBtn').index(this);
  $('.js_tabBody').css('display','none');
	$('.js_tabBtn, .js_tabBody').removeClass('active');
	$(this).addClass('active');
	$('.js_tabBody').eq(index).fadeIn("slow").addClass('active');
});

/* Accordion */
let accordion_wrap = $('.js_accordion_wrap'),
		accordion_btn = $('.js_accordion_btn'),
		accordion_body = $('.js_accordion_body');
accordion_wrap.removeClass('is_open');
accordion_body.hide();
var headerHeight = $('.site-header').outerHeight();
		urlHash = location.hash;
$(window).on('load', function() {
	if(urlHash) {
		$('body,html').stop().scrollTop(0);
		setTimeout(function(){
				var target = $(urlHash);
				var position = target.offset().top - headerHeight;
				$('body,html').stop().animate({scrollTop:position}, 500);
				target.addClass('is_open');
				target.find(accordion_body).show();
		}, 100);
	}
});
accordion_btn.on("click", function(){
	$(this).next().slideToggle();
	$(this).closest('.js_accordion_wrap').toggleClass('is_open');
});
$('.js_accordion_body a[href^="#"]').click(function(){
  var href = $(this).attr("href"),
			headerHeight = $('.site-header').outerHeight(),
			target = $(href == "#" || href == "" ? 'html' : href),
			position = target.offset().top - headerHeight;
	setTimeout(function(){
		$('body,html').stop().animate({scrollTop:position}, 500);
		target.addClass('is_open');
		target.find(accordion_body).show();
	}, 100);
});


