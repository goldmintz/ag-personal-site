// Prevent Refresh When User Closes Modal (otherwise, user is brought to top of page)
const closeModal = document.querySelectorAll('.close-modal');

const anchorClose = (e) => {
	e.preventDefault();
	window.history.back();
};

for (let i = 0, a; (a = closeModal[i]); i++) {
	a.addEventListener('click', anchorClose, false);
}

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
