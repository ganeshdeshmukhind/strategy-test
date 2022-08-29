
		var ee = new EventEmitter();
		var scrollStartListener = function (slideNumber) {
			console.log("Scrolling to " + slideNumber);
		}
		var scrollEndListener = function (slideNumber) {
			console.log("Scrolling End. Now at section " + slideNumber);
		}
		ee.addListener('scrollStart', scrollStartListener);
		ee.addListener('scrollEnd', scrollEndListener);
		var smartscroll = $.smartscroll({
			sectionWrapperSelector: ".section-wrapper",
			sectionClass: "section",
			keepHistory: false,autoHash: false,
			eventEmitter: ee
		});
		console.log(smartscroll);


		$('#owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: false,
  responsive: {
    0: {
      items: 1.6
    },
    575: {
      items: 2.6
    },
    640: {
      items: 3.6
    },
    991: {
      items: 4.4
    }
  }
})

//start for fadeIn effect for sections
$.fn.isInViewport = function () {
	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight() / 1.25;
	var viewportTop = $(window).scrollTop();
	var viewportHalf = viewportTop + $(window).height() / 1.25;
	return elementBottom > viewportTop && elementTop < viewportHalf;
};
var counted = 0;
$(window).on('load resize scroll', function () {
	$('.section').each(function () {
		$(this).find(".title").text($(this).data("title"));
		if ($(this).isInViewport()) {
			$(this).addClass("in-view");
		} else {
			$(this).removeClass("in-view");
		}
	});
});
//end for fadeIn effect for sections

		$(".requestOTP").click(function(){
			$(".form-1").hide();
			$(".form-2").fadeIn();
		})