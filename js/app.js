/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const navList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();
const hamburger = document.querySelector('.navbar__icon');
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const buildNav = () => {
	for (const section of sections) {
		// Create a and li elements
		const listItem = document.createElement('li');
		const link = document.createElement('a');

		// Get data-nav
		const dataNav = section.getAttribute('data-nav');

		// Add class menu__link to link
		link.classList.add('menu__link');

		// Set link.innerText to the extracted dataNav
		link.innerText = dataNav;

		// Append section id to the corresponding link href
		link.href = `#${section.id}`;

		// Inserting link inside list item
		listItem.insertAdjacentElement('beforeend', link);

		// Inserting list item to fragment
		fragment.appendChild(listItem);
	}

	// Appending each fragment to the navigation list
	navList.appendChild(fragment);
};

buildNav();

// Add class 'active' to section when near top of viewport
/**
 * @description Add class 'active' to section when near top of viewport
 * @param {IntersectionObserverEntry} entry
 * @returns {void} void
 */
const addActiveClass = (entry) => {
	const { target, isIntersecting } = entry;

	// Add "active" class when section is intersecting otherwise remove it
	target.classList.toggle('active', isIntersecting);

	// Get the selected link based on section id
	const link = document.querySelector(`a[href*=${target.id}]`);

	// Add "active" class to link when section is intersecting otherwise remove it
	link.classList.toggle('active', isIntersecting);
};
/**
 * End Main Functions
 */

/**
 * Begin events
 */

// Toggle hamburger menu
const mobileMenu = () => {
	navList.classList.toggle('press');
};
hamburger.addEventListener('click', mobileMenu);

// Close the menu after one of the links menu is clicked
const navLinks = document.querySelectorAll('.menu__link');
const closeMenu = () => {
	navList.classList.remove('press');
};

for (const link of navLinks) {
	link.addEventListener('click', closeMenu);
}
/**
 * End events
 */
// Build menu

// Scroll to section on link click
/**
 * @description Link click handler
 * @param {PointerEvent} event
 * @returns {void} void
 */
const linkClickHandler = (event) => {
	event.preventDefault();

	const link = document.querySelector(event.target.getAttribute('href'));

	link.scrollIntoView({
		behavior: 'smooth',
	});
};

// Scroll smoothly to the appropriate section
/**
 * @description Scroll to the appropriate section
 * @param {string} className
 * @returns {void} void
 */
const scrollToSection = (className) => {
	try {
		// Get all links
		const links = document.querySelectorAll(className);

		if (links.length) {
			// Loop through the links and add click click event listner
			for (const link of links) {
				link.addEventListener('click', linkClickHandler.bind(this));
			}
		} else {
			throw new Error('Please provide a valid class name.');
		}
	} catch (error) {
		console.log(error);
	}
};
scrollToSection('.menu__link');

// Set sections as active
/**
 * @description Set sections as active
 * @returns {void} void
 */
const setActiveSections = () => {
	// Creating a new IntersectionObserver
	const observer = new IntersectionObserver(
		(entries) => {
			// Loop through each entry and add active class
			entries.forEach((entry) => {
				addActiveClass(entry);
			});
		},
		{ threshold: 0.5, rootMargin: '0px' }
	);

	sections.forEach((element) => {
		observer.observe(element);
	});
};
setActiveSections();
