const TownData = "https://byui-cit230.github.io/weather/data/towndata.json";

// FETCH API

let townsList = [];

const townEvents = (towns) => {
	towns.forEach((town) => {
		const activeSite = document.querySelector(".active");
		const eventTag = document.querySelector(".events");

		if (town.name === activeSite.textContent) {
			town.events.forEach((event) => {
				const p = document.createElement("p");
				p.textContent = event;
				eventTag.appendChild(p);
			});
		}
	});
};

const getTownData = async () => {
	const response = await fetch(TownData);
	// console.log(response);
	const data = await response.json();
	console.log("data from towns", data.towns);
	townsList = data.towns;
	townEvents(towns);
};

getTownData();
