const cities = {
	Punjab: ['Lahore', 'Faisalabad', 'Rawalpindi', 'Multan', 'Gujranwala'],
	KPK: ['Peshawar', 'Mardan', 'Abbottabad', 'Swat', 'Kohat'],
	Sindh: ['Karachi', 'Hyderabad', 'Sukkur', 'Larkana', 'Nawabshah'],
	'Azad Kashmir': ['Muzaffarabad', 'Mirpur', 'Rawalakot'],
	Balochistan: ['Quetta', 'Gwadar', 'Turbat', 'Sibi'],
	'Federal Administered Tribal Areas': [
		'Bajaur',
		'Mohmand',
		'Khyber',
		'Orakzai',
		'North Waziristan',
	],
	'Gilgit-Baltistan': ['Gilgit', 'Skardu', 'Hunza', 'Diamer'],
	Islamabad: ['Islamabad'],
};

// Event listener for the province select dropdown
document.getElementById('province').addEventListener('change', function () {
	const province = this.value;
	const citySelect = document.getElementById('city');

	// Clear the existing city options
	citySelect.innerHTML = '<option value="">Select City</option>';

	if (province && cities[province]) {
		// Populate the city dropdown with corresponding cities
		cities[province].forEach(function (city) {
			const option = document.createElement('option');
			option.value = city;
			option.textContent = city;
			citySelect.appendChild(option);
		});
	}
});
