<script>
  import sun from '$lib/images/sun.svg';
  import moon from '$lib/images/moon.svg';
  import { themeControl } from './stores';
  
  let transitionDone = true;

  let windowWidth = 0;

  function toggle() {
    let bodyClass = window.document.body.classList;
    bodyClass.toggle('dark-mode');
    $themeControl ? themeControl.beDark() : themeControl.beLight();

    if (windowWidth > 950) {
      let y = window.scrollY;
      let header = document.body.getElementsByTagName('header')[0];
      if (y === 0 && $themeControl) {
        header.style.backgroundColor = "transparent";
        header.style.transition = "all 0.3s";
        header.style.boxShadow = "none";
        header.style.borderBottom = "none";
      }
      if (y === 0 && !$themeControl) {
        header.style.transition = "all 0.3s";
        header.style.backgroundColor = "transparent";
        header.style.borderBottom = "none";
        header.style.boxShadow = "none";
      }
      if (y > 0 && $themeControl) {
        header.style.transition = "all 0.3s";
        header.style.backgroundColor = "#ffffff";
        header.style.boxShadow = "0px -50px 60px 20px rgba(0, 0, 0, 0.75)";
        header.style.borderBottom = "none";
      }
      if (y > 0 && !$themeControl) {
        header.style.transition = "background-color 0.3s";
        header.style.backgroundColor = "#181818"
        header.style.borderBottom = "solid 1px #2a2a2a";
        header.style.boxShadow = "none";
      }
    }
  };

  function done() {
    transitionDone = transitionDone ? false : true;
  }

  /**
	 * @param {{ keyCode: number; }} e
	 */
  function keyDown(e) {
    if (e.keyCode == 65) {
      toggle();
    }
  }
</script>

<svelte:window bind:outerWidth={windowWidth} />

{#if $themeControl && transitionDone}
<div
  on:click={toggle}
  on:keypress={keyDown}
  on:outrostart={done}
  on:outroend={done}
  role="button"
  tabindex="0"
>
  <img
  src={sun}
  class="sun"
  alt='bright theme'
  height="25"
  width="25"
  >
</div>
{/if}

{#if !$themeControl && transitionDone}
  <div
  on:click={toggle}
  on:keypress={keyDown}
  on:outrostart={done}
  on:outroend={done}
  role="button"
  tabindex="0"
  >
  <img
  src={moon}
  class="moon"
  alt='dark theme'
  height="25"
  width="25"
  >
  </div>
{/if}

<style>
  div {
    cursor: pointer;
  }

  img.sun {
    transition: all 5s ease-out;
  }
  img.sun:hover {
    transform: rotate(360deg) scale(1.2) ;
  }

  img.moon {
    transition: all 1s ease-out;
  }

  img.moon:hover {
    transform: scale(1.3) rotate(-10deg);
  }

	:global(body.dark-mode) img.moon {
    filter: invert(1)
	}

</style>
