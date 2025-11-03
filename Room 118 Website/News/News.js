function updateDate() { // Function to update the date
	const dateElement = document.getElementById('currentDate');
	const today = new Date();
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	dateElement.textContent = today.toLocaleDateString(undefined, options);
}
updateDate();