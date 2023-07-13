<script>
	import { afterUpdate, onMount } from "svelte";
  import { Gradient } from "./scripts/Gradient";
  import { themeControl } from "./stores";

	const gradient = new Gradient();
  onMount(() => {
    // @ts-ignore
    gradient.initGradient('#gradient-canvas');
    gradient.connect();
  });
  let day = true;


  function themeToggle() {
    // @ts-ignore
    gradient.initGradient('#gradient-canvas');
    gradient.connect();
  }

  afterUpdate(() => {
    // @ts-ignore
    $themeControl, themeToggle();
  });

</script>

<canvas id="gradient-canvas" data-transition-in />

<style>
	#gradient-canvas {
    z-index: 0;
    position: absolute;
		width: 100vw;
		height: 100vh;
		--gradient-color-1: #c3e4ff;
		--gradient-color-2: #6ec3f4;
		--gradient-color-3: #eae2ff;
		--gradient-color-4: #b9beff;
	}

  :global(body.dark-mode) #gradient-canvas {
		--gradient-color-1: #191d20;
		--gradient-color-2: #1a2d38;
		--gradient-color-3: #4c4855;
		--gradient-color-4: #303142;
  }
</style>

