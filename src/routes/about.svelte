<section id="about">
	<div>
		<h3>About</h3>
		<p>
			My first experience in programming was around 2009 when I got my first laptop, a late 2008
			MacBook. I started by coding small terminal programs in C using Xcode. Back then, I knew I
			wanted to make games but had no clue how to get started nor how difficult developing games on
			a Mac would be.
		</p>
	</div>
	<div class="skills">
		<h3>Skills</h3>
		<p>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
			been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
			galley of type and scrambled it to make a type specimen book. It has survived not only five
			centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
			was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
			passages, and more recently with desktop publishing software like Aldus PageMaker including
			versions of Lorem Ipsum.
		</p>
	</div>
</section>

<style>
	section {
		transition: background-color 0.5s;
		background-color: color(display-p3 0.693 0.865 0.666);
		display: flex;
		width: 100%;
		height: 500px;
		justify-content: center;
		align-items: center;
    gap: 100px;
	}

	:global(body.dark-mode) section {
		background-color: color(display-p3 0.23 0.35 0.2);
	}

  .skills {
    max-width: 500px;
  }
</style>
