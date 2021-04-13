//Toggle between professional and personal mode
const introWrapper = document.querySelector('.intro');
const introContent = document.querySelector('.intro-content');
const landing = document.querySelector('.landing');
const introAside = document.querySelector('#intro-aside');

const personalMain =
	'<div class="intro-content fade-in">Ashley is a mickey waffle connoisseur and Sweet Potatos biggest simp.</div>';

const professionalAside =
	'<div id="intro-aside" class="fade-in">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, tempora!</div>';

const professionalMain =
	'<div class="intro-content fade-in">A. Goldmintz is a <span class="lime">multi-disciplinary experience designer </span> based in Chicago.</div>';

const personalAside =
	'<div id="intro-aside" class="fade-in">Here is <em>something personal</em> about me as an aside.</div>';

const toggleIntroText = () => {
	if (introWrapper.classList.contains('professional')) {
		introWrapper.classList.remove('professional');
		introWrapper.classList.add('personal');
		introWrapper.innerHTML = personalMain;
		introAside.innerHTML = personalAside;
	} else if (introWrapper.classList.contains('personal')) {
		introWrapper.classList.remove('personal');
		introWrapper.classList.add('professional');
		introWrapper.innerHTML = professionalMain;
		introAside.innerHTML = professionalAside;
	}
};

//  ***SCROLL BEHAVIOR*** //

// Reveal top nav links when page is scrolled //
const navLinksWrapper = document.querySelector('.nav-links-wrapper');
const logoLoad = document.querySelector('.logo-load');
const logoScroll = document.querySelector('.logo-scroll');
const nav = document.querySelector('nav');

let intViewportHeight = window.innerHeight;

// if (y >= 535) {

var revealNav = () => {
	var y = window.pageYOffset;
	if (y >= intViewportHeight / 75) {
		logoLoad.style.display = 'none';
		logoScroll.style.display = 'block';
		nav.style.justifyContent = 'space-between';
		navLinksWrapper.classList.add('show-nav');
	}
	if (y < 535) {
		logoLoad.style.display = 'block';
		logoScroll.style.display = 'none';
		nav.style.justifyContent = 'flex-end';
		navLinksWrapper.classList.remove('show-nav');
	}
	console.log(intViewportHeight);
	console.log(window.pageYOffset);
};

/* justify-content: space-between; */

window.addEventListener('scroll', revealNav);

// Toggle Body Scroll When Lightbox is Open (otherwise double scrollbars)
const modalLink = document.querySelectorAll('.modal-link');

const hideBodyScroll = () => {
	document.body.classList.add('hide-scroll');
	console.log(document.body.classList);
};

const returnBodyScroll = () => {
	document.body.classList.remove('hide-scroll');
	console.log(document.body.classList);
};

for (let i = 0, a; (a = modalLink[i]); i++) {
	a.addEventListener('click', hideBodyScroll, false);
}

// Prevent refresh When User Closes Modal (otherwise, user is brought to top of page)
const closeModal = document.querySelectorAll('.close-modal');

const anchorClose = (e) => {
	e.preventDefault();
	window.history.back();
};

for (let i = 0, a; (a = closeModal[i]); i++) {
	a.addEventListener('click', anchorClose, false);
	a.addEventListener('click', returnBodyScroll, false);
}

//add active class to links when anchor is visible
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

const changeNavLinkState = () => {
	//remove resume button from length
	let index = sections.length;

	while (--index && window.scrollY < sections[index].offsetTop) {}

	navLinks.forEach((link) => link.classList.remove('active-nav'));
	navLinks[index].classList.add('active-nav');
};

changeNavLinkState();
window.addEventListener('scroll', changeNavLinkState);
