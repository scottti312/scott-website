<script>
	import { themeControl } from './stores';
	import './styles.css';
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

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
	<Footer />
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
</style>