<script>
	import { themeControl } from './stores';
	import './styles.css';
	import Button from './theme-toggle.svelte';
	import { onMount } from 'svelte';

	/**
	 * @type {HTMLElement}
	 */
	let header;

	/**
	 * @type {number}
	 */
	let y;

	onMount(() => {
		header = document.getElementsByTagName('header')[0];
		let isDarkReaderEnabled = "querySelector" in document && !!document.querySelector("meta[name=darkreader]");
		if (isDarkReaderEnabled) {
			themeControl.beDark();
			let bodyClass = window.document.body.classList;
			let header = document.body.getElementsByTagName('header')[0];
			bodyClass.toggle('dark-mode');
		}
	});


	/**
	 * @param {number} y
	 */
	function updateHeader(y) {
		if (y === 0 && !document.body.classList.contains("dark-mode")) {
			header.style.backgroundColor = "transparent";
			header.style.transition = "all 0.3s";
			header.style.boxShadow = "none";
			header.style.borderBottom = "none";
		}
		if (y === 0 && document.body.classList.contains("dark-mode")) {
			header.style.transition = "all 0.3s";
			header.style.backgroundColor = "transparent";
			header.style.borderBottom = "none";
			header.style.boxShadow = "none";
		}
		if (y > 0 && !document.body.classList.contains("dark-mode")) {
			header.style.transition = "all 0.3s";
			header.style.backgroundColor = "#ffffff";
			header.style.boxShadow = "0px -50px 60px 20px rgba(0, 0, 0, 0.75)";
			header.style.borderBottom = "none";
		}
		if (y > 0 && document.body.classList.contains("dark-mode")) {
			header.style.transition = "background-color 0.3s";
			header.style.backgroundColor = "#181818"
			header.style.borderBottom = "solid 1px #2a2a2a";
			header.style.boxShadow = "none";
		}
	}

	/**
	 * @param {string} elementId
	 */
	function scrollTowards(elementId) {
		const YOffset = -100;
		const element = document.getElementById(elementId);
		const top = element?.getBoundingClientRect().top;
		if (top) {
			const y = top + window.scrollY + YOffset;
			window.scrollTo({top: y})
		}
	}

	$: updateHeader(y);
</script>

<div class="app">
	<header>
			<button on:click={() => window.scrollTo(0,0)}>Home</button>
			<button on:click={() => scrollTowards("about-title")}>About</button>
			<button on:click={() => scrollTowards("projects-title")}>Projects</button>
			<!-- <button on:click={() => document.getElementById('contact')?.scrollIntoView()}>Contact</button> -->
		<div class="theme-butt">
			<Button />
		</div>
	</header>

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

	header {
		position: fixed;
		z-index: 10;
		width: 100%;
		display: flex;
		justify-content: center;
		height: 55px;
		background-color: white;
		box-shadow: none;
		align-items: center;
		animation: all 0.3s; 
	}

	header button {
		display: inline-block;
		position: relative;
		border: none;
		margin: 0px 20px 0px 20px;
		background: none;
		font: inherit;
		cursor: pointer;
	}

	header button::after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: -2px;
		left: 0;
		background-color: black;
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
	}
	:global(body.dark-mode) header button::after {
		background-color: white;
	}
	
	header button:hover::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}

	header .theme-butt {
		position: absolute;
		right: 8vw;
	}

	:global(body.dark-mode) header {
		background-color: #181818;
		transition: background-color 0.3s;
		border-bottom: solid 1px #2a2a2a;
		box-shadow: none;
	}

	:global(body.dark-mode) header button {
		color: white;
    transition: all 0.3s;
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

<svelte:window bind:scrollY={y} />