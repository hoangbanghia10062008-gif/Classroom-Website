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
		thumbnail: "lost-and-found.jpg",
		URL: "https://www.youtube.com/embed/kZD1RDY4Q9w",
		summary: "..."
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
		thumbnail: "whats-new-at-the-zoo.jpg",
		URL: "https://www.youtube.com/embed/2J18N9jdR8c",
		summary: "..."
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

function createBook(book) {
    const content = `
        <div class="hover-container">
            <img src="/Classroom-Website/read/book-thumbnails/${book.thumbnail}" 
                 alt="Book Thumbnail" 
                 class="book-thumbnail"
                 loading="lazy">
            <div class="hidden-content">
                <iframe src="${book.URL}" 
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
    const grid = document.querySelector('.book-grid');
    if (!grid) return;

    // Build all book HTML first
    const booksHTML = bookData.map(book => createBook(book)).join('');
    
    // Insert all at once to minimize reflows
    grid.innerHTML = booksHTML;
};