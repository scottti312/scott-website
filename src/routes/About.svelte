<script>
	import resume from "$lib/Public_Resume.pdf";
</script>

<section id="about">
	<!-- <div class="about-container"> -->
		<div class="about">
			<h3 id="about-title">About</h3>
			<p>
				My name is Scott Ti (pronounced "tea"). I was born in Seattle and raised in Southern California. My first experience in programming was around 2009 when I got my first laptop, a late 2008 model
				MacBook. I started by coding small terminal programs in C using Xcode.
			</p>
			<p>
				Since then, I've learned a ton about computer science fundamentals and programming in general. I love learning to use new and cutting-edge technologies, even when they're not very well adapted. This website, for example, is a form of practice to learn Svelte/SvelteKit.
			</p>
			<p>
				Currently at Boeing as a Software Engineer.
			</p>
		</div>
		<div class="links">
			<h3>Links</h3>
			<div class="links-list">
				<a href="https://github.com/scottti312" target="_blank">
					GitHub scottti312
				</a>
				<a href="https://www.linkedin.com/in/scott-ti/" target="_blank">
					LinkedIn scott-ti
				</a>
				<a href="mailto:scott.ti312@gmail.com" target="_blank">
					Email scott.ti312@gmail.com
				</a>
				<p>
					Discord __scott
				</p>
				<a class="resume" href={resume} target="_blank">Resume</a>
			</div>
		</div>
	<!-- </div> -->

</section>

<style>
	section {
		background-color: color(display-p3 0.693 0.865 0.666);
		color: rgb(49, 77, 35);
	}

	:global(body.dark-mode) section {
		background-color: color(display-p3 0.23 0.35 0.2);
		color: rgb(199, 245, 180);
	}

	h3 {
		margin-top: 0;
		font-size: 2.2em;
	}

	.about {
		margin-left: 70px;
		max-width: 500px;
	}

	.links {
		width: 400px;
	}

	.links-list {
		display: flex;
		flex-direction: column;
	}

	.links-list a {
		margin-bottom: 15px;
		text-decoration-thickness: 2px;
	}

	.links-list p {
		margin-bottom: 15px;
		max-height: 25px;
		line-height: normal;
	}

	@font-face {
		font-family: 'Inter-SemiBold';
		src: url('../lib/Inter-SemiBold.woff');
	}

	.resume {
		font-family: Inter-SemiBold;
		margin-top: 50px;
		font-size: 2.2em;
		text-decoration: underline;
		width: fit-content;
		padding: 5px;
	}

	.resume:hover {
		background-color: rgb(226, 247, 220);
	}

	:global(body.dark-mode) .resume:hover {
		background-color: rgb(118, 141, 112);

	}

	.about p {
		margin-top: 30px;
		line-height: 1.5;
	}

	p, a {
		max-width: 500px;
		font-size: 1.3em;
		font-weight: 500;
	}

	@media screen and (max-width: 950px) {
		section {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 60px;
		}

		.about {
			max-width: 300px;
			margin-left: 0;
			padding-bottom: 60px;
			border-bottom: solid rgb(28, 39, 20) 4px;
		}

		.links {
			width: 300px;
		}

		.links-list {
			margin-right: 0;
			min-width: 300px;
			max-width: 300px;
		}

		h3 {
			font-weight: 500;
		}

		p, a {
			font-size: 1.1em;
			font-weight: 400;
		}

		:global(body.dark-mode) .about {
			border-bottom: solid rgb(214, 255, 197) 4px;
		}
	}
</style>
