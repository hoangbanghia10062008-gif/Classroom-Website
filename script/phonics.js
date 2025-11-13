// Array to hold book data
const phonicData = [
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
					src="about:blank"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin" 
					allowfullscreen></iframe>
				<iframe src="${phonic.vocabSong}"
					src="about:blank"
					title="YouTube video player"
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


// Function that handles the lazy loading for the collapsible button (Correctly implemented from your snippet)
function initializeVideoLazyLoad() {
    // Targets elements with the '.collapsible' class
    const collapsibleButtons = document.querySelectorAll(".collapsible"); 

    collapsibleButtons.forEach(collapsibleButton => { 
        // Listener is on the collapsible button
        collapsibleButton.addEventListener("click", function() {
            
            // The content to be opened/closed is the next sibling element of the button (this)
            const content = this.nextElementSibling;

            // Get all iframes inside the content block
            const iframes = content.querySelectorAll('iframe');
            
            iframes.forEach(iframe => {
                const dataSrc = iframe.getAttribute('data-src');
                
                // Load the video only if it hasn't been loaded yet
                if (dataSrc && iframe.src.includes('about:blank')) {
                    iframe.src = dataSrc;
                }
            });
            
        // The { once: true } ensures the video loads only the first time the button is clicked
        }, { once: true }); 
    });
}


// --- COLLAPSIBLE FUNCTION (Handles Height Animation only) ---
function initializeCollapsibleVideoLoad() {
    var coll = document.querySelectorAll(".collapsible"); 

    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("collapsible-active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
				setTimeout(function(){
					content.style.visibility = "hidden";
				}, 350);
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
				content.style.visibility = "visible";

                // *** Video loading is handled by initializeVideoLazyLoad() running once on click. ***
            }
        }); 
    }
}


// --- Execution ---

// Load the phonic entries and initialize listeners on page load
window.onload = function() {
    loadPhonics();
    // This will attach the 'load video once' listener to all collapsible buttons
    initializeVideoLazyLoad();
    // This will attach the 'open/close' listener to all collapsible buttons
    initializeCollapsibleVideoLoad(); 
}