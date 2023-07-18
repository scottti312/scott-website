<script>
  import { Accordion, AccordionItem } from 'svelte-collapsible';
  import triangle from '$lib/images/triangle.png';
	import Collapsible from './Collapsible.svelte';

  /**
	 * @type {number}
	 */
  let windowWidth;

  const items = [
    {
      id: 'trianglea',
      title: 'Arch Linux',
      description: 'First, a Mac user, then Windows, and now Linux. I\'ve learned to appreciate <a href="https://en.wikipedia.org/wiki/Free_and_open-source_software" style="font-family: Inter-Bold;">FOSS</a> and use Linux as my main operating system. In addition to being FOSS, in a minimal distribution like Arch Linux, there is virtually no bloat and is very lightweight. I feel I have complete control over my operating system. The customizability is unmatched with the <a href="https://aur.archlinux.org/" style="font-family: Inter-Bold;">Arch User Repository</a>. I\'m able to quickly and easily install any program I\'d need in a matter of just one or two commands as opposed to going through whatever website, finding the download link, and installing it. Another factor that led me to choosing Arch is the wiki. The wiki is well-known for being quite detailed and very informative in terms of anything you\'d want to configure or install in case you need to troubleshoot or learn more. Migrating to Arch Linux also presented a learning opportunity and a chance to deepen my understanding of it\'s underlying technologies. Arch Linux encourages me to delve in and explore the intricacies of the OS, giving me a hands-on approach to learning more about a system that I truly own and control.'
    },
    {
      id: 'triangleb',
      title: 'VS Code',
      description: 'I\'ve used beefy IDEs and lightweight terminal text editors like Vim/Neovim. I loved Neovim so much that I contributed to a popular Neovim config called <a href="https://nvchad.com" style="font-family: Inter-Bold;">NvChad</a>. (I fixed a typo in the docs) For now, I\'ve decided to use Visual Studio Code as my main text editor/IDE. The greatest reason is the ability to efficiently debug. Sure, I could use GDB to debug C/C++ and JDB for Java. But debugging on VS Code feels like stepping into the future. I save so much time being able to constantly view my variables while seeing where I am in the code I feel like I can never go back. The ability to use extensions beats out any IDE dedicated to certain languages like Eclipse/IntelliJ for JVM-based languages or PyCharm for just Python. I can run unit testing AND have integration with version control systems all from VS Code. Yes, I know VS Code is just chromium and will just eat your resources away, but just not nearly as much as Visual Studio 2022 or a JetBrains IDE. For some time I have also used <a href="https://vscodium.com/" style="font-family: Inter-Bold;">VSCodium</a>, an Open Source version of VS Code. Unfortunately, many extensions from the Microsoft marketplace are simply prohibited from existing in the VSCodium marketplace, so for now, I\'ll have to keep using VS Code.'
    }
  ]

  $: windowWidth
</script>

<svelte:window bind:outerWidth={windowWidth} />
  <section id="tools">
    <div class="tools">
      <h3 id="tools-title">Tools</h3>
      <div class="tools-content">
        {#if windowWidth > 950}
          {#each items as item}
            <div class='content-section'>
              <h3 class='content-title'>
                {item.title} 
              </h3>
              <p class='content-description'>
                {@html item.description}
              </p>
            </div>
          {/each}
        {:else}
          {#each items as item}
            <Collapsible title={item.title} description={item.description} id={item.id}/>
          {/each}
        {/if}
      </div>
      <h4 class="more-message">More to come. Should I make a blog?</h4>
    </div>
  </section>

<style>
  #tools {
    background-color: color(display-p3 0.831 0.782 0.923);
    color: rgb(60, 40, 92);
  }

  :global(body.dark-mode) #tools {
    background-color: color(display-p3 0.329 0.279 0.425);
    color: rgb(211, 186, 240);
  }

  #tools-title {
    margin-bottom: 50px;
  }

  .tools-content {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .content-section {
    display: flex;
    gap: 100px;
  }

  .content-title {
    min-width: 120px;
    font-size: 1.3em;
    line-height: 1.5;
    margin: 0;
    color: rgb(60, 40, 92);
  }

  :global(body.dark-mode) .content-title {
    color: rgb(211, 186, 240);
  }

  .content-description {
    font-size: 1.2em;
    max-width: 700px;
    line-height: 1.8;
  }

  .more-message {
    margin-top: 100px;
    font-size: 1.3em;
  }

  @media screen and (max-width: 950px) {
    .content-section {
      flex-direction: column;
      gap: 20px;
    }

    .content-description {
      padding: 50px;
      min-width: 400px;
      max-width: 400px;
    }

    .tools-content {
      gap: 0px;
    }
    
    .content-title {
      display: flex;
      line-height: normal;
      min-width: auto;
      gap: 10px;
      align-items: center;
    }
  }
</style>