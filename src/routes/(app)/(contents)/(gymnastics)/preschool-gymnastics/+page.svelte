<script>
    export let data;
</script>

<main class="bg-secondary-500 bg-[url('$lib/Regular/background.jpg')]">
    <div class="container text-center bg-primary-500 dark:bg-primary-900 p-4 flex-row">
        <!-- Header Block -->
        <div>
            <h1>Preschool Gymnastics</h1>
        </div>
    </div>

    <div class="container flex flex-wrap justify-center">
        <!-- Card Block -->
        {#each data.cards as {title, description, src, alt, note1, note2, href, name}}
            <div class="card container bg-neutral-100 shadow-lg w-[40rem] min-h-[24rem] flex-cols m-4 p-4">
                <h2 class="col-span-3 text-4xl text-primary-800">{title}</h2>
                <div class="flex gap-2">
                <img class="w-[18rem]" {src} {alt}>
                    <div class="relative">
                        <p><b>{note1}</b></p>
                        <p>{note2}</p>
                        <a type="button" class="btn col-span-3 bg-primary-600 dark:bg-primary-900 md:absolute bottom-0" {href}>{name}</a>
                    </div>
                </div>
                <p class="col-span-3">{description}</p>
            </div>
        {/each}
    </div>
</main>