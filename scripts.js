// Prevent Refresh When User Closes Modal (otherwise, user is brought to top of page)
const closeModal = document.querySelectorAll('.close-modal');

const anchorClose = (e) => {
	e.preventDefault();
	window.history.back();
};

for (let i = 0, a; (a = closeModal[i]); i++) {
	a.addEventListener('click', anchorClose, false);
}
