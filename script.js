/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

function setTheme(themeName) {
	localStorage.setItem("theme", themeName);
	document.documentElement.className = themeName + "-theme";

	let current = document.querySelector(".theme-picker li.current");
	if (!current) {
		return;
	}
	current.classList.remove("current");

	current = document.querySelector(
		".theme-picker li." + themeName + "-theme"
	);
	if (!current) {
		return;
	}
	current.classList.add("current");
}

// Set theme before page renders
(function () {
	//setTheme(localStorage.getItem("theme") || "logo");
})();

// When document ready add event listeners
document.addEventListener("DOMContentLoaded", function () {
  return
	const selectTheme = (e) => {
		const btn = e.currentTarget;
		if (!btn.dataset.theme) {
			return;
		}
		setTheme(btn.dataset.theme);
	};

	Array.from(document.getElementsByClassName("theme-selector-btn")).forEach(
		(el) => {
			el.addEventListener("click", selectTheme);
		}
	);

	setTheme(localStorage.getItem("theme") || "logo");
});

document.querySelector('.footer-full').style.backgroundImage = 'url("https://cdn.glitch.global/f20aef1f-8ae4-469e-a569-dd7a95c2daac/houses.png?v=1725147050740")'