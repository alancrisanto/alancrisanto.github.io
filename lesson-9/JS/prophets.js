const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
	.then(function (response) {
		return response.json();
	})
	.then(function (jsonObject) {
		console.table(jsonObject);
		const prophets = jsonObject["prophets"];

		for (let i = 0; i < prophets.length; i++) {
			let card = document.createElement("section");
			let h2 = document.createElement("h2");
			let h4 = document.createElement("h4");
			let h5 = document.createElement("h5");
			let img = document.createElement("img");

			h2.textContent = `${prophets[i].name} ${prophets[i].lastname}`;
			h4.textContent = `Date of Birth: ${prophets[i].birthdate}`;
			h5.textContent = `Place Birth: ${prophets[i].birthplace}`;
			img.setAttribute("src", prophets[i].imageurl);
			img.setAttribute("alt", `${prophets[i].name}${prophets[i].lastname}-${prophets[i].order}`);

			card.appendChild(h2);
			card.appendChild(h4);
			card.appendChild(h5);
			card.appendChild(img);
			document.querySelector("div.cards").appendChild(card);
		}
	});

// fetch(requestURL)
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((data) => {
// 		console.table(data);
// 		const profetas = data["profetas"];
// 	});
