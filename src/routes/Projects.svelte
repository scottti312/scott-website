<script>
	let projects = [
		{
			title: "Deal!",
			link: "https://github.com/scottti312/deal-webapp",
			description: "A web app that provides the prices from major retailers such as Amazon, Walmart, Target and Costco. Created collaboratively with 3 other people using agile methodology. Now deprecated due to scraping conflicts."
		},
		{
			title: "Sticker Avenue",
			link: "https://sticker-avenue.web.app/",
			description: "A functional and beautiful (in my opinion) sticker store. Firebase used for user authentication and storing cart data. No transactions, just add stickers to the cart.",
		},
		{
			title: "Deep Neural Network from Scratch",
			link: "https://github.com/scottti312/backpropagation",
			description: "A deep neural network with backpropagation made from scratch without any ML libraries. Detects and learns patterns of handwritten digits using the MNIST dataset.",
		},
		{
			title: "To-Do Web Application",
			link: "https://scottti312.github.io/todo-app/",
			description: "A fully-functional To-Do list web application made with pure JavaScript and CSS only. Uses local storage to store list data.",
		},
		{
			title: "Battleship",
			link: "https://scottti312.github.io/battleship/",
			description: "Very rudimentary implementation of the classic game, Battleship. This project was a practice of test-driven development using JavaScript and Jest.",
		},
		{
			title: "Social Recommendation System for last.fm",
			link: "https://github.com/scottti312/LastFMRecommender",
			description: "Recommends music based on user and friends' listening habits and social networking. An algorithm assignment where I experimented with graphs and relationships between data.",
		},
		{
			title: "Memory Game",
			link: "https://scottti312.github.io/react-card-game/",
			description: "A simple memory card game. Includes two game difficulties. One of my first projects using React.",
		},
		{
			title: "Temperature/Humidity Alarm",
			link: "https://github.com/scottti312/arduino-alarm/",
			description: "A temperature humidity monitoring and alarm system. When the humidity reaches any set threshold, the buzzer will beep and the current time will freeze until the system is reset.",
		},
		{
			title: "Express Local Library",
			link: "https://express-library-production-8520.up.railway.app/catalog",
			description: "A very simple library API/Website used for learning Express, Pug templates, and developing APIs on the web.",
		},
		{
			title: "My Dotfiles",
			link: "https://github.com/scottti312/dots",
			description: "My dotfiles for Arch Linux. Currently running Hyprland and loving Wayland.",
		},
	]
</script>

<section>
	<div class="projects">
		<h3 id="projects-title">Projects</h3>
		<div class="projects-grid">
			{#each projects as project}
				<div>
					<a href={project.link} target="_blank">{project.title}</a>
					<p>
						{project.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	section {
		background-color: color(display-p3 1 0.664 0.453);
		display: flex;
		flex-direction: column;
		width: 100%;
		color: rgb(90, 53, 23);
		transition: all 0.5s ease;
	}

	:global(body.dark-mode) section {
		background-color: color(display-p3 0.570 0.223 0.112);
		color: #ebb270;
	}

	.projects {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.projects-grid {
		display: grid;
		grid-template-rows: repeat(auto-fit, 150px);
		grid-template-columns: repeat(auto-fit, 400px);
		justify-content: center;
		gap: 30px;
		width: 80%;
		max-width: 1500px;
	}

	h3 {
		margin-top: 0;
		font-size: 2.2em;
	}

	a {
		text-decoration: underline;
		font-weight: 1000;
		font-size: 1.1em;
		padding: 3px;
	}

	a:hover {
		background-color: bisque;
	}

	:global(body.dark-mode) a:hover {
		background-color: rgb(192, 127, 65);
	}

	p {
		margin-top: 5px;
	}

	@media screen and (max-width: 950px) {
		.projects-grid {
			grid-template-columns: repeat(auto-fit, 300px);
			grid-template-rows: repeat(auto-fit, 200px);
		}

		h3 {
			font-weight: 500;
		}
	}
</style>
