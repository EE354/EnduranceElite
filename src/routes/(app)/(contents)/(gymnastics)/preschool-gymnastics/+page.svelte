<script>
	export let data;

	function scrollIntoView({ target }) {
		const element = document.querySelector(target.getAttribute('href'));
		if (!element) return;
		element.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<main>
	<div class="container text-center bg-primary-500 dark:bg-primary-900 p-4 flex-row">
		<!-- Header Block -->
		<div>
			<h1>Preschool Gymnastics</h1>
		</div>
	</div>

	<div class="container flex flex-wrap justify-center">
		<div class="w-11/12 neutral shadow-lg m-8 p-8">
			<!-- Nav Buttons - Scroll to Position On Page -->
			<h4 class="mb-4 text-center">Click your Style to Scroll!</h4>
			<nav class="flex flex-wrap justify-center gap-2">
				<a
					href="#babynastics"
					class="btn bg-primary-600 dark:bg-primary-900"
					on:click|preventDefault={scrollIntoView}>Babynastics</a
				>
				<a
					href="#tumbling"
					class="btn bg-primary-600 dark:bg-primary-900"
					on:click|preventDefault={scrollIntoView}>Tumbling Tots</a
				>
				<a
					href="#prenastics"
					class="btn bg-primary-600 dark:bg-primary-900"
					on:click|preventDefault={scrollIntoView}>Prenastics</a
				>
			</nav>
		</div>

		<!-- Card Block -->
		{#each data.cards as { id, title, description, src, alt, ages, duration, payment, note, href, name }}
			<div {id} class="card bg-neutral-100 shadow-lg w-[40rem] min-h-[24rem] flex-cols m-4 p-8">
				<h2 class="col-span-3 text-4xl text-primary-800 mb-4">{title}</h2>
				<div class="md:grid grid-cols-2 gap-4">
					<div>
						<img class=" rounded-md" {src} {alt} />
					</div>
					<div>
						<div class="grid grid-cols-2 content-start gap-8 mt-2 md:mt-0">
							<div class="mb-4">
								<p><b>Ages: {ages}</b></p>
								<p><b>{duration}</b></p>
								<p><b>{payment}</b></p>
							</div>
							<a
								type="button"
								class="btn w-32 h-11 justify-self-end bg-primary-600
                            dark:bg-primary-900"
								{href}>Register</a
							>
						</div>
						<p>{note}</p>
						<br />
					</div>
				</div>
				<p class="col-span-3 mt-4">{description}</p>
			</div>
		{/each}
	</div>
</main>
