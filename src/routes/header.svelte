<script>
	import { themeControl } from './stores';
	import './styles.css';
	import ThemeButton from './theme-toggle.svelte';
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
  import angleLeft from '$lib/images/angle-left.svg';
	import { fade, fly } from 'svelte/transition';

	inject({ mode: dev ? 'development' : 'production' });

	/**
	 * @type {HTMLElement}
	 */
	let body;

	/**
	 * @type {number}
	 */
	let y;

	/**
	 * @type {number}
	 */
	let windowWidth;

	/**
	 * @type {boolean}
	*/
	let mobileMenuEnabled = false;

	// Document can only be read after page has been rendered
	// So savedDocument is used to instantiate a saved document in onMount().
	/**
	 * @type {Document}
	 */
	let savedDocument;

	onMount(() => {
		savedDocument = document;
		body = document.body;
		let isDarkReaderEnabled =
			'querySelector' in document && !!document.querySelector('meta[name=darkreader]');
		if (isDarkReaderEnabled) {
			themeControl.beDark();
			let bodyClass = window.document.body.classList;
			bodyClass.toggle('dark-mode');
		}
	});

	/**
	 * @param {number} y
	 * @param {number} windowWidth
	 */
	function updateHeader(y, windowWidth) {
		if (windowWidth <= 950) {
			return;
		}

		if (windowWidth > 950) {
			if (savedDocument) {
				let header = savedDocument.getElementsByTagName('header')[0];
				if (y === 0 && !body.classList.contains('dark-mode')) {
					header.style.backgroundColor = 'transparent';
					header.style.transition = 'all 0.3s';
					header.style.boxShadow = 'none';
					header.style.borderBottom = 'none';
				}
				if (y === 0 && body.classList.contains('dark-mode')) {
					header.style.transition = 'all 0.3s';
					header.style.backgroundColor = 'transparent';
					header.style.borderBottom = 'none';
					header.style.boxShadow = 'none';
				}
				if (y > 0 && !body.classList.contains('dark-mode')) {
					header.style.transition = 'all 0.3s';
					header.style.backgroundColor = '#ffffff';
					header.style.boxShadow = '0px -50px 60px 20px rgba(0, 0, 0, 0.75)';
					header.style.borderBottom = 'none';
				}
				if (y > 0 && body.classList.contains('dark-mode')) {
					header.style.transition = 'background-color 0.3s';
					header.style.backgroundColor = '#181818';
					header.style.borderBottom = 'solid 1px #2a2a2a';
					header.style.boxShadow = 'none';
				}
			}
		}
	}

	/**
	 * @param {string} elementId
	 */
	function scrollTowards(elementId) {
		let YOffset = -100;
		if (windowWidth <= 950) {
			YOffset = -40;
		}
		const element = document.getElementById(elementId);
		const top = element?.getBoundingClientRect().top;
		if (top) {
			const y = top + window.scrollY + YOffset;
			window.scrollTo({ top: y });
		}
	}

  function openMobileMenu() {
    mobileMenuEnabled = true;
    let button = document.getElementById("mobile-menu-button");
    if (button) {
      button.style.transition = "all 0.5s ease";
      button.style.transform = "rotate(180deg)";
    }
  }

  /**
	 * @param {string | undefined} [element]
	 */
  function closeMobileMenu(element) {
    mobileMenuEnabled = false
    let button = document.getElementById("mobile-menu-button");
    if (button) {
      button.style.transform = "rotate(0deg)";
    }
    if (element === undefined) {
      return;
    }
    else if (element === "home") {
      window.scrollTo(0, 0);
    } else {
      scrollTowards(element);
    }
  }

	$: updateHeader(y, windowWidth);
</script>

<svelte:window bind:outerWidth={windowWidth} bind:scrollY={y} />

<header id="header" style={windowWidth >= 950 ? "display: flex; background-color: transparent; border-bottom: none;" : "display: none;"}>
	<button on:click={() => window.scrollTo(0, 0)}>Home</button>
	<button on:click={() => scrollTowards('about-title')}>About</button>
	<button on:click={() => scrollTowards('projects-title')}>Projects</button>
	<div class="theme-butt">
		<ThemeButton />
	</div>
</header>

<div class="menu-button-container" style={windowWidth < 950 ? "display: flex" : "display: none"}>
	<button id="mobile-menu-button" class="mobile-menu-button" on:click={openMobileMenu}>
		<img src={angleLeft} alt="Menu" height="25px" width="25px"/>
	</button>
	<div class="theme-butt-mobile">
		<ThemeButton />
	</div>
</div>

{#if mobileMenuEnabled}
	<div class="mobile-menu-container">
		<div class="mobile-menu"
			transition:fly={{ x: 200}}
		>
			<button class="mobile-home-butt" on:click={() => closeMobileMenu("home")}>Home</button>
			<button class="mobile-about-butt" on:click={() => closeMobileMenu("about-title")}>About</button>
			<button class="mobile-projects-butt" on:click={() => closeMobileMenu("projects-title")}>Projects</button>
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="mobile-menu-blur" 
			on:click={() => closeMobileMenu()}
			transition:fade={{duration: 200}}
		>
		</div>
	</div>
{/if}

<style>
	.theme-butt-mobile {
		z-index: 50;

	}

	.menu-button-container {
		z-index: 50;
		position: fixed;
		top: 20px;
		right: 10px;
		gap: 20px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.mobile-menu-button {
		display: flex;
		align-items: center;
		justify-content: center;
		border: none;
		background-color: transparent;
		cursor: pointer;
		padding: 0;
    transition: all 1s;
	}

	:global(body.dark-mode) .mobile-menu-button {
		transition: all 0.3s;
		filter: invert(1);
	}

	.mobile-menu-container {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0px;
		top: 0px;
	}

	.mobile-menu {
		display: flex;
		flex-direction: column;
		position: fixed;
		top: 65px;
		right: 50px;
		z-index: 56;
		width: 200px;
	}

	.mobile-menu button {
		display: flex;
		border: none;
		background: none;
		cursor: pointer;
		color: white;
		font-size: 2em;
		padding: 25px;
		transition: all 0.3s ease;
	}

	.mobile-menu .mobile-home-butt:hover {
		color: #B3D9FC;
		font-size: 2.5em;
	}

	.mobile-menu .mobile-about-butt:hover {
		color: #A5DEA5;
		font-size: 2.5em;
	}

	.mobile-menu .mobile-projects-butt:hover {
		color: #FFA468;
		font-size: 2.5em;
	}

	/* .mobile-menu button:first-child {
		border-bottom: 4px solid white;
	} */
	/* .mobile-menu button:last-child {
		border-top: 4px solid white;
	} */

	@keyframes opacityFadeInn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.mobile-menu-blur {
		/* animation: opacityFadeIn 0.5s ease; */
		position: fixed;
		left: 0px;
		top: 0px;
		width: 100%;
		height: 100%;
		backdrop-filter: blur(2px);
		z-index: 55;
		background-color: rgba(0,0,0,0.8);
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

</style>