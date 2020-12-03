window.onload = function(){
	const body = document.querySelector('body');
	const container = document.querySelector('.container');
	const burger = document.querySelector('.header__burger');
	const menu = document.querySelector('.drawer');

	const map = L.map('mapid', {
   			 preferCanvas: true,
   			 scrollWheelZoom: false,
		});
	L.tileLayer('http://vec{s}.maps.yandex.net/tiles?l=map&v=4.55.2&z={z}&x={x}&y={y}&scale=2&lang=en_EN', {
   		subdomains: ['01', '02', '03', '04'],
   		attribution: '<a http="yandex.ru" target="_blank">Yandex</a>',
    	reuseTiles: true,
    	updateWhenIdle: false}).addTo(map);
	map.options.crs = L.CRS.EPSG3395;
	map.setView([55.181081569549264,30.24587149999995], 16);
	var greenIcon = L.icon({
		    iconUrl: 'mark.png',
		    iconSize: [38, 45],
		});
	var marker = L.marker([55.181081569549264,30.24587149999995], {icon: greenIcon}).addTo(map);
	marker.bindPopup("<p>Vitebsk, Pravdy Street, 63A.</p>");

	burger.onclick = function(){
		body.classList.toggle('shown');
		container.classList.toggle('shown');
	    burger.classList.toggle('shown');
	    menu.classList.toggle('shown');
	    if(body.classList.contains('shown')){
			body.addEventListener("touchstart", startPos, false);
			body.addEventListener("touchend", moveEnd, false); }
		else{
			body.removeEventListener("touchstart", startPos, false);
			body.removeEventListener("touchend", moveEnd, false);
		}
	};

	const bodyShown = document.querySelector('body.shown');
	var touchPosition = new Object();
	touchPosition.sX = 0;
	touchPosition.eX = 0;
	var path = 0;
	function startPos(e){
		touchPosition.sX = e.touches[0].screenX;
		body.addEventListener("touchmove", movePos, false);
	};
	function movePos(e){
		touchPosition.eX = e.touches[0].screenX;
		path = touchPosition.eX - touchPosition.sX;
		if(path <= 0){ 
			container.style.transform = `translateX(calc(-250px)`;
			menu.style.transform = `translateX(calc(100vw)`; } 
		else {
		container.style.transform = `translateX(calc(-250px + ${path}px))`;
		menu.style.transform = `translateX(calc(100vw + (${path}/2)px))`; }
	};
	function moveEnd(e){
		if(path > 100){
			container.classList.remove('shown');
			body.classList.remove('shown');
			burger.classList.remove('shown');
			menu.classList.remove('shown');
			container.removeAttribute('style');
			menu.removeAttribute('style');
			body.removeEventListener("touchmove", movePos, false);
		}
		else{
			container.style.transform = "";
			menu.style.transform = "";
			container.removeAttribute('style');
			menu.removeAttribute('style');
			body.removeEventListener("touchmove", movePos, false);
			body.removeEventListener("touchstart", startPos, false);
			body.removeEventListener("touchend", moveEnd, false);
		}
	};
	
	const login = document.querySelector('.login');
	const form = document.querySelector('.login__form');
	const loginBtn = document.querySelector('.login__btn');
	const exit = document.querySelector('.login__exit');
	const signIns = document.querySelectorAll('#signIn');
	function loginOpen(){
		container.classList.remove('shown');
		burger.classList.remove('shown');
	    menu.classList.remove('shown');
	    login.classList.toggle('active');		
	}
	for (let buttonItem of signIns) {
  		buttonItem.addEventListener('click', loginOpen, false);
	};

	loginBtn.onclick = function () {
		body.classList.remove('shown');
		login.classList.remove('active');
	};

	const contactsBtns = document.querySelectorAll('#contact');
	const contacts = document.querySelector('.contacts');
	const contactsExit = document.querySelector('.contacts__exit');
	function contactOpen(){
		body.classList.toggle('shown');
		contacts.classList.toggle('shown');
		container.classList.remove('shown');
		burger.classList.remove('shown');
	    menu.classList.remove('shown');
	    map.invalidateSize();
	};
	function windowExit(){
		body.classList.remove('shown');
		contacts.classList.remove('shown');
		login.classList.remove('active');

	};
	for (let buttonItem of contactsBtns) {
  		buttonItem.addEventListener('click', contactOpen, false);
	};
	contactsExit.addEventListener('click', windowExit, false);
	exit.addEventListener('click', windowExit, false);
}