	//Sticky Nav
	$(window).scroll(function(){
      if($(this).scrollTop()>=100){
      	$('.navbar-header').addClass('fixed-navbar');
      }else{
      	$('.navbar-header').removeClass('fixed-navbar');
      }
	});
	
	// navbar addclass for navbar toggle
	$('.navbar-toggler').click(function(){
		$(this).toggleClass('active')
	});

	//Scroll Spy		
		$('body').scrollspy({ target: '.navbar-header' });
		 $(window).on('load', function(e){
		  $('#preloader-status').fadeOut();
		  $('#preloader').delay(350).fadeOut('slow');
		  $('body').delay(350).css({'overflow':'visible'});
		})
		 $('body').scrollspy({ target: ".navbar-header'" })



	// Slick slider	index version

	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow:3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		height:true,
		centerMode: true,
		centerPadding: '0px',
		focusOnSelect: true,
		variableWidth: false,
		arrows: true

	});
   

	

	//Video Popup	
		$('.video-iframe').magnificPopup({
			type: 'iframe',
			iframe: {
				markup: '<div class="mfp-iframe-scaler">' +
					'<div class="mfp-close"></div>' +
					'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
					'</div>',
				patterns: {
					youtube: {
						index: 'youtube.com/',
						id: 'v=',
						src: 'http://www.youtube.com/embed/%id%?autoplay=1'
					}
				},
				srcAction: 'iframe_src'
			}
		});	

	
   //jQuery Counter	
		$('.counter').counterUp({
			delay: 10,
			time:1000
		});	

			// Bolg carousel index-04 	
	$("#bolg-carousel-01").owlCarousel({
		items :1,
		lazyLoad : true,
		navigationText :["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		slideSpeed: 500,
		paginationSpeed: 1000,
		rewindSpeed: 1000,	
		navigation :true,
		pagination: false,
		responsive:false
    });