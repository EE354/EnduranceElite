<script>
    import {Paginator} from "@skeletonlabs/skeleton";
    import { slide, fly } from 'svelte/transition';

    export let data;

    $: newsItems = data.news.slice(page.offset, page.offset + page.limit);

    const img = (src) => {
        const noLib = src.slice(4, src.length).toString()
        return `src/lib/${noLib}`
    }

    let page = {
        offset: 0,
        limit: 4,
        size: data.news.length,
        amounts: [1, 2, 3, 4, 5],
    }


</script>

<main class="p-6">
    <!-- First Block of Contents -->
    <div class="container flex flex-row flex-wrap justify-center lg:flex-nowrap py-4">
        <!-- 1st Block of Contents -->
        <div class="container flex flex-col pt-24 pl-20">
            <h1>Those Who Endure, Conquer</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                leo magna, mollis vel risus nec, commodo mollis libero.
            </p>
            <button class="btn variant-filled-success w-28">Join</button>
        </div>
        <img
                class="lg:w-4/12 rounded-2xl grow  lg:grow-0"
                alt="Arm Stretch"
                src="$lib/Landing/image2.jpg"
        />
    </div>


    <div class="container variant-ghost-success rounded-2xl p-2 "><!-- 1st Divider : News Bar -->
        <div class="container pl-6 flex flex-row justify-between">

            <h2 class="grow-0">News</h2>
            <div class="pt-4 pr-10 grow ">
                <Paginator
                    controlVariant="variant-filled-surface"
                    buttonClasses="!px-3 mt-1 !h-auto btn variant-filled-surface border-0"
                    justify="justify-end"
                    bind:settings={page}
                    showPreviousNextButtons={true}
                />
            </div>
        </div>
        <!-- Wrapper for overflow -->
        <div class="container flex overflow-x-auto">
            {#each newsItems as news}
                <div class="card variant-filled-surface w-modal-slim rounded-2xl mx-2">
                    <div class="container p-4">
                        <p>{news.date}</p>
                        <h3>{news.title}</h3>
                        <p>{news.body}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
    <div class="container py-4">
        <!-- Card Block -->
        <div class="container flex flex-row flex-wrap justify-center">
            {#each data.topLinks as card}
                <dev class="card w-5/12 bg-surface flex flex-row justify-center py-8 m-1" in:fly|local >
                    <div class="mr-4">
                        <img class=" rounded-2xl"
                             alt={card.image.alt}
                             src={img(card.image.src)}>
                    </div>
                    <div class="w-5/12 r-4">
                        <h3>{card.title}</h3>
                        <p>{card.body}</p>

                        {#if (card.name && card.href)}
                            <div class="container pt-3">
                                <a type="button" class="btn variant-filled-tertiary ps-5 pe-5" href="{card.href}">{card.name}</a>
                            </div>
                        {/if}
                    </div>
                </dev>
            {/each}
        </div>
    </div>


    <div class="card variant-ghost-tertiary flex flex-row">
        <div class="container w-4/12 h-3/12 p-4">
            <img
                    class="rounded-xl"
                    alt="3 Children Posing"
                    src="$lib/Landing/image1.jpg">
        </div>
        <div class="container flex flex-col pt-8">
            <h2>We're Hiring</h2>
            <p>We offer competitive pay and benefits. Experience is not necessary. We will train anyone with a great attitude and who loves kids. Must be available to work weekends. Fill out our application today! We'd love to meet with you.</p>
        </div>

    </div>


    <div class="container py-4">
        <!-- Card Block -->
        <div class="container flex flex-row flex-wrap justify-center">
            {#each data.bottomLinks as card}
                <dev class="card w-5/12 bg-surface flex flex-row justify-center py-8 m-1">
                    <div class="mr-4">
                        <img class=" rounded-2xl"
                             alt={card.image.alt}
                             src={img(card.image.src)}>
                    </div>
                    <div class="w-5/12 r-4">
                        <h3>{card.title}</h3>
                        <p>{card.body}</p>

                        {#if (card.name && card.href)}
                            <div class="container pt-3">
                                <a type="button" class="btn variant-filled-tertiary ps-5 pe-5" href="{card.href}">{card.name}</a>
                            </div>
                        {/if}
                    </div>
                </dev>
            {/each}
        </div>
    </div>

    <div class="card variant-ghost-tertiary flex flex-row">
        <div class="container w-4/12 h-3/12 p-4">
            <img
                    class="rounded-xl"
                    alt="3 Children Posing"
                    src="$lib/Landing/image4.jpg">
        </div>
        <div class="container flex flex-col pt-8">
            <h2>Competitions</h2>
            <p>Competitive gymnasts are selected throughout the Endurance Elite programs based on discipline, skill and the ability to take a correction and apply it. We currently offer USA Gymnastics Developmental Program for levels 3-10. Younger gymnasts may be invited to join PreTeam before starting a competitive path. Gymnasts interested in trying out for the Endurance Elite competitive team and that are currently enrolled in another gym's program, must provide a recommendation letter from their current coach and a financial statement in good standing.</p>
        </div>
    </div>

</main>