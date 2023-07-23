<script>
    export let data;

    function scrollIntoView({ target }) {
		const element = document.querySelector(target.getAttribute("href"));
		if (!element) return;
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
</script>

<main class="bg-secondary-500 bg-[url('$lib/Regular/background.jpg')]">
    <div class="container text-center bg-primary-500 dark:bg-primary-900 p-4 flex-row">
        <!-- Header Block -->
        <h1>Adult Classes</h1>
    </div>

    <div class="container flex flex-wrap justify-center">
        <img alt="Person Rolling on a Gymnastics Ball" src="$lib/Regular/Adult/adultclasses.jpg">
        <!-- Main Contents -->
        <!-- <div class="w-11/12 bg-neutral-100 justify-center shadow-lg m-4 p-4">
            <h4 class="mb-4 text-center">Click your Style to Scroll!</h4>
            <nav class="flex flex-wrap gap-2">
                <a href="#tumbling" class="btn bg-primary-600 dark:bg-primary-900" on:click|preventDefault={scrollIntoView}>Tumbling</a>
                <a href="#precheer" class="btn bg-primary-600 dark:bg-primary-900" on:click|preventDefault={scrollIntoView}>Pre-Cheer</a>
                <a href="#cheer" class="btn bg-primary-600 dark:bg-primary-900" on:click|preventDefault={scrollIntoView}>Cheer</a>
            </nav>
        </div> -->

        <!-- Card Block -->
        {#each data.cards as {id, title, subclass, description, src, alt, ages, duration, payment, note, href, name}}
            <div {id} class="card bg-neutral-100 shadow-lg w-[40rem] min-h-[24rem] flex-cols  m-4 p-4">
                <h2 class="col-span-3 text-4xl text-primary-800 mb-4">{title}</h2>
                <div class="md:flex gap-4">
                    <img class="w-[18rem] rounded-md" {src} {alt}>
                        <div>
                            <div class="flex gap-4 mt-2 md:mt-0">
                                <div class="mb-4">
                                    <p><b>Ages: {ages}</b></p>
                                    <p><b>{duration}</b></p>
                                    <p><b>{payment}</b></p>
                                </div>
                                <a type="button" class="btn w-44 h-11 col-span-3 bg-primary-600 dark:bg-primary-900" {href}>{name}</a>
                            </div>
                            <p>{note}</p>
                        </div>
                </div>
                <p>{subclass}</p>
                <p class="col-span-3 mt-4">{description}</p>
            </div>
        {/each} 
    </div>
</main>