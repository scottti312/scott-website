<script>
	import { onMount } from 'svelte';
	import { typewriter } from './typewriter';
	import { messages } from './messages';

	let i = -1;

	onMount(() => {
		i += 1;
		const interval = setInterval(() => {
			i += 1;
			i %= messages.length;
		}, 2500);
		return () => {
			clearInterval(interval);
		};
	});

</script>

{#key i}
	<p
	class="typewriter" transition:typewriter={{ speed: 5 }}
	>{messages[i] || ''}</p>
{/key}

<style>
	.typewriter {
		font-size: 1.3em;
	}
</style>