# PROYECTO BASE BIG
# Version : 1.0.0
# Site    : http://www.bigholding.com.co
  
# Author  : WM Duberney
# Company : BIG (http://www.bigholding.com.co)

$(document).ready ->
	$('.background').slick
		autoplay: true
		autoplaySpeed: 4000
		dots: true
		infinite: true
		slidesToShow: 1
		adaptiveHeight: true

	path = window.location.pathname.split('/').pop()
	if path == ''
	  path = 'index.html'
	target = $('.nav li a[href="' + path + '"]')
	target.addClass 'active'