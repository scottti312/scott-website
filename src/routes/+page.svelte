<script>
	import Typewriter from './typewriter.svelte';
	import Background from './background.svelte';
	import About from './about.svelte';
	import Projects from './projects.svelte';
	import me from '$lib/images/me.webp';
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
		<right>
			<img src={me} alt="Me" />
		</right>
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
		justify-content: space-around;
		align-items: center;
		height: 100vh;
		width: 100%;
	}

	.first h1 {
		margin: 0;
	}

	.first left {
		display: flex;
		flex-direction: column;
		align-content: flex-start;
	}

	.first .typewriter-container {
		text-align: center;
		width: 200px;
		height: 2em;
	}

	.first img {
		width: 256px;
		height: auto;
	}

	section {
		display: flex;
	}
</style>
