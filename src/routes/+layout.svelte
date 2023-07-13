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
		padding: 12px;
		background-color: transparent;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
