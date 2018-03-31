(function () {
	'use strict';
	angular.module("FYProject", []);

	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
  		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    		document.getElementById("headingTag").style.top = "0";
  		} else {
    		document.getElementById("headingTag").style.top = "-50px";
  		}
}
	
})();