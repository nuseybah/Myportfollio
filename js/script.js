// header
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
	header.classList.toggle("sticky", window.scrollY > 100);
});
// menu
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');



window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');

	menu.onclick = () => {
		menu.classList.toggle('bx-x');
		navlist.classList.toggle('open');
	};
};
