// Slider
let myIndex = 0;
carousel();

function carousel() {
	let x = document.getElementsByClassName('mySlides');
	if (x.length === 0) return; // Exit if no elements found

	for (let i = 0; i < x.length; i++) {
		x[i].style.display = 'none'; // Hide all slides
	}

	myIndex++;
	if (myIndex > x.length) {
		myIndex = 1;
	}

	x[myIndex - 1].style.display = 'block'; // Show the current slide
	setTimeout(carousel, 5000); // Change slide every 5 seconds
}

// active link

document.addEventListener('DOMContentLoaded', function () {
	const sections = document.querySelectorAll('section');
	const navLinks = document.querySelectorAll('nav a');

	function changeActiveLink() {
		let index = sections.length;

		while (--index && window.scrollY + 150 < sections[index].offsetTop) {}

		navLinks.forEach((link) =>
			link.classList.remove('bg-orange-600', 'text-white')
		);
		navLinks[index].classList.add('bg-orange-600', 'text-white');
	}

	function handleLinkClick(event) {
		event.preventDefault();
		const targetId = this.getAttribute('href').substring(1);
		const targetElement = document.getElementById(targetId);
		const offsetPosition = targetElement.offsetTop - 140;

		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth',
		});

		navLinks.forEach((link) =>
			link.classList.remove('bg-orange-600', 'text-white')
		);
		this.classList.add('bg-orange-600', 'text-white');
	}

	navLinks.forEach((link) => {
		link.addEventListener('click', handleLinkClick);
	});

	window.addEventListener('scroll', changeActiveLink);
});

// aside
document.addEventListener('DOMContentLoaded', () => {
	const barIcon = document.querySelector('.fa-bars');
	const asideSection = document.querySelector('aside');
	const close = document.querySelector('#close');

	const body = document.querySelector('body');

	// Function to show or hide the aside section
	const toggleAside = () => {
		asideSection.classList.toggle('-translate-x-full');
	};

	// Show the aside when clicking the bar icon
	barIcon.addEventListener('click', (e) => {
		e.stopPropagation(); // Prevent event from triggering body click event
		toggleAside();
	});

	// Hide the aside when clicking on the body
	body.addEventListener('click', (e) => {
		if (!asideSection.contains(e.target) && !barIcon.contains(e.target)) {
			asideSection.classList.add('-translate-x-full');
		}
	});

	// Hide the aside when clicking on the close icon
	close.addEventListener('click', () => {
		asideSection.classList.add('-translate-x-full');
	});
});

let cartCountElement = document.getElementById('crt-count');
let cartCount = 0;

// Get All Products plus icons
let productIcons = document.querySelectorAll('.fa-plus');

// Dynamically assign data-id
productIcons.forEach((icon, index) => {
	icon.setAttribute('data-id', index + 1); // Assigns 1, 2, 3, etc., as data-id
});

// click event logic for adding to the cart
productIcons.forEach((icon) => {
	icon.addEventListener('click', function (event) {
		event.preventDefault();
		let productId = this.getAttribute('data-id');
		console.log('product add to the card', productId);
		cartCount++; // Increment the cart count
		cartCountElement.textContent = cartCount; // Update the cart count in the DOM
	});
});

//Deleivery
