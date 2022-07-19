rentalURL = "https://raw.githubusercontent.com/alancrisanto/alancrisanto.github.io/main/final/data/data.json";

const getRental = async () => {
	try {
		const response = await fetch(rentalURL);
		console.log(response);
		const data = await response.json();
		console.log(data.vehicles);

		const divCard = document.createElement("div");
		const divImg = document.createElement("div");
		const divInfo = document.createElement("div");

		const scooterSpecif = document.querySelector(".scooters-specif");

		const dataRental = data.vehicles.map(
			(vehicle) => `<div class="card>
		                  <div class="scooter-img">
		                    <img src="${vehicle.img}" alt="${vehicle.name}-img"/>
		                  </div>
		                  <div>
		                    <div class="scooter-info">
		                      <h2>${vehicle.name}</h2>
		                    </div>
		                    <div class="scooter-prices"></div>
		                  </div>
		                </div>`,
		);

		scooterSpecif.innerHTML = dataRental.join("");
	} catch (error) {
		console.log(error);
	}
};

getRental();
