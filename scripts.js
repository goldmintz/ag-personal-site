//Toggle between professional and personal mode
const introWrapper = document.querySelector('.intro');
const introContent = document.querySelector('.intro-content');
const landing = document.querySelector('.landing');
const introAside = document.querySelector('#intro-aside');
const heart = document.getElementById('heart');
const flower = document.getElementById('flower');
const learnMore = document.getElementById('learn-more');

const personalMain = `<div class="intro-content fade-in">Ashley is a <span>mickey waffle connoisseur</span> and Sweet Potato's biggest simp.</div>`;

// const professionalAside = `<div id="intro-aside" class="fade-in">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, tempora!</div>`;
// const personalAside = `<div id="intro-aside" class="fade-in">Here is <em>something personal</em> about me as an aside.</div>`;

const professionalMain = `<div class="intro-content fade-in">A. Goldmintz is a <span class="lime">multi-disciplinary developer </span> based in Chicago.</div>`;

const toggleIntroText = () => {
	if (introWrapper.classList.contains('professional')) {
		introWrapper.classList.remove('professional');
		introWrapper.classList.add('personal');
		introWrapper.innerHTML = personalMain;
		heart.style.display = 'none';
		flower.style.display = 'block';
	} else if (introWrapper.classList.contains('personal')) {
		introWrapper.classList.remove('personal');
		introWrapper.classList.add('professional');
		introWrapper.innerHTML = professionalMain;
		heart.style.display = 'block';
		flower.style.display = 'none';
	}
};

// COPY EMAIL TO CLIPBOARD

const copyToClipboard = () => {
	const emailLink = document.getElementById('email-link');

	//create a temporary element and add email as value
	const tempEl = document.createElement('textarea');
	tempEl.value = 'agoldmintz@gmail.com';

	//avoid flickering and usability issues by 'hiding' element and making read-only
	tempEl.setAttribute('readonly', '');
	tempEl.style.position = 'absolute';
	tempEl.style.left = '-9999px';

	//add and select to run copy command
	document.body.appendChild(tempEl);
	tempEl.select();
	document.execCommand('copy');
	document.body.removeChild(tempEl);
	emailLink.setAttribute('aria-label', 'email copied!');

	setTimeout(() => {
		emailLink.setAttribute('aria-label', 'click to copy');
	}, 5000);
};

//  ***SCROLL BEHAVIOR*** //

// Reveal top nav links when page is scrolled //
const navLinksWrapper = document.querySelector('.nav-links-wrapper');
const nav = document.querySelector('nav');

let intViewportHeight = window.innerHeight;

const revealNav = () => {
	let y = window.pageYOffset;

	if (y >= intViewportHeight / 75) {
		navLinksWrapper.classList.add('show-nav');
	}
	if (y < 535) {
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
const openModal = document.querySelectorAll('.modal-link');

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

// Draggable Elements
const dragEl = (el) => {
	var pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;

	const dragMouseDown = (e) => {
		e = e || window.event;
		e.preventDefault();
		// get the mouse cursor position
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		// call function when  cursor moves
		document.onmousemove = elementDrag;
	};

	el.onmousedown = dragMouseDown;

	const elementDrag = (e) => {
		e = e || window.event;
		e.preventDefault();
		// calculate new cursor position
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		// set element's new position:
		el.style.top = el.offsetTop - pos2 + 'px';
		el.style.left = el.offsetLeft - pos1 + 'px';
	};

	const closeDragElement = () => {
		// stop moving when mouse button is released:
		document.onmouseup = null;
		document.onmousemove = null;
	};
};

dragEl(document.getElementById('flower'));
dragEl(document.getElementById('heart'));
