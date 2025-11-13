const sightData = [ // Array to hold song data
	{
		word: "fly",
		image: ".jpg",
	},
	
];

function createSightEntry(sight) {
	const content = `
		<div class="container">
			<p>${sight.word}</p>
			<img src="/classroom/resources/sight-images/${sight.image} alt="Image for ${sight.word}">
		</div>
	`;
	return content;
};

function loadSight() {
	const grid = document.querySelector(".grid");
	if (!grid) return;
	// Build all song HTML first
	const sightHTML = sightData.map(sight => createSightEntry(sight)).join("");
	
	// Insert all at once to minimize reflows
	grid.innerHTML = sightHTML;
};
loadSight()