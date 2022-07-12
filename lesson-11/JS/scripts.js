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

// console.log("This is the day", currentDate.getDay());

// LESSON 5 JAVASCRIPT

const urlData = "https://byui-cit230.github.io/weather/data/towndata.json";

// FETCH API

let towns = [];

const outputTowns = (towns) => {
	towns.map((town, index) => {
		// console.log(town);
		// let name = towns[i].name;
		// if (name == "Preston" || name == "Soda Springs" || name == "Fish Haven")
		if (index === 0 || index === 2 || index === 6) {
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

			if (index === 0) {
				townImage.setAttribute("src", "assets/images/soda-spring.jpg");

				townImage.setAttribute("alt", `${town.name} photo`);
			} else if (index === 2) {
				townImage.setAttribute("src", "assets/images/fish-haven.jpg");
				townImage.setAttribute("alt", `${town.name} photo`);
			} else {
				townImage.setAttribute("src", "assets/images/preston.jpg");
				townImage.setAttribute("alt", `${town.name} photo`);
			}

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
		}
	});
};

const getTowns = async () => {
	const response = await fetch(urlData);
	// console.log(response);
	const data = await response.json();
	console.log("data from towns", data.towns);
	towns = data.towns;
	outputTowns(towns);
	townEvents(towns);
};

getTowns();

// GET THE INFORMATION FROM THE WEATHER API

const activePage = document.querySelector(".active").textContent;

let apiURL;
let forecastURL;

let townID = [
	5604473, //Preston
	5607916, //Soda Springs
	5585010, //Fish Haven
];

switch (activePage) {
	case "Preston":
		apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${townID[0]}&appid=3bd28921d4e0f537a8315fdda41b8c8d&units=imperial`;

		forecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=${townID[0]}&appid=3bd28921d4e0f537a8315fdda41b8c8d&units=imperial`;

		break;

	case "Soda Springs":
		apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${townID[1]}&appid=3bd28921d4e0f537a8315fdda41b8c8d&units=imperial`;

		forecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=${townID[1]}&appid=3bd28921d4e0f537a8315fdda41b8c8d&units=imperial`;

		break;

	default:
		apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${townID[2]}&appid=3bd28921d4e0f537a8315fdda41b8c8d&units=imperial`;

		forecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=${townID[2]}&appid=3bd28921d4e0f537a8315fdda41b8c8d&units=imperial`;
		break;
}

const getData = async () => {
	const response = await fetch(apiURL);
	const data = await response.json();
	// const data = await responses;

	// console.log(data);
	let currently = document.querySelector(".currently");
	let temp = document.querySelector("#temp");
	let humidity = document.querySelector(".humidity");
	let windSpeed = document.querySelector("#wind");

	currently.textContent = data.weather[0].description;
	temp.textContent = data.main.temp;
	humidity.textContent = data.main.humidity;
	windSpeed.textContent = data.wind.speed;
};

getData();

// FORECAST API CALL

const getForecast = async () => {
	const resp = await fetch(forecastURL);
	data = await resp.json();
	// console.log(data);

	data.list.filter((value) => {
		if (value.dt_txt.includes("18:00:00")) {
			// console.log(value);

			const forcastFlex = document.querySelector(".forecast-flex");
			const divForecast = document.createElement("div");
			const pDay = document.createElement("p");
			const pIcon = document.createElement("img");
			const ptemp = document.createElement("p");

			// OBTAINING THE LINK OF ICON
			const imagesrc = `https://openweathermap.org/img/w/${value.weather[0].icon}.png`;

			const desc = value.weather[0].description;
			const temp = value.main.temp;

			//GET THE DATE FROM THE API
			const currentDay = value.dt_txt.slice(0, 10);

			// CONVERTING THE STRING TO DATE OBJECT AND SET UTC TIME
			const currentDate = new Date(currentDay).toUTCString();
			// console.log(currentDate);
			// console.log(currentDay);

			// PASSING THE DATE AND THE TEMPERATURE
			pDay.textContent = currentDate.slice(0, 3);
			ptemp.textContent = `${temp} °F`;

			// SET THE ICON'S ATTRIBUTES
			pIcon.setAttribute("alt", desc);
			pIcon.setAttribute("src", imagesrc);

			divForecast.appendChild(pDay);
			divForecast.appendChild(pIcon);
			divForecast.appendChild(ptemp);
			divForecast.classList.add("forecast-box");

			forcastFlex.appendChild(divForecast);
		}
	});
};

getForecast();
