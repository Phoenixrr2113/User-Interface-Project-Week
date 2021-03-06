const toggleMenu = () => {
	navMenu.classList.toggle('fullpage');
	menuIcon.classList.toggle('change');
	navLinks.classList.toggle('show-links');
};

const navLinks = document.querySelector('.nav-links');
const navMenu = document.querySelector('.nav-menu');
const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', () => {
	toggleMenu();
});

class TabLink {
	constructor(element) {
		this.element = element;
		this.data = this.element.dataset.tab;

		this.itemElement = document.querySelector(
			`.tabs-item[data-tab="${this.data}"]`,
		);

		this.tabItem = new TabItem(this.itemElement);
		this.element.addEventListener('click', () => this.select());
	}

	select() {
		const links = document.querySelectorAll('.tabs-link');

		Array.from(links).forEach(el => {
			el.classList.remove('tabs-link-selected');
		});
		this.element.classList.add('tabs-link-selected');
		this.tabItem.select();
	}
}

class TabItem {
	constructor(element) {
		// Assign this.element to the passed in element
		this.element = element;
	}

	select() {
		const items = document.querySelectorAll('.tabs-item');

		Array.from(items).forEach(el => {
			el.classList.remove('tabs-item-selected');
		});
		this.element.classList.add('tabs-item-selected');
	}
}

links = document.querySelectorAll('.tabs-link').forEach(el => {
	return new TabLink(el);
});
