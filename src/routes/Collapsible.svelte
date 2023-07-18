<script>
  import { Accordion, AccordionItem } from 'svelte-collapsible';
  import { themeControl } from './stores';
  import darkTriangle from '$lib/images/triangle-dark.png';
	import { fade } from 'svelte/transition';

   export let title = "";

   export let description = "";

   export let id = "";

   /**
	 * @type {boolean}
	 */
   let descriptionClosed = true;

   function openDescription() {
    let triangle = document.getElementById(id);
    console.log('openDescription()');
    if (triangle) {
      triangle.style.transition = "all 0.5s ease";
      triangle.style.transform = "rotate(60deg)"
    }
    descriptionClosed = false;
   }

   function closeDescription() {
    let triangle = document.getElementById(id);
    console.log('closeDescription()');
    if (triangle) {
      triangle.style.transition = "all 0.5s ease";
      triangle.style.transform = "rotate(0deg)"
    }
    descriptionClosed = true;
   }

</script>

<Accordion duration={0.5} easing="ease-out" key="a" >
  <AccordionItem key=null>
    <button slot='header' class='content-title' on:click={descriptionClosed ? openDescription : closeDescription} >
      <h3 class='content-title'>
        {title}
      </h3>
      <img 
      id={id} 
      src={darkTriangle} 
      alt="open triangle" 
      transition:fade={{duration: 200}}
      style={`
        transition: all 0.3s;
        ${$themeControl ? (descriptionClosed ? "" : "transform: rotate(60deg);") : (descriptionClosed ? "filter: invert(1) hue-rotate(180deg);" : "filter: invert(1) hue-rotate(180deg); transform: rotate(60deg);")}
      `} 
      width="15"
      height="15"/>
    </button>
    <p slot='body' class='content-description'>
      {@html description}
    </p>
  </AccordionItem>
</Accordion>

<div style='--id:{id};'></div>

<style>
    .content-title {
      min-width: 100px;
      font-size: 1.3em;
      line-height: 1.5;
      margin: 0;
      display: flex;
      line-height: normal;
      min-width: auto;
      gap: 10px;
      align-items: center;
      color: rgb(60, 40, 92);
      transition: all 0.5s;
      background: none;
      cursor: pointer;
      border: none;

    }

    :global(body.dark-mode) .content-title {
      color: rgb(211, 186, 240);
    }

    .content-description {
      font-size: 1.1em;
      max-width: 700px;
      line-height: 1.5;
    }

</style>