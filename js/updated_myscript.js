/*Making Navbar Sticky*/
	window.addEventListener('scroll', function(){

		var header = document.querySelector('header');
		header.classList.toggle('sticky',window.scrollY > 0);
	});

/*Trigger Toggle Navbar Menu*/
	function togglemenu(){
		var  menuToggle = document.querySelector('.toggle');
		var  menu = document.querySelector('.menu');
		menuToggle.classList.toggle('active');
		menu.classList.toggle('active');
	}

//----------- Links Add Active Class on click 	(Navbar & Featured and Latest Products Section)

	$('header ul li a').click(function(){

		$(this).parent().addClass('activeColor').siblings().removeClass('activeColor');
	});

	$('.container .card .content .size span').click(function(){

		$(this).addClass('activeColor').siblings().removeClass('activeColor');
	});

	$('.filterList ul li').click(function(){

		$(this).addClass('activeColor').siblings().removeClass('activeColor');
	});

//---------- Trigger Filter Product Gallery

	$('.list').click(function(){

		const value = $(this).attr('data-filter');
		if(value == 'all'){
			$('.itemBox').show('1000');
			$('.hidden').hide('100');
		}else{
			$('.itemBox').not('.'+value).hide(1000);
			$('.itemBox').filter('.'+value).show(1000);
		}
	})

//-----------	Show Hidden Items and Hide it		(Work Section)
	var count_click = 0;
	$('.show-more').click(function(){
		count_click++;
		if(count_click%2 != 0){	////////////Show Divs
			$(".show-more").html("Show Less");
			$('.smallContainer .row .hidden').fadeIn(1500);
		}
		else{	//////Hide Divs
			$(".show-more").html("Show More");
			$('.smallContainer .row .hidden').fadeOut(1000);
		}
	});

//----------- Trigger To Top Button

	$(window).scroll(function() {
	    if ($(this).scrollTop()) {
	        $('#toTop').fadeIn();
	    } else {
	        $('#toTop').fadeOut();
	    }
	});

	$("#toTop").click(function () {
	   //1 second of animation time
	   //html works for FFX but not Chrome
	   //body works for Chrome but not FFX
	   //This strange selector seems to work universally
	   $("html, body").animate({scrollTop: 0}, 40);
	});

//----------- Testimonials Slider

	/*<!-- Initialize Swiper -->*/

    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: true,
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
    });
