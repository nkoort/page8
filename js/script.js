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

// .mobile
// .ident
// .interior
// .ui

$(document).ready(function () {
	$(".all").click(function () {
		$(".link").removeClass('active');
		$(".item").removeClass('active');
		$(this).toggleClass('active');
		$('.item.all').toggleClass('active');
	});
});
$(document).ready(function () {
	$(".ident").click(function () {
		$(".link").removeClass('active');
		$(".item").removeClass('active');
		$(this).toggleClass('active');
		$('.item.ident').toggleClass('active');
	});
});
$(document).ready(function () {
	$(".mobile").click(function () {
		$(".link").removeClass('active');
		$(".item").removeClass('active');
		$(this).toggleClass('active');
		$('.item.mobile').toggleClass('active');
	});
});
$(document).ready(function () {
	$(".interior").click(function () {
		$(".link").removeClass('active');
		$(".item").removeClass('active');
		$(this).toggleClass('active');
		$('.item.interior').toggleClass('active');
	});
});
$(document).ready(function () {
	$(".ui").click(function () {
		$(".link").removeClass('active');
		$(".item").removeClass('active');
		$(this).toggleClass('active');
		$('.item.ui').toggleClass('active');
	});
});