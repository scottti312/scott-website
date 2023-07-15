<footer>
  <p>Made by Scott Ti. Thanks for visiting ❤️</p>
    <a href="https://github.com/scottti312/scott-website" target="_blank">See the source code</a>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 20px;
		background-color: color(display-p3 1 0.664 0.453);
		color: rgb(90, 53, 23);
		transition: all 0.5s ease;
	}

	:global(body.dark-mode) footer {
		background-color: color(display-p3 0.570 0.223 0.112);
		color: #ffdaba;
	}

	footer a {
		text-decoration: underline;
		padding: 5px;
	}

	footer a:hover {
		background-color: #ffdaba;
	}

	:global(body.dark-mode) footer a:hover {
		background-color: rgb(192, 127, 65);
	}
</style>