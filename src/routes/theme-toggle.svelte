<script>
  const toggle = () => {
    window.document.body.classList.toggle('dark-mode');
  };
</script>

<button on:click={toggle}>
  Toggle
</button>