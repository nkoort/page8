// $(document).ready(function () {
// 	$('.header__burger').click(function (event) {
// 		$('.header__burger, .header__link').toggleClass('active');
// 	});
// });

// // span-sotial

// $(document).ready(function () {
// 	$('.span-sotial').click(function (event) {
// 		$('.span-sotial, .header__top-right-sotial, .header__top-right-sotials').toggleClass('active');
// 	});
// });

// span-menu

// $(document).ready(function () {
// 	$('.link').click(function (event) {
// 		$('.link').toggleClass('active');
// 	});
// });
// $(document).ready(function () {
// 	$('.span-menu').click(function (event) {
// 		$('.header__menu-search').toggleClass('d-active');
// 	});
// });

$(document).ready(function () {
	$(".link").click(function () {
		$(".link, .block3__item").removeClass('active');
		$(this).toggleClass('active');
	});
});