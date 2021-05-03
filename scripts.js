//Toggle between professional and personal mode
const introText = document.querySelector('.intro');
const landing = document.querySelector('.landing');
const badge = document.querySelector('.round-badge');
const heart = document.getElementById('heart');
const flower = document.getElementById('flower');

const personalQuotes = [
	`Ash is a henkeeper of four chunky Chicago chickens.`,
	`Ash is a fan of bucket hats and Crocs in summer.`,
	`Ash hails from the sticky swamps of South Florida.`,
	`Ash is slowly building the largest collection of Mickey tees.`,
];
const professionalQuotes = [
	`Ash wants you to check out her <a href='https://github.com/goldmintz' target='_blank' class='underline'>GitHub</a>`,
	`Ash wants to work with you.`,
	`Ash wants to know what the stakeholders think.`,
	`Ash combines the eye of a designer and the mindset of a developer.`,
	`Ash has made more than 600 GitHub contributions in 2021.`,
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
	'Wireframing & Prototyping',
	'Presentation Design and Delivery',
	'Cross-Discipline Collaboration',
	'Compelling Narratives',
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

//Create circular badge
// const slice = (selector, context) => {
// 	context = context || document;
// 	const elements = context.querySelectorAll(selector);
// 	return Array.prototype.slice.call(elements);
// };

// slice('.circular').forEach((el) => {
// 	let NS = 'http://www.w3.org/2000/svg';

// 	let svg = document.createElementNS(NS, 'svg');
// 	//make the svg a circle
// 	svg.setAttribute('viewBox', '0 0 100 100');
// 	let circle = document.createElementNS(NS, 'path');
// 	circle.setAttribute('fill', 'black');
// 	circle.setAttribute('fill-opacity', '.15');
// 	circle.setAttribute('d', 'M0,50 a50,50 0 1,1 0,1z');
// 	circle.setAttribute('id', 'circle');

// 	// Make text around circle
// 	let outertText = document.createElementNS(NS, 'text');
// 	let outerTextPath = document.createElementNS(NS, 'textPath');
// 	outerTextPath.setAttributeNS(
// 		'http://www.w3.org/1999/xlink',
// 		'xlink:href',
// 		'#circle',
// 	);
// 	outerTextPath.textContent = el.textContent;
// 	outertText.appendChild(outerTextPath);

// 	// Put it all together
// 	svg.appendChild(circle);
// 	svg.appendChild(outertText);

// 	el.textContent = '';
// 	el.appendChild(svg);
// });

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
	{ title: 'Project 1', link: 'google.com' },
	{ title: 'Project 2', link: 'poodle.com' },
	{ title: 'Project 3', link: 'noodle.com' },
	{ title: 'Project 4', link: 'doodle.com' },
];

//Replace project modal links with links to GitHub on smaller screens
if (screen.width < 768) {
	let modalLinks = document.querySelectorAll('.modal-link');
	let baseURL = 'http://www.';

	//make the links open in another tab
	modalLinks.forEach((link) => link.setAttribute('target', '_blank'));

	//set the href to github link instead of modal
	for (i = 0; i < modalLinks.length; i++) {
		modalLinks[i].setAttribute('href', baseURL + gitHubLinks[i].link);
	}
}
