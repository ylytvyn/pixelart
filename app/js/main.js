'use strict';

(function($){
	$(document).ready(function() {
		// Code
		$('.triggers li').click(function() {
			$('.pixel').removeClass('active');
			$('.triggers li').removeClass('active');
			$('.' + $(this).data('trigger')).addClass('active');
			$(this).addClass('active');
		});
	});
})(jQuery);
