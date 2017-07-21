$(document).ready(function() {
  
  $('.menu-trigger').click(function() {
    $('nav ul').slideToggle(500);
  });//end slide toggle

  var $menu = $("#menu");
  $(window).scroll(function(){
      if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
          $menu.removeClass("default").addClass("fixed");
      } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
          $menu.removeClass("fixed").addClass("default");
      }
  });
  
  $(window).resize(function() {		
		if (  $(window).width() > 500 ) {			
			$('nav ul').removeAttr('style');
		 }
	});//end resize

	 $(".navbar ul a").mPageScroll2id();

	 ///slider

    ////////////fix menu

    var $menu = $("#menu");
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
            $menu.removeClass("default").addClass("fixed");
        } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
            $menu.removeClass("fixed").addClass("default");
        }
    });//scroll 

   $('.slide-cont').slick({

			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 4000,

   });
///valid
    $("#js-register-form").validate({

        rules: {
            form_name: {
                required: true
            },
            form_email: {
                required: true,
                email: true
            },
            form_textarea: {
                required: true,
                minlength: 2
            },
            
        },
        
        focusCleanup: true,
        focusInvalid: false,
        invalidHandler: function(event, validator) {
            $(".js-form-message").text("Исправьте пожалуйста все ошибки.");
        },
        onkeyup: function(element) {
            $(".js-form-message").text("");
        },
        errorPlacement: function(error, element) {
            return true;
        },
        errorClass: "form-input_error",
        validClass: "form-input_success"
    });
///end valid

        bth.onmouseover = function(){btres.style.background = '#7884AD'};
        bth.onmouseout = function(){btres.style.background = ''};
        bth2.onmouseover = function(){btres2.style.background = '#49CBF3'};
        bth2.onmouseout = function(){btres2.style.background = ''};
        bth3.onmouseover = function(){btres3.style.background = '#7884AD'};
        bth3.onmouseout = function(){btres3.style.background = ''};


});//end ready