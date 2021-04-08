//Toggle between professional and party mode
const introText = document.querySelector('.intro');
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
	console.log('toggle clicked');
	if (introText.classList.contains('professional')) {
		introText.classList.remove('professional');
		introText.classList.add('personal', 'fade-in-primary');
		introText.innerHTML = personalMain;
		introAside.innerHTML = personalAside;
	} else if (introText.classList.contains('personal')) {
		introText.classList.remove('personal');
		introText.classList.add('professional');
		introText.innerHTML = professionalMain;
		introAside.innerHTML = professionalAside;
	}
};

//////////////////////////////
// Reveal nav links when page is scrolled
const navLinks = document.querySelector('.nav-links');

var revealNav = () => {
	var y = window.pageYOffset;
	if (y >= 535) {
		navLinks.classList.add('show-nav');
	}
	if (y < 535) {
		navLinks.classList.remove('show-nav');
	}
};

window.addEventListener('scroll', revealNav);

window.onscroll = () => {
	console.log('top: ' + window.pageYOffset);
};

window.onscroll = () => console.log('scroll');

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

var rect = document.getElementById('test').getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);
