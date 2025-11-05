const bookData = [ // Array to hold book data
	{
		thumbnail: "bernice-gets-carried-away.jpg",
		URL: "https://www.youtube.com/embed/WCpHU-ZIY6I",
		summary: "A grumpy cat helps others cheer up."
	},

	{
		thumbnail: "brontorina.jpg",
		URL: "https://www.youtube.com/embed/n2jpE5ohvf4",
		summary: "A tiny dinosaur dreams of being a dancer."
	},

	{
		thumbnail: "bug-alphabet.jpg",
		URL: "https://www.youtube.com/embed/rB0Ff7_LWCI",
		summary: "Students have been interested in insects during outdoor play."
	},
	
	{
		thumbnail: "eat-pete.jpg",
		URL: "https://www.youtube.com/embed/1jSeC941f50",
		summary: "Even monsters like playing with others!"
	},

	{
		thumbnail: "freight-train.jpg",
		URL: "https://www.youtube.com/embed/AnsL-bLN070",
		summary: "A Donald Crews classic."
	},

	{
		thumbnail: "from-seed-to-pumpkin.jpg",
		URL: "https://www.youtube.com",
		summary: "..."
	},

	{
		thumbnail: "i-have-to-go.jpg",
		URL: "https://www.youtube.com/embed/cdCCA1M_2z8",
		summary: "Do you need to go?"
	},

	{
		thumbnail: "i-love-my-fangs.jpg",
		URL: "https://www.youtube.com/embed/p1_cOUAgxo0",
		summary: "Fangs, teeth, the tooth fair, baby teeth, grown up, brushing, flossing."
	},

	{
		thumbnail: "peanut-butter-and-cupcake.jpg",
		URL: "https://www.youtube.com/embed/XmPx1mg6z9s",
		summary: "Who will be friends with peanut butter?"
	},

	{
		thumbnail: "peppa-gives-thanks.jpg",
		URL: "https://youtube.com/embed/lZ0AaCBJOso",
		summary: "A story to introduce being thankful."
	},

	{
		thumbnail: "pete-the-cat-and-the-new-guy.jpg",
		URL: "https://www.youtube.com/embed/Pc9-CddnbIQ",
		summary: "It doesn't matter who you are, everybody has a talent!"
	},

	{
		thumbnail: "pete-the-cat-and-the-perfect-pizza-party.jpg",
		URL: "https://youtube.com/embed/4UJPMRDpen0",
		summary: "A story that celebrates all kinds of pizza. Also a story that I love to use before pizza parties!"
	},

	{
		thumbnail: "show-and-tell.jpg",
		URL: "https://www.youtube.com/embed/n3A0NvnpTAg",
		summary: "..."
	},

	{
		thumbnail: "snail-and-worm.jpg",
		URL: "https://www.youtube.com/embed/Xa2d5UhQyyI",
		summary: "..."
	},

	{
		thumbnail: "snails-are-just-my-speed.jpg",
		URL: "https://www.youtube.com/embed/EAB6K-2wZz0",
		summary: "..."
	},

	{
		thumbnail: "tangled.jpg",
		URL: "https://www.youtube.com/embed/FIiqvce0xYU",
		summary: "All the shapes are stuck! Who will help them get out?"
	},

	{
		thumbnail: "the-littlest-train.jpg",
		URL: "https://www.youtube.com/embed/AnsL-bLN070",
		summary: "A story about a little train who goes on an adventure but then starts to get homesick. "
	},

	{
		thumbnail: "the-spooky-wheels-on-the-bus.jpg",
		URL: "https://www.youtube.com/embed/9WotjdZVrcw",
		summary: "A spooky twist on Wheels on the Bus."
	},

	{
		thumbnail: "the-three-ninja-pigs.jpg",
		URL: "https://youtube.com/embed/OGluqlJHJGc",
		summary: "A fun version of the three little pigs. "
	},

	{
		thumbnail: "we-dont-eat-our-classmates.jpg",
		URL: "https://www.youtube.com/embed/th6exRnPixg",
		summary: "A fun story that helps build empathy."
	},

	{
		thumbnail: "wonder-walkers.png",
		URL: "https://youtube.com/embed/Rdvpkmmvw8A",
		summary: "I wonder..."
	},

	{
		thumbnail: "zoomer.jpg",
		URL: "https://www.youtube.com/embed/Xa2d5UhQyyI",
		summary: "Why won't Zoomer get ready?"
	},
];

// global grid reference (set in loadBooks)
let grid = null;

function createBook(book) {
    // ensure we have a container to insert into
    if (!grid) {
        grid = document.querySelector('.grid');
        if (!grid) return; // nothing to insert into
    }

    const content = `
        <div class="hover-container">
            <img src="book-thumbnails/${book.thumbnail}" alt="Book Thumbnail" class="book-thumbnail">
            <div class="hidden-content">
                <iframe src="${book.URL}" title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <p>${book.summary}</p>
            </div>
        </div>
    `;
    grid.insertAdjacentHTML('beforeend', content);
}

function loadBooks() {
    // try to get the grid (if this function is called before DOM is ready, wait)
    grid = document.querySelector('.grid');
    if (!grid) {
        document.addEventListener('DOMContentLoaded', loadBooks, { once: true });
        return;
    }

    // optional: clear existing content
    grid.innerHTML = '';

    for (let i = 0; i < bookData.length; i++) {
        createBook(bookData[i]);
    }
}