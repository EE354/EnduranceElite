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
        <h1>Recreational Gymnastics</h1>
    </div>

    <div class="container flex flex-wrap justify-center">
        <div class="w-11/12 bg-neutral-100 justify-center shadow-lg m-4 p-4">
            <!-- Nav Buttons - Scroll to Position On Page -->
            <h4 class="mb-4 text-center">Click your Style to Scroll!</h4>
            <nav class="flex flex-wrap gap-2">
                <a href="#minielite" class="btn bg-primary-600 dark:bg-primary-900" on:click|preventDefault={scrollIntoView}>Mini Elite</a>
                <a href="#juniorelite" class="btn bg-primary-600 dark:bg-primary-900" on:click|preventDefault={scrollIntoView}>Junior Elite</a>
                <a href="#kinder" class="btn bg-primary-600 dark:bg-primary-900" on:click|preventDefault={scrollIntoView}>Kindernastics</a>
                <a href="#girlsrec" class="btn bg-primary-600 dark:bg-primary-900" on:click|preventDefault={scrollIntoView}>Girl's Rec Level 1-4</a>
                <a href="#boysrec" class="btn bg-primary-600 dark:bg-primary-900" on:click|preventDefault={scrollIntoView}>Boy's Rec Level 1-4</a>
                <a href="#condition" class="btn bg-primary-600 dark:bg-primary-900" on:click|preventDefault={scrollIntoView}>Condition & Flex</a>
            </nav>
        </div>

        <!-- Card Block -->
        {#each data.cards as {id, title, description, src, alt, ages, duration, payment, note, href, name}}
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
                <!-- <p>{subclass}</p> -->
                <p class="col-span-3 mt-4">{description}</p>
                <!-- <p><b>{notice}</b></p> -->
            </div>
        {/each} 
    </div>
</main>