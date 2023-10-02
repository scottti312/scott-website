<script>
  import { Accordion, AccordionItem } from 'svelte-collapsible';
	import Collapsible from './Collapsible.svelte';

  /**
	 * @type {number}
	 */
  let windowWidth;

  const items = [
    {
      id: '1',
      title: 'Arch Linux - Operating System',
      description: 'First, a Mac user, then Windows, and now Linux. I\'ve learned to appreciate <a href="https://en.wikipedia.org/wiki/Free_and_open-source_software" style="font-family: Inter-Bold;">FOSS</a> and use Linux as my main operating system. In addition to being FOSS, in a minimal distribution like Arch Linux, there is virtually no bloat and is very lightweight. I feel I have complete control over my operating system. The customizability is unmatched with the <a href="https://aur.archlinux.org/" style="font-family: Inter-Bold;">Arch User Repository</a>. I\'m able to quickly and easily install any program I\'d need in a matter of just one or two commands as opposed to going through whatever website, finding the download link, and installing it. Another factor that led me to choosing Arch is the wiki. The wiki is well-known for being quite detailed and very informative in terms of anything you\'d want to configure or install in case you need to troubleshoot or learn more. Migrating to Arch Linux also presented a learning opportunity and a chance to deepen my understanding of it\'s underlying technologies. Arch Linux encourages me to delve in and explore the intricacies of the OS, giving me a hands-on approach to learning more about a system that I truly own and control.'
    },
    {
      id: '2',
      title: 'VS Code + VIM - Text Editor/IDE',
      description: 'I\'ve used beefy IDEs and lightweight terminal text editors like Vim/Neovim. I loved Neovim so much that I contributed to a popular Neovim config called <a href="https://nvchad.com" style="font-family: Inter-Bold;">NvChad</a>. (I fixed a typo in the docs) For now, I\'ve decided to use Visual Studio Code with a VIM extension as my main text editor/IDE. The greatest reason is the ability to efficiently debug. Sure, I could use GDB to debug C/C++ and JDB for Java. But debugging on VS Code feels like stepping into the future. I save so much time being able to constantly view my variables while seeing where I am in the code, I feel like I can never go back. The ability to use extensions beats out any IDE dedicated to certain languages like Eclipse/IntelliJ for JVM-based languages or PyCharm for just Python. I can run unit testing AND have integration with version control systems all from VS Code. Yes, I know VS Code is just chromium and consumes much more resources, but it isn\'t nearly as much as Visual Studio 2022 or a JetBrains IDE. For some time I have also used <a href="https://vscodium.com/" style="font-family: Inter-Bold;">VSCodium</a>, an Open Source version of VS Code. Unfortunately, many extensions from the Microsoft marketplace are simply prohibited from existing in the VSCodium marketplace, so for now, I\'ll keep using VS Code.'
    },
    {
      id: '3',
      title: 'Firefox - Browser',
      description: null 
    },
    {
      id: '4',
      title: 'bspwm - Xorg Tiling Window Manager',
      description: null
    },
    {
      id: '5',
      title: 'Hyprland - Tiling Wayland Compositor',
      description: null
    },
    {
      id: '6',
      title: 'Zsh - Shell',
      description: null
    },
    {
      id: '6',
      title: 'lf - Terminal file manager',
      description: null
    },



  ]

  $: windowWidth
</script>

<svelte:window bind:outerWidth={windowWidth} />
  <section id="things">
    <div class="things">
      <h3 id="things-title">Things I Use</h3>
      <div class="things-content">
        {#if windowWidth > 950}
          {#each items as item}
            {#if item.description != null}
              <Collapsible title={item.title} description={item.description} id={item.id}/>
            {:else}
              <h3 class='content-title'>
                {item.title}
              </h3>
            {/if}
            <!-- <div class='content-section'>
              <h3 class='content-title'>
                {item.title} 
              </h3>
              {#if item.description != null}
              <p class='content-description'>
                {@html item.description}
              </p>
              {/if}
            </div> -->
          {/each}
        {:else}
          {#each items as item}
            {#if item.description != null}
              <Collapsible title={item.title} description={item.description} id={item.id}/>
            {:else}
              <h3 class='content-title'>
                {item.title}
              </h3>
            {/if}
          {/each}
        {/if}
      </div>
      <h4 class="more-message">More to come soon.</h4>
    </div>
  </section>

<style>
  #things {
    background-color: color(display-p3 0.831 0.782 0.923);
    color: rgb(60, 40, 92);
  }

  :global(body.dark-mode) #things {
    background-color: color(display-p3 0.229 0.179 0.325);
    color: rgb(211, 186, 240);
  }

  #things-title {
    margin-bottom: 50px;
    font-family: Inter-Bold;
    font-weight: 500;
  }

  .things-content {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .content-title {
    font-size: 1.3em;
    line-height: 1.5;
    margin: 0;
    color: rgb(60, 40, 92);
    text-align: center;
  }

  :global(body.dark-mode) .content-title {
    color: rgb(211, 186, 240);
  }

  .more-message {
    font-family: Inter-Medium;
    font-weight: 500;
    margin-top: 100px;
    font-size: 1.3em;
  }

  @media screen and (max-width: 950px) {
    .things-content {
      gap: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .things {
      width: 300px;
    }
    
    .content-title {
      line-height: normal;
      min-width: auto;
    }
  }
</style>