<section>
	<div class="projects">
		<h3 id="projects-title">Projects</h3>
		<div class="projects-grid">
			<div>
				<a href="https://github.com/scottti312/deal-webapp"> Deal Comparison Web Application </a>
				<p>
					A web app that provides the prices from major retailers such as Amazon, Walmart, Target
					and Costco. Created collaboratively with 3 other people using agile methodology. Now deprecated due to scraping conflicts.
				</p>
			</div>
			<div>
				<a href="https://sticker-avenue.web.app/">
					Sticker Avenue: An E-Commerce Storefront
				</a>
				<p>
					A functional and beautiful (in my opinion) sticker store. Firebase used for user
					authentication and storing cart data. No transactions, just add stickers to the cart.
				</p>
			</div>
			<div>
				<a href="https://github.com/scottti312/backpropagation">
					Deep Neural Network From Scratch
				</a>
				<p>
					A deep neural network with backpropagation made from scratch without any ML libraries. Detects and learns patterns of handwritten digits using the MNIST dataset.
				</p>
			</div>
			<div>
				<a href="https://scottti312.github.io/todo-app/">
					To-Do Web Application
				</a>
				<p>
					A fully-functional To-Do list web application made with pure JavaScript and CSS only. Uses local storage to store list data.
				</p>
			</div>
			<div>
				<a href="https://scottti312.github.io/battleship/">
					Battleship
				</a>
				<p>
					Very rudimentary implementation of the classic game, Battleship. This project was a practice of test-driven development using JavaScript and Jest.
				</p>
			</div>
			<div>
				<a href="https://github.com/scottti312/LastFMRecommender">
					Social Recommendation System For last.fm	
				</a>
				<p>
					Recommends music based on user and friends' listening habits and social networking. An algorithm assignment where I experimented with graphs and relationships between data.
				</p>
			</div>
			<div>
				<a href="https://scottti312.github.io/react-card-game/">Card Memorization Game</a>
				<p>
					A simple memory card game. Includes two game difficulties. One of my first projects using React.
				</p>
			</div>
			<div>
				<a href="https://github.com/scottti312/dots">My Dotfiles</a>
				<p>
					My dotfiles for Arch Linux. Currently running Hyprland and loving Wayland.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		background-color: color(display-p3 1 0.664 0.453);
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 250px 0 250px 0; 
		color: rgb(90, 53, 23);
	}

	:global(body.dark-mode) section {
		background-color: color(display-p3 0.570 0.223 0.112);
		color: #ffdaba;
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
		font-weight: 1000;
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
