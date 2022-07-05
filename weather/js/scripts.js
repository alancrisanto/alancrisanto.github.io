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

// TO TOGGLE MENU

const displayList = () => {
	navigation.classList.toggle("responsive");
};

hamButton.addEventListener("click", displayList, false);

window.onresize = () => {
	if (window.innerWidth > 760) navigation.classList.remove("responsive");
};

// DISPLAY A MESSAGE ACORDING TO THE DAY OF THE WEEK

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

// LESSON 5 JAVASCRIPT
const urlData = "https://byui-cit230.github.io/weather/data/towndata.json";

// FETCH API

let towns = [];

const output = (towns) => {
	towns.map((town) => {
		const divInfo = document.createElement("div");
		const divImg = document.createElement("div");
		const divCard = document.createElement("div");

		const h2Title = document.createElement("h2");
		const pMotto = document.createElement("p");
		const h4Year = document.createElement("h4");
		const h4Population = document.createElement("h4");
		const h4Rain = document.createElement("h4");
		const townImage = document.createElement("img");

		h2Title.textContent = town.name;
		pMotto.textContent = town.motto;
		h4Year.textContent = `Year Founded: ${town.yearFounded}`;
		h4Population.textContent = `Population: ${town.currentPopulation}`;
		h4Rain.textContent = `Anual Rain Fall: ${town.averageRainfall}`;
		townImage.setAttribute("src", `${town.photo}`);
		townImage.setAttribute("alt", `${town.name} photo`);

		divInfo.appendChild(h2Title);
		divInfo.appendChild(pMotto);
		divInfo.appendChild(h4Year);
		divInfo.appendChild(h4Population);
		divInfo.appendChild(h4Rain);
		divImg.appendChild(townImage);

		divCard.appendChild(divInfo);
		divCard.appendChild(divImg);

		divInfo.classList.add("town-info");
		divImg.classList.add("town-image");
		divCard.classList.add("town-card");

		document.querySelector(".town").appendChild(divCard);
	});
};

const getData = async () => {
	const response = await fetch(urlData);
	console.log(response);
	const data = await response.json();
	console.log(data);
	towns = data.towns;
	output(towns);
};

getData();
