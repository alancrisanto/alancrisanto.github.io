const currentDate = new Date();

const hamButton = document.querySelector(".ham");
const navigation = document.querySelector(".navigation");
const year = document.querySelector(".year");
const lastUpdate = document.querySelector(".updated");

year.textContent = currentDate.getFullYear();

// To display the updated date
try {
	let options = {
		weekday: "long",
		day: "numeric",
		month: "short",
		year: "numeric",
	};

	lastUpdate.textContent = `Last updated on ${currentDate.toDateString("en-us", options)} ${currentDate.toLocaleString(
		"en-us",
	)}`;
} catch (error) {
	alert("Error displaying time update");
}

// To toggle the menu
const displayList = () => {
	navigation.classList.toggle("responsive");
};

hamButton.addEventListener("click", displayList, false);

window.onresize = () => {
	if (window.innerWidth > 760) navigation.classList.remove("responsive");
};

// To display a meesage according the current day

const displayMessage = () => {
	let p = document.createElement("p");
	// let body = document.querySelector(".body");

	p.textContent = "Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavilion.";
	p.classList.add("display-message");

	// body.appendChild(p);
	document.body.prepend(p);
};

if (currentDate.getDay() === 5) {
	displayMessage();
}

console.log("This is the day", currentDate.getDay());
