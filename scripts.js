//Toggle between professional and personal mode
const introText = document.querySelector('.intro');
const landing = document.querySelector('.landing');
const badge = document.querySelector('.round-badge');
const heart = document.getElementById('heart');
const flower = document.getElementById('flower');

const personalQuotes = [
	`Ash is a henkeeper of four chunky chickens<span class='intro-flower'>✿</span>`,
	`Ash pronounces "orange" as "ahhhrnge"<span class='intro-flower'>✿</span>`,
	`Ash hails from the sticky swamps of Florida<span class='intro-flower'>✿</span>`,
	`Ash is president of the Sweet Potato Jones fan club<span class='intro-flower'>✿</span>`,
];
const professionalQuotes = [
	`Ash wants you to check out her <a href='https://github.com/goldmintz' target='_blank' class='highlight'>GitHub</a><span class='intro-flower'>✿</span>`,
	`Ash wants to work with you<span class='intro-flower'>✿</span>`,
	`Ash wants to know what the stakeholders think<span class='intro-flower'>✿</span>`,
	`Ash believes 'perfect' is the enemy of 'good'<span class='intro-flower'>✿</span>`,
	`Ash combines the eye of a designer with the mindset of a developer<span class='intro-flower'>✿</span>`,
	`Ash has made more than 600 GitHub contributions this year<span class='intro-flower'>✿</span>`,
];

const toggleIntroText = () => {
	if (introText.classList.contains('professional')) {
		introText.classList.remove('professional');
		introText.classList.add('personal');
		introText.innerHTML = `<div class='intro-content fade-in'><p>${
			personalQuotes[Math.floor(Math.random() * personalQuotes.length)]
		}</p></div>`;
		// heart.style.display = 'none';
		// flower.style.display = 'block';

		badge.setAttribute('data-content', `keep it professional`);
		badge.style.transform = 'rotate(' + 20 + 'deg)';
	} else if (introText.classList.contains('personal')) {
		introText.classList.remove('personal');
		introText.classList.add('professional');
		introText.innerHTML = `<div class='intro-content fade-in'><p>${
			professionalQuotes[Math.floor(Math.random() * professionalQuotes.length)]
		}</p></div>`;
		// heart.style.display = 'block';
		// flower.style.display = 'none';
		badge.setAttribute('data-content', `get personal`);
		badge.style.transform = 'rotate(' + -20 + 'deg)';
	}
};

// COPY EMAIL TO CLIPBOARD

const copyToClipboard = (clickedId) => {
	const emailLink = document.getElementById(clickedId);

	console.log(clickedId);

	try {
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

		//let user know
		emailLink.setAttribute('aria-label', 'email copied!');

		//switch copy back to default after 5 seconds
		setTimeout(() => {
			emailLink.setAttribute('aria-label', 'click to copy');
		}, 5000);
	} catch (error) {
		alert(`Oops, can't copy that email address!`);
	}
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

//only on screens larger than standard tablet
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
const root = document.getElementsByTagName('html')[0]; //add to HTML instead of body (was too buggy)

const hideBodyScroll = () => {
	root.classList.add('hide-scroll');
};

const returnBodyScroll = () => {
	root.classList.remove('hide-scroll');
};

modalLink.forEach((link) =>
	link.addEventListener('click', hideBodyScroll, false),
);

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

	if (screen.width > 768) {
		while (--index && window.scrollY < sections[index].offsetTop) {}

		navLinks.forEach((link) => link.classList.remove('active-nav'));
		navLinks[index].classList.add('active-nav');
	}
};

window.addEventListener('scroll', changeNavLinkState, false);

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
	'Full-stack Development',
	'ReactJS',
	'HTML Javascript & CSS',
	'Platform-Focused Design',
	'GitHub and Version Control',
	'Wireframing & Prototyping',
	'Presentation Design and Delivery',
	'Cross-Discipline Collaboration',
	'Usability & Unit Testing',
	'Atomic Design',
	'Stakeholder Buy-In',
	'Team Leadership',
	'Product Lifecycle Stewardship',
	'Requirement Gathering & Management',
	'Accessible & Inclusive Design',
];

const outerDiv = document.getElementById('ticker-wrapper');

for (i = 0; i < 5; i++) {
	techStack.forEach((tech) => {
		outerDiv.innerHTML += `<div class="ticker-tape-item">${tech}</div>`;
	});
}

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
		// call function when cursor moves
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

const draggableElements = ['flower', 'toggle-badge'];
draggableElements.forEach((draggableEl) => {
	return dragEl(document.getElementById(draggableEl));
});

const slidingEls = document.querySelectorAll('.slide-in');
const appearOptions = {
	//since some elements might be off-screen on load, set the threshold as low as possible
	threshold: 0,
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
	entries.forEach((entry) => {
		// dont look for it if it's not on screen
		if (!entry.isIntersecting) {
			return;
		} else {
			entry.target.classList.add('appear');
			appearOnScroll.unobserve(entry.target);
			console.log('I see you!');
		}
	});
}, appearOptions);

slidingEls.forEach((el) => {
	appearOnScroll.observe(el);
});

//Populate Project Section

gitHubLinks = [
	{ title: 'Sprouts', link: 'https://github.com/goldmintz/ecommerce' },
	{ title: 'Critterpedia', link: 'https://github.com/goldmintz/critterpedia' },
	{ title: 'Portfolio', link: 'https://github.com/goldmintz/ag-personal-site' },
	{
		title: 'Virtual Vacation',
		link: 'https://github.com/goldmintz/virtual-vacation',
	},
];

//Replace project modal links with links to GitHub on smaller screens
if (screen.width < 768) {
	let modalLinks = document.querySelectorAll('.modal-link');

	//make the links open in another tab
	modalLinks.forEach((link) => link.setAttribute('target', '_blank'));

	//set the href to github link instead of modal
	for (i = 0; i < modalLinks.length; i++) {
		modalLinks[i].setAttribute('href', gitHubLinks[i].link);
	}
}
