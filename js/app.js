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

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
