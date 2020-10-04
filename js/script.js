

jQuery(document).ready(function(){

	jQuery(".owl-carousel").owlCarousel({
		
		'items':1,
		'autoplay':true,
		'loop':true,
		'nav':true
		
		
	});
	
	jQuery(".counter").countUp({
		
		'time':3000,
		'delay':30
		
	});
	jQuery(".header-menu ul li").hover(function(){
		
		
		jQuery(this).children("ul").slideToggle();
		
		
	});
	
	jQuery(".owl-carousel").owlCarousel({
		
		'items':3,
		'autoplay':true,
		'loop':true,
		'nav':true
		
		
	});
	
	jQuery('.slider').slick({
	  dots: true,
	  infinite: false,
	  arrows:false,
	  autoplay:false,
	  autoplaySpeed:3000,
	  slidesToShow:3,
	  slidesToScroll: 4,
	  responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			dots: true
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
	});
	
	jQuery(window).scroll(function(){
		
		var utd =jQuery(window).scrollTop();
		
		if(utd>80){
			
			jQuery(".header-area").addClass("fixed");
		}
		else{
			
			jQuery(".header-area").removeClass("fixed");
		}
	
	});
	
	jQuery(".scrollup").click(function(){
		
		jQuery("html").animate({'scrollTop':'0'},1000);
		
		return false;

	});
	
	AOS.init();
	
	
	
	
	
});


	