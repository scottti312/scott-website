<script>
	import Typewriter from './typewriter.svelte';
	import Background from './background.svelte';
	import About from './about.svelte';
	import Projects from './projects.svelte';
</script>

<svelte:head>
	<title>Scott Ti</title>
	<meta name="description" content="Scott's Website" />
</svelte:head>

<section class="first">
	<Background />
	<div class="foreground">
		<left>
			<h1>Hi, I'm Scott Ti</h1>
			<div class="typewriter-container">
				<Typewriter />
			</div>
		</left>
	</div>
</section>

<About />

<Projects />

<style>
	.first {
		height: 100vh;
	}

	.first .foreground {
		z-index: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 300px;
		height: 100vh;
		width: 100%;
	}

	.first h1 {
		margin: 0;
		font-weight: 700;
	}

	.first left {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.first .typewriter-container {
		text-align: center;
		width: 300px;
		height: 2em;
	}

	section {
		display: flex;
	}

	@media screen and (max-width: 950px) {
		.first .foreground {
			flex-direction: column;
			gap: 90px;
		}

		.first h1 {
			font-weight: 500;
		}
	}
</style>
