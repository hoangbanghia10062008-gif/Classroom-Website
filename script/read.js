const bookData = [ // Array to hold book data
	{
		cover: "bernice-gets-carried-away.jpg",
		video: "https://www.youtube.com/embed/WCpHU-ZIY6I",
		summary: "A grumpy cat helps others cheer up."
	},

	{
		cover: "brontorina.jpg",
		video: "https://www.youtube.com/embed/n2jpE5ohvf4",
		summary: "A tiny dinosaur dreams of being a dancer."
	},

	{
		cover: "bug-alphabet.jpg",
		video: "https://www.youtube.com/embed/rB0Ff7_LWCI",
		summary: "Students have been interested in insects during outdoor play."
	},
	
	{
		cover: "eat-pete.jpg",
		video: "https://www.youtube.com/embed/1jSeC941f50",
		summary: "Even monsters like playing with others!"
	},

	{
		cover: "freight-train.jpg",
		video: "https://www.youtube.com/embed/AnsL-bLN070",
		summary: "A Donald Crews classic."
	},

	{
		cover: "i-have-to-go.jpg",
		video: "https://www.youtube.com/embed/cdCCA1M_2z8",
		summary: "Do you need to go?"
	},

	{
		cover: "i-love-my-fangs.jpg",
		video: "https://www.youtube.com/embed/p1_cOUAgxo0",
		summary: "Fangs, teeth, the tooth fair, baby teeth, grown up, brushing, flossing."
	},

	{
		cover: "lost-and-found.jpg",
		video: "https://www.youtube.com/embed/kZD1RDY4Q9w",
		summary: "..."
	},

	{
		cover: "peanut-butter-and-cupcake.jpg",
		video: "https://www.youtube.com/embed/XmPx1mg6z9s",
		summary: "Who will be friends with peanut butter?"
	},

	{
		cover: "peppa-gives-thanks.jpg",
		video: "https://youtube.com/embed/lZ0AaCBJOso",
		summary: "A story to introduce being thankful."
	},

	{
		cover: "pete-the-cat-and-the-new-guy.jpg",
		video: "https://www.youtube.com/embed/Pc9-CddnbIQ",
		summary: "It doesn't matter who you are, everybody has a talent!"
	},

	{
		cover: "pete-the-cat-and-the-perfect-pizza-party.jpg",
		video: "https://youtube.com/embed/4UJPMRDpen0",
		summary: "A story that celebrates all kinds of pizza. Also a story that I love to use before pizza parties!"
	},

	{
		cover: "show-and-tell.jpg",
		video: "https://www.youtube.com/embed/n3A0NvnpTAg",
		summary: "..."
	},

	{
		cover: "snail-and-worm.jpg",
		video: "https://www.youtube.com/embed/Xa2d5UhQyyI",
		summary: "..."
	},

	{
		cover: "snails-are-just-my-speed.jpg",
		video: "https://www.youtube.com/embed/EAB6K-2wZz0",
		summary: "..."
	},

	{
		cover: "tangled.jpg",
		video: "https://www.youtube.com/embed/FIiqvce0xYU",
		summary: "All the shapes are stuck! Who will help them get out?"
	},

	{
		cover: "the-dark.jpg",
		video: "https://www.youtube.com/embed/5YVoBXn9uz8",
		summary: "A story about overcoming fear of the dark."
	},

	{
		cover: "the-littlest-train.jpg",
		video: "https://www.youtube.com/embed/AnsL-bLN070",
		summary: "A story about a little train who goes on an adventure but then starts to get homesick. "
	},

	{
		cover: "the-spooky-wheels-on-the-bus.jpg",
		video: "https://www.youtube.com/embed/9WotjdZVrcw",
		summary: "A spooky twist on Wheels on the Bus."
	},

	{
		cover: "the-three-ninja-pigs.jpg",
		video: "https://youtube.com/embed/OGluqlJHJGc",
		summary: "A fun version of the three little pigs. "
	},

	{
		cover: "we-dont-eat-our-classmates.jpg",
		video: "https://www.youtube.com/embed/th6exRnPixg",
		summary: "A fun story that helps build empathy."
	},

	{
		cover: "whats-new-at-the-zoo.jpg",
		video: "https://www.youtube.com/embed/2J18N9jdR8c",
		summary: "..."
	},

	{
		cover: "wonder-walkers.png",
		video: "https://youtube.com/embed/Rdvpkmmvw8A",
		summary: "I wonder..."
	},

	{
		cover: "zoomer.jpg",
		video: "https://www.youtube.com/embed/Xa2d5UhQyyI",
		summary: "Why won't Zoomer get ready?"
	},
];

function createBookEntry(book) {
    const content = `
        <div class="hover-container">
            <img src="/classroom/resources/book-thumbnails/${book.cover}" 
                 alt="Book cover" 
                 class="book-thumbnail"
                 loading="lazy">
            <div class="hidden-content">
                <iframe src="${book.video}" 
                        title="YouTube video player"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen></iframe>
                <p>${book.summary}</p>
            </div>
        </div>
    `;
    return content;
};

function loadBooks() {
    const grid = document.querySelector(".grid");
	if (!grid) return;

    // Build all book HTML first
    const bookHTML = bookData.map(book => createBookEntry(book)).join("");
    
    // Insert all at once to minimize reflows
    grid.innerHTML = bookHTML;
};
loadBooks();