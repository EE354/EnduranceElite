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
        <h1>Preschool Dance</h1>
        <h2 class="text-primary-200 text-shadow italic"><q>Dance is the language of the Soul</q></h2>
    </div>

    <div class="container flex flex-wrap justify-center">
        <!-- Main Contents -->
        <div class="w-11/12 bg-neutral-100 flex justify-center shadow-lg m-4 p-4">
            <!-- Nav Buttons - Scroll to Position On Page -->
            <nav>
                <a href="#tiptoe" class="btn bg-primary-600 dark:bg-primary-900" on:click|preventDefault={scrollIntoView}>Tippy Toe Dance</a>
                <a href="#ballet" class="btn bg-primary-600 dark:bg-primary-900" on:click|preventDefault={scrollIntoView}>Ballet Bears</a>
                <a href="#jazzy" class="btn bg-primary-600 dark:bg-primary-900" on:click|preventDefault={scrollIntoView}>Jazzy Jazzers</a>
                <a href="#hiphop" class="btn bg-primary-600 dark:bg-primary-900" on:click|preventDefault={scrollIntoView}>Hip Hop Hooray</a>
                <a href="#minisampler" class="btn bg-primary-600 dark:bg-primary-900" on:click|preventDefault={scrollIntoView}>Mini Sampler BJG</a>
            </nav>
        </div>

        <!-- Card Block -->
        {#each data.cards as {id, title, description, src, alt, ages, duration, payment, note, href, name}}
            <div {id} class="card bg-neutral-100 shadow-lg w-[40rem] min-h-[24rem] flex-cols  m-4 p-4">
                <h2 class="col-span-3 text-4xl text-primary-800 mb-4">{title}</h2>
                <div class="flex gap-4">
                    <img class="w-[18rem] rounded-md" {src} {alt}>
                        <div class="relative">
                            <div class="mb-4"><p><b>{ages}</b></p>
                            <p><b>{duration}</b></p>
                            <p><b>{payment}</b></p></div>
                            <p>{note}</p>
                            <a type="button" class="btn col-span-3 bg-primary-600 dark:bg-primary-900 md:absolute bottom-0" {href}>{name}</a>
                        </div>
                </div>
                <p class="col-span-3 mt-4">{description}</p>
            </div>
        {/each} 
    </div>
</main>