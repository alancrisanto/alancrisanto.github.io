rentalURL = "https://raw.githubusercontent.com/alancrisanto/alancrisanto.github.io/main/final/data/data.json";

const getRental = async () => {
	try {
		const response = await fetch(rentalURL);
		console.log(response);
		const data = await response.json();
		console.log(data.vehicles);

		const scooterSpecif = document.querySelector(".scooters-specif");

		const dataRental = data.vehicles.map(
			(vehicle) => `<div class="card">
                      
                        <img src="${vehicle.photo}" alt="${vehicle.name}-img" />
     
                      <div class="scoot-detail">
                        <div class="scoot-title">
                          <h2>${vehicle.name}</h2>
                        </div>
                        <div class="scoot-info">
                          <p><i class="fa-solid fa-user"></i> Max Passengers ${vehicle.max_persons}</p>
                          <a href="/final/reservations.html"><button>Reserve Now</button></a>
                        </div>
                        <div class="scoot-info-2">
                          <div class="scoot-cost reservation">
                          <h3>Reservations</h3>
                            <p>Half Day (3hrs): ${vehicle.res_half}</p>
                            <p>Full Day: ${vehicle.res_full}</p>
                          </div>
                          <div class="scoot-cost walk-in">
                          <h3>Walk Ins</h3>
                          <p>Half Day (3hrs): ${vehicle.in_half}</p>
                          <p>Full Day: ${vehicle.in_full}</p>
                          </div>
                        </div>
                      </div>
                    </div>`,
		);

		scooterSpecif.innerHTML = dataRental.join("");
	} catch (error) {
		console.log(error);
	}
};

getRental();
