window.onload = function(){
	let body = document.querySelector('body');
	let container = document.querySelector('.container');
	let header__burger = document.querySelector('.header__burger');
	let header__menu = document.querySelector('.drawer');
	let drawer__nav = document.querySelector('.drawer__nav');
	let header__signIn = document.querySelector('.header__sign-in');
	let drawer__signIn = document.querySelector('.drawer__sign-in');
	let drawer__btn = document.querySelector('.drawer__btn');
	let header__btn = document.querySelector('.header__btn');

	header__burger.onclick = function(){
		body.classList.toggle('shown');
		container.classList.toggle('shown');
	    header__burger.classList.toggle('shown');
	    header__menu.classList.toggle('shown');
	    if(body.classList.contains('shown')){
			body.addEventListener("touchstart", startPos, false);
			body.addEventListener("touchend", moveEnd, false); }
		else{
			body.removeEventListener("touchstart", startPos, false);
			body.removeEventListener("touchend", moveEnd, false);
		}
	};

	drawer__nav.onclick = function () {
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

	drawer__btn.onclick = function(){
		body.classList.remove('shown');
		container.classList.remove('shown');
		header__burger.classList.remove('shown');
	    header__menu.classList.remove('shown');
	}

	let bodyShown = document.querySelector('body.shown');
	var touchPosition = new Object();
	touchPosition.sX = 0;
	touchPosition.eX = 0;
	var path = 0;
	function startPos(e){
		touchPosition.sX = e.touches[0].screenX;
		body.addEventListener("touchmove", movePos, false);
	}
	function movePos(e){
		touchPosition.eX = e.touches[0].screenX;
		path = touchPosition.eX - touchPosition.sX;
		if(path <= 0){ 
			container.style.transform = `translateX(calc(-250px)`;
			header__menu.style.transform = `translateX(calc(100vw)`; } 
		else {
		container.style.transform = `translateX(calc(-250px + ${path}px))`;
		header__menu.style.transform = `translateX(calc(100vw + (${path}/2)px))`; }
	}
	function moveEnd(e){
		if(path > 100){
			container.classList.remove('shown');
			body.classList.remove('shown');
			header__burger.classList.remove('shown');
			header__menu.classList.remove('shown');
			container.removeAttribute('style');
			header__menu.removeAttribute('style');
			body.removeEventListener("touchmove", movePos, false);
		}
		else{
			container.style.transform = "";
			header__menu.style.transform = "";
			container.removeAttribute('style');
			header__menu.removeAttribute('style');
			body.removeEventListener("touchmove", movePos, false);
		}
	}
	// if(body.classList.contains('shown')){
	// bodyShown.addEventListener("touchstart", startPos, false);
	// bodyShown.addEventListener("touchend", moveEnd, false); }
	
	let login = document.querySelector('.login');
	let login__form = document.querySelector('.login__form');
	let login__btn = document.querySelector('.login__btn');
	let login__exit = document.querySelector('.login__exit');

	header__signIn.onclick = function(){
		container.classList.remove('shown');
		header__burger.classList.remove('shown');
	    header__menu.classList.remove('shown');
	    login.classList.toggle('active');
	};

	drawer__signIn.onclick = function(){
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