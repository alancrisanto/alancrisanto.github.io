const weatherURL =
	"https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=3bd28921d4e0f537a8315fdda41b8c8d&units=imperial";

const calWindchil = async () => {
	const response = await fetch(weatherURL);
	const data = await response.json();

	let t = +data.main.temp;
	let s = +data.wind.speed;
	let chill = document.querySelector(".windchill");

	// console.log(t);
	// console.log(s);

	function windchill(t, s) {
		const result = 35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16;
		return result.toFixed(2);
	}

	if (t <= 50 && s > 3) {
		chill.innerHTML = `${windchill(t, s)} °F`;
	} else {
		chill.innerHTML = "N/A";
	}
};

calWindchil();
