document.addEventListener('DOMContentLoaded', function() {
    // Store the selected elements that we are going to use. 
const mainnav = document.querySelector(' nav ul.menu');
const hambutton = document.querySelector('#responsive-menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});
});

//Rentals 
document.addEventListener('DOMContentLoaded', () => {
	fetch('data/prices.json', {
		headers: {
			'Accept': 'application/json'
		}
	})
	.then(response => response.json())
	.then(data => {
		const rentals = data.rentals;
		const tableBody = document.getElementById('rentals-table-body');
		
		rentals.forEach(rental => {
			const row = document.createElement('tr');
			row.innerHTML = `
				<td><img src="images/${rental.image}" alt="${rental['rental type']}"></td>
				<td>${rental['rental type']}</td>
				<td>${rental['max persons']}</td>
				<td>$${rental['reservation_price_half_day']} / $${rental['reservation_price_full_day']}</td>
				<td>$${rental['walk_in_price_half_day']} / $${rental['walk_in _price_full_day']}</td>
			`;
			tableBody.appendChild(row);
		});
	})
	.catch(error => {
		console.log('Error fetching rental data:', error);
	});
});