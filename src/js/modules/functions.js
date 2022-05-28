export function isWebp() {
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.querySelector('body').classList.add(className);
	});
}

//Menu================================================
let iconMenu = document.querySelector(".icon-menu");
let body = document.querySelector("body");
if (iconMenu != null) {
	let menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", function (e) {
		iconMenu.classList.toggle("_active");
		menuBody.classList.toggle("_active");
		body.classList.toggle("_no-scroll")
	});
};
//====================================================

//Filter==============================================
export function filterSelection(value) {
	console.log(value);
	let x, i;
	x = document.getElementsByClassName("portfolio__column");
	if (value === 'all') value = '';
	// Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
	for (i = 0; i < x.length; i++) {
		w3RemoveClass(x[i], "show");
		if (x[i].className.indexOf(value) > -1) w3AddClass(x[i], "show");
	}
}
// Show filtered elements
function w3AddClass(element, name) {
	let i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += " " + arr2[i];
		}
	}
}
// Hide elements that are not selected
function w3RemoveClass(element, name) {
	let i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
}
// Add active class to the current button (highlight it)
let btnContainer = document.getElementById("filter__list");
let btns = btnContainer.getElementsByClassName("filter__item");
for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		filterSelection(this.id)
		let current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}
//====================================================