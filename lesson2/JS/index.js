let currentDate = new Date();

try {
	let options = {
		weekday: "long",
		day: "numeric",
		month: "short",
		year: "numeric",
	};

	document.querySelector("#updated").textContent = `Last updated ${currentDate.toLocaleDateString(
		"en-us",
		options,
	)} ${currentDate.toLocaleDateString("en-us")} `;
} catch (error) {
	alert("Error displaying time updated");
}

document.querySelector("year").textContent = currentDate.getFullYear();
