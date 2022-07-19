const currentDate = new Date();

const year = document.querySelector(".year");
const lastUpdate = document.querySelector(".updated-date");

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
