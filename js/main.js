window.onload = function(){
	let header__burger = document.querySelector('.header__burger');
	let header__menu = document.querySelector('.header__menu');
	let header__nav = document.querySelector('.header__nav');
	let header__signIn = document.querySelector('.header__sign-in');
	let header__btn = document.querySelector('.header__btn');

	header__burger.onclick = function(){
	    header__burger.classList.toggle('shown');
	    header__menu.classList.toggle('shown');
	}

	header__nav.onclick = function () {
		header__burger.classList.remove('shown');
	    header__menu.classList.remove('shown');
	}

	header__btn.onclick = function() {
		header__burger.classList.remove('shown');
	    header__menu.classList.remove('shown');
	}

	let login = document.querySelector('.login');
	let login__form = document.querySelector('.login__form');
	let login__btn = document.querySelector('.login__btn');
	let login__exit = document.querySelector('.login__exit');

	header__signIn.onclick = function(){
		header__burger.classList.remove('shown');
	    header__menu.classList.remove('shown');
	    login.classList.toggle('active');
	}

	login__btn.onclick = function () {
		login.classList.remove('active');
	}

	login__exit.onclick = function() {
		login.classList.remove('active');
		login__form.reset();
	}



}