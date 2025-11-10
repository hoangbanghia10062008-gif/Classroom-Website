const phonicData = [ // Array to hold book data
	{
		letter: "B",
		mouth: "",
		worksheet: "",
		jollyPhonics: "https://www.youtube.com/embed/8sQvep8_m_Y",
		vocabSong: "https://www.youtube.com/embed/F7WyPqms5x0",
	},

	{
		letter: "C",
		mouth: "",
		worksheet: "",
		jollyPhonics: "https://www.youtube.com/embed/CAqOwKUEN3o",
		vocabSong: "https://www.youtube.com/embed/LnDxp5QNxmA",
	},

	{
		letter: "D",
		mouth: "",
		worksheet: "",
		jollyPhonics: "https://www.youtube.com/embed/lyX1CgNfiLI",
		vocabSong: "https://www.youtube.com/embed/qdJwtaaTfb4&list=RDqdJwtaaTfb4",
	},

	{
		letter: "F",
		mouth: "",
		worksheet: "",
		jollyPhonics: "https://www.youtube.com/embed/QqFTv9PZyk4",
		vocabSong: "https://www.youtube.com/embed/CaywS_FK4wE",
	},

	{
		letter: "G",
		mouth: "",
		worksheet: "",
		jollyPhonics: "https://www.youtube.com/embed/BKBBmnQBs2Y",
		vocabSong: "https://www.youtube.com/embed/O96r1dZ4Nqg",
	},

	{
		letter: "H",
		mouth: "",
		worksheet: "",
		jollyPhonics: "https://www.youtube.com/embed/9rHzSVQWGEI",
		vocabSong: "https://www.youtube.com/embed/ndf_-FJsPVk",
	},

	{
		letter: "I",
		mouth: "",
		worksheet: "",
		jollyPhonics: "https://www.youtube.com/embed/d5xnlvH_ICo",
		vocabSong: "https://www.youtube.com/embed/yZbNMjwgEN8",
	},

	{
		letter: "M",
		mouth: "",
		worksheet: "",
		jollyPhonics: "https://www.youtube.com/embed/4UxWFlGuaWo",
		vocabSong: "https://www.youtube.com/embed/McACiO5dwGM",
	},

	{
		letter: "S",
		mouth: "",
		worksheet: "",
		jollyPhonics: "https://www.youtube.com/embed/ema1Gz3jpVI",
		vocabSong: "https://www.youtube.com/embed/McACiO5dwGM",
	},

	{
		letter: "T",
		mouth: "",
		worksheet: "",
		jollyPhonics: "https://www.youtube.com/embed/gB3AX5Ryujk",
		vocabSong: "https://www.youtube.com/embed/4PhbUhrI4KE",
	},
];

function createPhonicEntry(phonic) {
    const content = `
        <div class="container">
			<button type="button" class="collapsible">${phonic.letter}</button>
			<div class="content">
			<a href="${phonic.worksheet}" target="_blank">View Worksheet</a>
			<img src=resources/phonics-mouth"${phonic.mouth}" alt="Mouth Position for ${phonic.letter}">
				<iframe src="${phonic.jollyPhonics}"
						title="YouTube video player"
						loading="lazy"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen></iframe>
				<iframe src="${phonic.vocabSong}"
						title="YouTube video player"
						loading="lazy"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen></iframe>
			</div>
		</div>
    `;
    return content;
};

function loadPhonics() {
    const grid = document.querySelector(".grid");
    if (!grid) return;

    // Build all book HTML first
    const phonicHTML = phonicData.map(phonic => createPhonicEntry(phonic)).join("");
    
    // Insert all at once to minimize reflows
    grid.innerHTML = phonicHTML;
};
loadPhonics();

const coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
		this.classList.toggle("collapsible-active");
		var content = this.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	});
}