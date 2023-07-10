<script>
	import './styles.css';
	import Button from './theme-toggle.svelte';
</script>

<div class="app">
	<header>
		<div class="left">
			<logo>Scott Ti</logo>
		</div>
		<div class="right">
			<Button />
			<button>About</button>
			<button>Projects</button>
			<button>Contact</button>
		</div>
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<p>Made by Scott Ti</p>
	</footer>
</div>

<style>
	:global(body) {
		background-color: #ffffff;
		color: black;
		transition: all 0.3s;
	}
	:global(body.dark-mode) {
		background-color: #1f1f1f;
		color: white;
	}

	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	header {
		display: flex;
		justify-content: space-around;
		padding: 20px;
		-webkit-box-shadow: 0px -15px 60px 3px rgba(0, 0, 0, 0.75);
		-moz-box-shadow: 0px -15px 60px 3px rgba(0, 0, 0, 0.75);
		box-shadow: 0px -50px 60px 3px rgba(0, 0, 0, 0.75);
	}

	:global(body.dark-mode) header {
		background-color: gray;
		transition: background-color 0.3s;
	}

	main {
		display: flex;
		flex: 1;
		flex-direction: column;
		margin: 0 auto;
		width: 100vw;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
