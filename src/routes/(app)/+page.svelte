<script>
    import birthdayParties from "$lib/Landing/birthdayparties.jpg";
    import adultClasses from "$lib/Landing/adultclasses.jpg";
    import samplerClasses from "$lib/Landing/samplerclasses.jpg";
    import openGym from "$lib/Landing/opengym.jpg";
    import gymnastics from "$lib/Landing/gymnastics.jpg";
    import dance from "$lib/Landing/dance.jpg";
    import cheerLeadingClasses from "$lib/Landing/cheerleadingclasses.jpg";
    import preschoolClasses from "$lib/Landing/preschoolclasses.jpg";


    import {Paginator} from "@skeletonlabs/skeleton";
    import { slide, fly } from 'svelte/transition';
    import PageFooter from "./PageFooter.svelte";

    export let data;

    // $: newsItems = data.news.slice(page.offset, page.offset + page.limit);

    const img = (src) => {
        const noLib = src.slice(4, src.length).toString()
        return `src/lib${noLib}`
    }

    // let page = {
    //     offset: 0,
    //     limit: 4,
    //     size: data.news.length,
    //     amounts: [1, 2, 3, 4, 5],
    // }


</script>

<main class="bg-[url('$lib/Regular/background.jpg')] bg-secondary-500 dark:bg-secondary-900 bg-contain p-6">
    <!-- First Block of Contents -->
    <div class="container flex flex-row items-center flex-wrap justify-center lg:flex-nowrap py-4 gap-12">
        <!-- 1st Block of Contents -->
        <div class="container flex flex-col lg:py-24 py-12 lg:pl-20">
            <h1>Those Who Endure,<br>Conquer</h1>
            <p class="my-2">
                Discover your passion, ignite your spirit, and achieve greatness in a world of limitless possibilities at our premier athletic center.
            </p>
            <a href="/signup" type="button" class="btn bg-primary-600 dark:bg-primary-900 w-28">Join</a>
        </div>
        <div><img
                class=" rounded-2xl grow object-cover lg:grow-0"
                alt="Arm Stretch"
                src="$lib/Landing/image2.jpg"
        /></div>
    </div>


    <div class="card container bg-primary-600 dark:bg-primary-900 rounded-2xl p-4">
        <!-- 1st Divider : News Bar -->
        <div class="container pl-1 flex flex-row justify-between">
            <h2>News</h2>
            <div class="pt-4 pr-10 grow">
                <!-- <Paginator
                    controlVariant="variant-filled-surface"
                    buttonClasses="!px-3 mt-1 !h-auto btn variant-filled-surface border-0"
                    justify="justify-end"
                    bind:settings={page}
                    showPreviousNextButtons={true}
                /> -->
            </div>
        </div>
        <!-- Wrapper for overflow -->
        <div class="container flex overflow-x-auto gap-2 p-2 ">
            {#each data.news as news}
            <a class="card bg-neutral-100 w-modal-slim rounded-2xl h-[14rem] pr-2 py-1" href="/">
                <div class="container overflow-y-auto p-2 pl-4 w-[19rem]">
                        <p>{news.date}</p>
                        <h3>{news.title}</h3>
                        <p class="h-[8rem]">{news.body}</p>
                    </div>
                </a>
            {/each}
        </div>
    </div>

    <div class="container py-4">
        <!-- Card Block -->
        <div class="container grid place-items-center lg:flex flex-wrap justify-center">
            {#each data.topLinks as card}
                <div class="card bg-neutral-100 border-1 shadow-lg md:flex flex-row justify-center card-hover p-3 m-2" in:fly|local >
                    <div class="mr-5">
                        <img class="rounded-2xl w-[16rem] max-h-[16rem]"
                             alt={card.image.alt}
                             src={card.image.src}>
                    </div>
                    <div class="w-[290px] r-4 relative">
                        <h3 class="text-primary-700 pb-2">{card.title}</h3>
                        <p>{card.body}</p>

                        {#if (card.name && card.href)}
                            <div class="container md:absolute inset-x-0 bottom-0 pt-3 pb-2">
                                <a type="button" class="btn bg-primary-600 dark:bg-primary-900 ps-5 pe-5" href="{card.href}">{card.name}</a>
                            </div>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    </div>


    <div class="card container bg-primary-500 dark:bg-primary-900 flex flex-row">
        <div class="container w-4/12 h-3/12 p-4 mx-6">
            <img
                    class="rounded-xl w-[24em] h-[14em] object-cover"
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
        <div class="container grid place-items-center lg:flex flex-wrap justify-center">
            {#each data.bottomLinks as card}
                <div class="card bg-neutral-100 border-1 shadow-lg md:flex flex-row justify-center card-hover p-3 m-2" in:fly|local >
                    <div class="mr-5">
                        <img class="rounded-2xl object-cover w-[16rem] max-h-[16rem]"
                             alt={card.image.alt}
                             src={card.image.src}>
                    </div>
                    <div class="w-[290px] r-4 relative">
                        <h3 class="text-primary-700 pb-2">{card.title}</h3>
                        <p>{card.body}</p>

                        {#if (card.name && card.href)}
                            <div class="container md:absolute inset-x-0 bottom-0 pt-3 pb-2">
                                <a type="button" class="btn bg-primary-600 dark:bg-primary-900 ps-5 pe-5" href="{card.href}">{card.name}</a>
                            </div>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <div class="card container w-full bg-primary-600 dark:bg-primary-900 lg:flex flex-row">
        <div class="container lg:w-4/12 h-[18rem] p-4">
            <img
                    class="rounded-xl w-[24em] h-[14em] object-cover"
                    alt="3 Children Posing"
                    src="$lib/Landing/image4.jpg">
        </div>
        <div class="container flex flex-col p-4 lg:pt-8 lg:pr-8">
            <h2>Competitions</h2>
            <p>Competitive gymnasts are selected throughout the Endurance Elite programs based on discipline, skill and the ability to take a correction and apply it. We currently offer USA Gymnastics Developmental Program for levels 3-10. Younger gymnasts may be invited to join PreTeam before starting a competitive path. Gymnasts interested in trying out for the Endurance Elite competitive team and that are currently enrolled in another gym's program, must provide a recommendation letter from their current coach and a financial statement in good standing.</p>
        </div>
    </div>

</main>

<PageFooter />