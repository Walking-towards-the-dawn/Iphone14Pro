const menuButton = document.querySelector('.menu-btn')
const nav = document.querySelector('.nav')

menuButton.addEventListener('click', () => {
	nav.classList.toggle('menu-open')
})

document.addEventListener('click', function (event) {
	if (!nav.contains(event.target) && !menuButton.contains(event.target)) {
		nav.classList.remove('menu-open')
	}
})

window.addEventListener('scroll', function () {
	nav.classList.remove('menu-open')
})
