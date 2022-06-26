let t = +document.querySelector(".temperature").textContent.slice(0, -3);
let s = +document.querySelector(".windSpeed").textContent.slice(0, -4);
let chill = document.querySelector(".windchill");

console.log(t);
console.log(s);

function windchill(t, s) {
	const result = 35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16;
	return result.toFixed(2);
}

if (t <= 50 && s > 3) {
	chill.innerHTML = `${windchill(t, s)} °F`;
} else {
	chill.innerHTML = "N/A";
}
