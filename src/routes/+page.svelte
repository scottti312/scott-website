<script>
	import Typewriter from './typewriter.svelte';
	import me from '$lib/images/me.png';
</script>

<svelte:head>
	<title>Scott Ti</title>
	<meta name="description" content="Scott's Website" />
	<script src="https://kit.fontawesome.com/cbce618375.js" crossorigin="anonymous"></script>
</svelte:head>

<section class="first">
	<left>
		<h1>Hi, I'm Scott Ti</h1>
		<div class="typewriter-container">
			<Typewriter />
		</div>
	</left>
	<right>
		<img src={me} alt="Me" />
	</right>
</section>

<section class="second">
	<h2>About</h2>
	<h3>Skills</h3>
</section>

<section class="third">
	<h2>Projects</h2>
</section>

<style>
	.first {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		height: 100vh;
	}

	.first h1{
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
		width: 512px;
		height: auto;
	}

	.second {

	}

	.third {

	}

	section {
		display: flex;
	}
</style>
