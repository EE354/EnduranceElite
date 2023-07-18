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
        <h1>Recreational Dance</h1>
        <h2 class="text-primary-200 text-shadow italic"><q>Allow yourself to be a beginner. No one starts off being perfect.</q></h2>
    </div>

    <div class="container flex flex-wrap justify-center">
        <!-- Main Contents -->
        <div class="w-11/12 bg-neutral-100 flex justify-center shadow-lg m-4 p-4">
            <!-- Nav Buttons - Scroll to Position On Page -->
            <nav>
                <a href="#crisscross" class="btn bg-primary-600 dark:bg-primary-900" on:click|preventDefault={scrollIntoView}>Criss Cross</a>
                <a href="#combo" class="btn bg-primary-600 dark:bg-primary-900" on:click|preventDefault={scrollIntoView}>Combo</a>
                <a href="#hiphop" class="btn bg-primary-600 dark:bg-primary-900" on:click|preventDefault={scrollIntoView}>Hip Hop</a>
                <a href="#jazz" class="btn bg-primary-600 dark:bg-primary-900" on:click|preventDefault={scrollIntoView}>Jazz</a>
                <a href="#contemp" class="btn bg-primary-600 dark:bg-primary-900" on:click|preventDefault={scrollIntoView}>Contemporary</a>
                <a href="#samplerbtj" class="btn bg-primary-600 dark:bg-primary-900" on:click|preventDefault={scrollIntoView}>Sampler</a>
                <a href="#ballet" class="btn bg-primary-600 dark:bg-primary-900" on:click|preventDefault={scrollIntoView}>Ballet</a>
                <a href="#danceteam" class="btn bg-primary-600 dark:bg-primary-900" on:click|preventDefault={scrollIntoView}>Dance Team Prep</a>
                <a href="#tap" class="btn bg-primary-600 dark:bg-primary-900" on:click|preventDefault={scrollIntoView}>Tap</a>
                <a href="#leapjump" class="btn bg-primary-600 dark:bg-primary-900" on:click|preventDefault={scrollIntoView}>Leaps, Jumps, Turns</a>
                <!-- <a href="#" class="btn bg-primary-600 dark:bg-primary-900" on:click|preventDefault={scrollIntoView}></a> -->
            </nav>
        </div>

        <!-- Card Block -->
        {#each data.cards as {id, title, subclass, description, notice, src, alt, ages, duration, payment, note, href, name}}
            <div {id} class="card bg-neutral-100 shadow-lg w-[40rem] min-h-[24rem] flex-cols  m-4 p-4">
                <h2 class="col-span-3 text-4xl text-primary-800 mb-4">{title}</h2>
                <div class="flex gap-4">
                    <img class="w-[18rem] rounded-md" {src} {alt}>
                        <div class="relative">
                            <div class="mb-4">
                                <p><b>Ages: {ages}</b></p>
                                <p><b>{duration}</b></p>
                                <p><b>{payment}</b></p>
                            </div>
                            <p>{note}</p>
                            <a type="button" class="btn col-span-3 bg-primary-600 dark:bg-primary-900 md:absolute bottom-0" {href}>{name}</a>
                        </div>
                </div>
                <p>{subclass}</p>
                <p class="col-span-3 mt-4">{description}</p>
                <p><b>{notice}</b></p>
            </div>
        {/each} 
</main>