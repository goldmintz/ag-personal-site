//Toggle between professional and personal mode
const introWrapper = document.querySelector('.intro');
const introContent = document.querySelector('.intro-content');
const landing = document.querySelector('.landing');
const introAside = document.querySelector('#intro-aside');

const personalMain = `<div class="intro-content fade-in">Ashley is a <span class="pink">mickey waffle connoisseur</span> and Sweet Potato's biggest simp.</div>`;

const professionalAside = `<div id="intro-aside" class="fade-in">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, tempora!</div>`;

const professionalMain = `<div class="intro-content fade-in">A. Goldmintz is a <span class="lime">multi-disciplinary developer </span> based in Chicago.</div>`;

const personalAside = `<div id="intro-aside" class="fade-in">Here is <em>something personal</em> about me as an aside.</div>`;

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
const logoLoaded = document.querySelector('.logo-loaded');
const logoScroll = document.querySelector('.logo-scroll');
const nav = document.querySelector('nav');

let intViewportHeight = window.innerHeight;

var revealNav = () => {
	var y = window.pageYOffset;

	console.log('revealfun running');
	if (y >= intViewportHeight / 75) {
		logoLoaded.style.display = 'none';
		logoScroll.style.display = 'block';
		nav.style.justifyContent = 'space-between';
		navLinksWrapper.classList.add('show-nav');
	}
	if (y < 535) {
		logoLoaded.style.display = 'block';
		logoScroll.style.display = 'none';
		nav.style.justifyContent = 'flex-end';
		navLinksWrapper.classList.remove('show-nav');
	}
};

if (screen.width > 768) {
	window.addEventListener('scroll', revealNav);
}

// Uncheck/Close Hamburger Menu When Burger Link Clicked
const burgerMenuToggle = document.getElementById('menu-toggle');

const toggleMenu = () => {
	return (burgerMenuToggle.checked = !burgerMenuToggle.checked);
};

const closeMenu = () => {
	burgerMenuToggle.checked = false;
};

// Toggle Body Scroll When Lightbox is Open (otherwise double scrollbars)
const modalLink = document.querySelectorAll('.modal-link');

const hideBodyScroll = () => {
	document.body.classList.add('hide-scroll');
};

const returnBodyScroll = () => {
	document.body.classList.remove('hide-scroll');
};

for (let i = 0, a; (a = modalLink[i]); i++) {
	a.addEventListener('click', hideBodyScroll, false);
}

// Prevent refresh when user closes modal (otherwise, user is brought to top of page)
const closeModal = document.querySelectorAll('.close-modal');

const anchorClose = (e) => {
	e.preventDefault();
	window.history.back();
};

for (let i = 0, a; (a = closeModal[i]); i++) {
	a.addEventListener('click', anchorClose, false);
	a.addEventListener('click', returnBodyScroll, false);
}

//Add active class to links when anchor is visible
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

const changeNavLinkState = () => {
	let index = sections.length;

	while (--index && window.scrollY < sections[index].offsetTop) {}

	navLinks.forEach((link) => link.classList.remove('active-nav'));
	navLinks[index].classList.add('active-nav');
};

window.addEventListener('scroll', changeNavLinkState);

// hide nav on scroll down / reveal on scroll up
var prevScrollpos = window.pageYOffset;
window.onscroll = () => {
	var currentScrollPos = window.pageYOffset;
	if (screen.width > 768) {
		if (prevScrollpos > currentScrollPos) {
			document.getElementById('navbar').style.top = '0';
		} else {
			document.getElementById('navbar').style.top = '-7em';
		}
		prevScrollpos = currentScrollPos;
	}
};

// Populate Tech Stack Ticker
const techStack = [
	'Full-stack',
	'ReactJS',
	'CSS & SaSS',
	'Responsive',
	'Wireframing',
	'Collaboration',
	'MongoDB',
];

const outerDiv = document.getElementById('ticker-wrapper');
techStack.forEach((tech) => {
	outerDiv.innerHTML += `<div class="ticker-tape-item">${tech}</div>`;
});
