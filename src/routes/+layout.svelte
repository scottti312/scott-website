<script>
	import { themeControl } from './stores';
	import './styles.css';
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import Header from './header.svelte';

	// Vercel analytics
	inject({ mode: dev ? 'development' : 'production' });


	onMount(() => {
		if (localStorage.getItem("theme") === "dark") {
			themeControl.beDark();
			window.document.body.classList.add('dark-mode');
		}
		let isDarkReaderEnabled =
			'querySelector' in document && !!document.querySelector('meta[name=darkreader]');
		if (isDarkReaderEnabled) {
			themeControl.beDark();
			let bodyClass = window.document.body.classList;
			bodyClass.toggle('dark-mode');
		}
	});
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
	<footer>
		<p>Made by Scott Ti. Thanks for visiting ❤️</p>
			<a href="https://github.com/scottti312/scott-website">See the source code</a>
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
