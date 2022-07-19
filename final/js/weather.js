// GET THE INFORMATION FROM THE WEATHER API

let apiURL = `https://api.openweathermap.org/data/2.5/weather?id=3530103&appid=3bd28921d4e0f537a8315fdda41b8c8d&units=imperial`;

const getData = async () => {
	const response = await fetch(apiURL);
	const data = await response.json();

	console.log(data);

	const imagesrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
	const desc = data.weather[0].description;

	let currently = document.querySelector(".currently");
	let icon = document.querySelector(".icon");
	let temp = document.querySelector(".temp");
	let humidity = document.querySelector(".humidity");
	let windSpeed = document.querySelector(".speed");

	icon.setAttribute("src", imagesrc);
	icon.setAttribute("alt", desc);

	currently.textContent = desc;
	temp.textContent = data.main.temp;
	humidity.textContent = data.main.humidity;
	windSpeed.textContent = data.wind.speed;
};

getData();

// FORECAST INFORMATION
let forecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=3530103&appid=3bd28921d4e0f537a8315fdda41b8c8d&units=imperial`;

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
