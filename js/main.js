/* табы */

$('.card').on('click', function() {
	let currTab = $(this).parent().index();

	$('.card').removeClass('card-active');
	$(this).addClass('card-active');

	$('.tab-content').removeClass('active');
	$('.tab-content').eq(currTab).addClass('active');
})

/* гамбургер-меню */
$('.hamburger').on('click', () => {
	$('.head__menu').toggle();
})

$('.menu-close').on('click', () => {
	$('.head__menu').hide();
});

/* Параллакс */

let scene = document.getElementById('scene');
let parallaxInstance = new Parallax(scene);

/*  слайдер */

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  spaceBetween: 50,
  slidesPerView: 3,
  loop: true,
  stopOnLastSlide : false,
  autoplay : {
	  delay: 2000
  }
});

/* Подключение карт */

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
     // Создание карты.
     let myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.76, 37.64],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 7,
		controls : ['zoomControl', 'geolocationControl']
    });
}

/* Валидация */

$.validator.addMethod('regex', (value, element, regexp) => {
	let regExsp = new RegExp(regexp);
	return regExsp.test(value);	
},  'Пожалусйтва, проверьте ваши введенные данные');

$('form').validate({
	rules : {
		firstName: {
			required: true,
			regex: "[A-Za-z]{1, 32}"
		},
		phoneNumber: {
			digits: true,
			required: true,
			minlength: 10,
			maxlength: 11,
			regex: "[0-9]+"
		}
	},
	messages : {
		firstName : 'Введите имя правильно',
		phoneNumber: 'Введите ваш номер'
	}
})
