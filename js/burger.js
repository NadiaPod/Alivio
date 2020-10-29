window.onload = function(){
	let header__burger = document.querySelector('.header__burger');
	let header__menu = document.querySelector('.header__menu');
	let header__nav = document.querySelector('.header__nav');

	header__burger.onclick = function(){
	    header__burger.classList.toggle('shown');
	    header__menu.classList.toggle('shown');
	}

	header__list.onclick = function () {
	    header__nav.classList.remove('shown');
	}
}