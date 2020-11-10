window.onload = function(){
	let body = document.querySelector('body');
	let container = document.querySelector('.container');
	let header__burger = document.querySelector('.header__burger');
	let header__menu = document.querySelector('.header__menu');
	let header__nav = document.querySelector('.header__nav');
	let header__signIn = document.querySelector('.header__sign-in');
	let header__btn = document.querySelector('.header__btn');

	header__burger.onclick = function(){
		body.classList.toggle('shown');
		container.classList.toggle('shown');
	    header__burger.classList.toggle('shown');
	    header__menu.classList.toggle('shown');
	};

	header__nav.onclick = function () {
		body.classList.remove('shown');
		container.classList.remove('shown');
		header__burger.classList.remove('shown');
	    header__menu.classList.remove('shown');
	};

	header__btn.onclick = function() {
		body.classList.remove('shown');
		container.classList.remove('shown');
		header__burger.classList.remove('shown');
	    header__menu.classList.remove('shown');
	};

	var touchPosition = new Object();
	touchPosition.sX = 0;
	touchPosition.eX = 0;
	body.addEventListener("touchstart", function (e) { 
		touchPosition.sX = e.touches[0].screenX;
	 }, false);
	// body.addEventListener("touchmove", function (e) { 
	// 	touchPosition.eX = e.touches[0].screenX;
	//  }, false);
	body.addEventListener("touchmove", function (e) { 
		touchPosition.eX = e.touches[0].screenX;
		if(touchPosition.eX > touchPosition.sX){
			body.classList.remove('shown');
			container.classList.remove('shown');
			header__burger.classList.remove('shown');
	   		header__menu.classList.remove('shown');
		}
		else if(touchPosition.eX <= touchPosition.sX){
			body.classList.add('shown');
			container.classList.add('shown');
	   		header__burger.classList.add('shown');
	   		header__menu.classList.add('shown');
		}
	 }, false);

	let login = document.querySelector('.login');
	let login__form = document.querySelector('.login__form');
	let login__btn = document.querySelector('.login__btn');
	let login__exit = document.querySelector('.login__exit');

	header__signIn.onclick = function(){
		body.classList.remove('shown');
		container.classList.remove('shown');
		header__burger.classList.remove('shown');
	    header__menu.classList.remove('shown');
	    login.classList.toggle('active');
	};

	login__btn.onclick = function () {
		body.classList.remove('shown');
		login.classList.remove('active');
	};

	login__exit.onclick = function() {
		body.classList.remove('shown');
		login.classList.remove('active');
		login__form.reset();
	};

	
}