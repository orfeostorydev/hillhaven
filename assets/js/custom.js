//navbar js 
	function darken_screen(yesno){
			if( yesno == true ){
				document.querySelector('.screen-darken').classList.add('active');
			}
			else if(yesno == false){
				document.querySelector('.screen-darken').classList.remove('active');
			}
		}
		
	function close_offcanvas(){
		darken_screen(false);
		document.querySelector('.mobile-offcanvas.show').classList.remove('show');
		document.body.classList.remove('offcanvas-active');
	}

	function show_offcanvas(offcanvas_id){
		darken_screen(true);
		document.getElementById(offcanvas_id).classList.add('show');
		document.body.classList.add('offcanvas-active');
	}

	document.addEventListener("DOMContentLoaded", function(){
		document.querySelectorAll('[data-trigger]').forEach(function(everyelement){
			
			let offcanvas_id = everyelement.getAttribute('data-trigger');
			
			everyelement.addEventListener('click', function (e) {
				e.preventDefault();
	        	show_offcanvas(offcanvas_id);
	  			
			});
		});

		document.querySelectorAll('.btn-close').forEach(function(everybutton){
			
			everybutton.addEventListener('click', function (e) {
				e.preventDefault();
	        	close_offcanvas();
	  		});
		});

		document.querySelector('.screen-darken').addEventListener('click', function(event){
			close_offcanvas();
		});
		
    }); 

	// DOMContentLoaded  end
	let items = document.querySelectorAll('#recipeCarousel .carousel-item')

		items.forEach((el) => {
			const minPerSlide = 4
			let next = el.nextElementSibling
			for (var i=1; i<minPerSlide; i++) {
				if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
});



//slick slider
$(document).ready(function(){

        var $counter = $('.gallery-wraper-slide-count');
        
        $('.gallery-wraper').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
            var i = (currentSlide ? currentSlide : 0) + 1;
            $counter.text(i + ' / ' + slick.slideCount);
        });

      $('.gallery-wraper').slick({ 
        centerPadding: '400px',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        speed: 300,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: false,
        centerMode: true,
        responsive: [
          {
            breakpoint: 1266,
            settings: {
             centerPadding: '320px',
            },
          },
          {
            breakpoint: 1101,
            settings: {
              centerPadding: '250px'
            },
          },
          {
            breakpoint: 800,
            settings: {
               centerPadding: '200px'
            }
          },
          {
            breakpoint: 650,
            settings: {
               centerPadding: '00px'
            }
          },
        ],

   
      }).on('beforeChange', function(event, slick, currentSlide){
	   $('.gallery-wraper .gallery-item').removeClass('play');
	   $('.gallery-wraper .gallery-item video').get(0).pause();
	   
	}).on('afterChange', function(event, slick, currentSlide){
	      var videoImageHeight = $('.gallery-wraper .slick-current.slick-active img').height();
         $('.gallery-wraper .slick-current.slick-active video').css({
           'height':  videoImageHeight+'px'
        });
	});
	
	
	
			var videoImageHeight = $('.gallery-wraper .slick-current.slick-active img').height();
				$('.gallery-wraper .slick-current.slick-active video').css({
					'height':  videoImageHeight+'px'
				});
	 

});
  
  
  
  
 //slick slider
		$(document).ready(function(){
        
        var $counter = $('.virtual-tours-slide-count');
        
        $('.virtual-tours-wraper').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
            var i = (currentSlide ? currentSlide : 0) + 1;
            $counter.text(i + ' / ' + slick.slideCount);
        });

      $('.virtual-tours-wraper').slick({
       centerPadding: '300px',
        slidesToShow:1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,
        speed: 300,
        centerMode: true,
       responsive: [
          {
            breakpoint: 990,
            settings: {
               centerPadding: '100px'
            }
          },
          {
            breakpoint: 650,
            settings: {
               centerPadding: '50px'
            }
          },
        ],
     
    }).on('beforeChange', function(event, slick, currentSlide){
	   $('.virtual-tours-wraper .virtual-item').removeClass('play');
	  
	   $('.virtual-tours-wraper .virtual-item video').get(0).pause();
	}).on('afterChange', function(event, slick, currentSlide){
	      var videoImageHeight2 = $('.virtual-tours-wraper .slick-current.slick-active img').height();
         $('.virtual-tours-wraper .slick-current.slick-active video').css({
           'height':  videoImageHeight2+'px'
        });
	});

 var videoImageHeight2 = $('.virtual-tours-wraper .slick-current.slick-active img').height();
         $('.virtual-tours-wraper .slick-current.slick-active video').css({
           'height':  videoImageHeight2+'px'
        });
 });
  
  


  
//articles-slider-wraper
    // $(document).ready(function(){
    //   $('.articles-slider-wraper').slick({
    //     centerPadding: '10px',
    //     slidesToShow:4,
    //     slidesToScroll: 4,
    //     dots: false,
    //     arrows:false,
    //     infinite: true,
    //     speed: 300,
    //   // centerMode: true,
    //     autoplay: true,
    //     autoplaySpeed: 5000, 
    //     accesibility: true,
    //     draggable: true,
    //     swipe: true,
    //     touchMove: true,
    //     responsive: [
    //       {
    //         breakpoint: 991,
    //         settings: {
    //           slidesToShow: 3,
    //         }
    //       },
    //       {
    //         breakpoint: 767,
    //         settings: {
    //           slidesToShow: 2,
    //         }
    //       }
    //     ]
    //   });

    // });
    

//articles-slider-wraper
    $(document).ready(function(){
      $('.sitplan_slider_wraper').slick({
       centerPadding: '0px',
        slidesToShow:1,
        slidesToScroll: 1,
        dots: true,
        arrows:false,
        infinite: true,
        speed: 300,
        centerMode: true,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      });
    });
    
//Smart Home Features
    $(document).ready(function(){
      $('.smart-home-features-wraper').slick({
       centerPadding: '0px',
        slidesToShow:1,
        slidesToScroll: 1,
        dots: true,
        arrows:false,
        infinite: true,
        speed: 300,
        centerMode: true,
        adaptiveHeight: true,
        mobileFirst: true,
       responsive: [
        {
           breakpoint: 767,
           settings: "unslick"
        }
     ],
      });
    });
    


$(document).ready(function() {


  $(document).on('click', '.siteplan-tabs li',function (e) {
    e.preventDefault();
  })


  var bulletSelector = ".sitplan_slider_wraper .slick-dots li button";
  var listItemSelector = ".siteplan-tabs li";

  function handleBulletClick() {
    var correspondingIndex = $(this).attr("index");
    $(listItemSelector).removeClass('active');
    $(listItemSelector + "[index='" + correspondingIndex + "']").addClass("active");
  }

  function handleListItemClick() {
    var correspondingIndex = $(this).attr("index");
    $(bulletSelector).removeClass('slick-active');
    $(bulletSelector + "[index='" + correspondingIndex + "']").trigger("click");
  }

  setTimeout(function() {
    $(listItemSelector).first().addClass('active');
    
    $(bulletSelector).each(function(index) {
      var bulletIndex = index + 1;
      $(this).attr("index", bulletIndex);
      $(this).click(handleBulletClick);
    });

    $(listItemSelector).each(function(index) {
      var listItemIndex = index + 1;
      $(this).attr("index", listItemIndex);
      $(this).click(handleListItemClick);
    });
  }, 1000);
  
  
  setInterval(function () { 
    var activeBullet= $('.sitplan_slider_wraper .slick-dots li.slick-active button').attr('index');
//    $(bulletSelector + "[index='" + activeBullet + "']").trigger("click");
    
    $(listItemSelector).removeClass('active');
    $(listItemSelector + "[index='" + activeBullet + "']").addClass("active");
    
  }, 700);

   
});



$('.sit-pan-wraper button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
  $('.sit-pan-wraper .slick-slider').slick('setPosition');
})



// search box

  $(function () {
      $('.search-btn').on('click', function(event) {
          $('.search-wraper').addClass('active');
      });

      $('.close-btn').on('click', function(event) {
          $('.search-wraper').removeClass('active');
      });
  });


// Video Play 

$(document).ready(function(){ 

  $(document).on('click','.gallery-wraper .slick-active .video-cover-image', function(event) { 
   //  $(this).closest('.slick-active.gallery-item').find('.video-item').addClass('play');
     $('.slick-active.gallery-item').addClass('play');
		 $(this).closest('.gallery-item').find('video').get(0).load();

		$(this).closest('.slick-active').find('video').get(0).play();
  });
  
  
  $(document).on('click','.virtual-tours-wraper .slick-active .video-cover-image', function(event) { 
   //  $(this).closest('.slick-active.gallery-item').find('.video-item').addClass('play');
     $('.slick-active.virtual-item').addClass('play');
		 $(this).closest('.virtual-item').find('video').get(0).load();

		$(this).closest('.slick-active').find('video').get(0).play();
  });

});

// Unit Type plan
 
 $(document).ready(function(){
    $('.floor-plan').on('click', function(event) {
      var $parentItem = $(this).closest('.unite-type-wrap-item');
      $parentItem.toggleClass('active');
      $('.unite-type-wrap-item').not($parentItem).removeClass('active');
    });
  });
  
  
// footer bottom
$(document).ready(function(){ 
  $('.footer-close-btn').on('click', function(event) {
      $('.footer-bottom-section').hide();
      });
});



$(document).ready(function(){
// smart home hover features 
    $(".smart-wraper-content").on("mouseover", function() {
      $(".smart-home-features-wraper").addClass("hover");
      $(".smart-wraper-content").removeClass("active");
      $(this).closest('.smart-home-features-item').addClass("active");
    }).on("mouseleave", function() {
      $(".smart-home-features-wraper").removeClass("hover");
       $(".smart-home-features-item").removeClass("active");
    });


// mOBILE dROPDOWN HANDLE

    $(document).on("click",'.hero-bottom-section .dropdown-item', function() {
            var currentDropdownText =  $(this).text();
            
            $('.dropdown button').text(currentDropdownText);
    });
});

$(document).ready(function(){
    $(window).on('resize', function() {
		var videoImageHeight = $('.gallery-wraper .slick-current.slick-active img').height();
			$('.gallery-wraper .slick-current.slick-active video').css({
				'height':  videoImageHeight+'px'
			}); 
		});
	});

   // Footer nav
    if ($(window).width() <= 768) {

      
      $('.footer-mb-nav h3').on('click', function(event) {
          var myparent=$(this).parents('.footer-mb-nav');
          myparent.find('ul').slideToggle();
          myparent.find('ul').toggleClass('active');
      });
      $('.sit-plan-section .slick-dots,.smart-home-features-wraper .slick-dots').hide();

      //content reveal 
      $(".mb-location-top").addClass("content_reveal_text");
      $(".content_reveal_btn").show();

      $('.content_reveal_btn').on('click', function(event) {
        var myparent=$(this).parents('.locaion-content-wraper');
        myparent.find('.mb-location-top').toggleClass('content_reveal_text');
        myparent.find('.mb-location-top').fadeSlide('slow');
      });
   }else{

      //content reveal 
      $(".content_reveal_btn").hide();
      $(".mb-location-top").removeClass("content_reveal_text");
   }


$(document).ready(function(){

     $('.download-form button').on('click', function(event) {
        $(".florplan-download-modal .btn-close").trigger("click").fadeOut("slow");

      setTimeout(() => {
      $(".thanks-modal .btn-close").trigger("click").fadeOut("slow");
        var url = $('.thanks-modal a').attr('href'); 
            window.open(url, '_blank');
        }, "3000");
     });

  });

// Window Scroll
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();  

    if (scroll > 500) {
        $(".hero-bottom-section").addClass("hero-sticky");
    } else {
       $(".hero-bottom-section").removeClass('hero-sticky');
    }
});