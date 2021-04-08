//Toggle between professional and party mode
const introWrapper = document.querySelector('.intro');
const introContent = document.querySelector('.intro-content');
const landing = document.querySelector('.landing');
const introAside = document.querySelector('#intro-aside');

const personalMain =
	'<div class="intro-content" >Ashley is a mickey waffle connoisseur and Sweet Potatos biggest simp. </div>';

const professionalMain =
	'<div class="intro-content" > A. Goldmintz is a multi-disciplinary experience designer based in Chicago!</div>';

const personalAside =
	'<div id="intro-aside" >Here is something personal about me as an aside. </div>';

const professionalAside =
	'<div id="intro-aside"> 10 years experience making stuff.</div>';

const toggleIntroText = () => {
	if (introWrapper.classList.contains('professional')) {
		console.log('pro to pers');
		introWrapper.classList.remove('professional');
		introWrapper.classList.add('personal');
		introWrapper.innerHTML = personalMain;
		introAside.innerHTML = personalAside;
	} else if (introWrapper.classList.contains('personal')) {
		console.log('pers to pro');
		introWrapper.classList.remove('personal', 'fade-in');
		introWrapper.classList.add('professional', 'fade-in');
		introWrapper.innerHTML = professionalMain;
		introAside.innerHTML = professionalAside;
	}
};

//////////////////////////////
// Reveal nav links when page is scrolled
const navLinksWrapper = document.querySelector('.nav-links-wrapper');

var revealNav = () => {
	var y = window.pageYOffset;
	if (y >= 535) {
		navLinksWrapper.classList.add('show-nav');
	}
	if (y < 535) {
		navLinksWrapper.classList.remove('show-nav');
	}
};

window.addEventListener('scroll', revealNav);

// window.onscroll = () => {
// 	console.log('top: ' + window.pageYOffset);
// };

// window.onscroll = () => console.log('scroll');

//////////////////////////////
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

// Prevent Refresh When User Closes Modal (otherwise, user is brought to top of page)
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
	let index = sections.length;

	while (--index && window.scrollY + 200 < sections[index].offsetTop) {}

	navLinks.forEach((link) => link.classList.remove('active-nav'));
	navLinks[index].classList.add('active-nav');
};

changeNavLinkState();
window.addEventListener('scroll', changeNavLinkState);
