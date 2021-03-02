//Toggle between professional and party mode
const introText = document.querySelector('.intro');
const landing = document.querySelector('.landing');

const personal =
	'<div class="intro-content" >Ashley is a mickey waffle connoisseur and Sweet Potatos biggest simp. </div>';

const professional =
	'<div class="intro-content" > A. Goldmintz is a multi-disciplinary experience designer based in Chicago!</div>';

const toggleIntroText = () => {
	if (landing.classList.contains('professional')) {
		landing.classList.remove('professional');
		landing.classList.add('personal');
		introText.innerHTML = personal;
	} else if (landing.classList.contains('personal')) {
		landing.classList.remove('personal');
		landing.classList.add('professional');
		introText.innerHTML = professional;
	}
	console.log(landing.classList);
};

//////////////////////////////
// Reveal nav links when page is scrolled
const navLinks = document.querySelector('.nav-links');

var revealNav = () => {
	var y = window.pageYOffset;
	if (y >= 480) {
		navLinks.classList.add('flex');
	}
	if (y < 480) {
		navLinks.classList.remove('flex');
	}
};

window.addEventListener('scroll', revealNav);

window.onscroll = () => {
	console.log('top: ' + window.pageYOffset);
};

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
