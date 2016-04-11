$(function(){
	var win = $( window ),
		height = $( window).height();

	//console.log(height);

	//win.resize(function() {
		//var winwit = win.width()
		//console.log(winwit)
	//});
	win.on('scroll',function(){
		var winScroll = $(this).scrollTop();
		//console.log(wScroll)
		var hero = $('.hero');
		// 	heroHeight= hero.height();
		if (winScroll > hero.offset().top - height) {
			hero.css({"background-position":"50% " + ( - (winScroll/2) - hero.offset().top) +"px"});
		}
	});


	var boton = $(".click");
	var close = $(".close");
	//var i=0;

	$(boton).each(function(i) {
		i++;
		$(this).on("click", function() {
			$(".view-"+i).addClass('visible');
		});
		close.on('click',function(){
			$('.large__view').removeClass('visible');
		});
	});
});
