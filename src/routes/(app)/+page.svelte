<script>
	import { slide, fly } from 'svelte/transition';
	import PageFooter from './PageFooter.svelte';

	export let data;
</script>

<main class="bg-[url('$lib/Regular/background.jpg')] dark:bg-[url('$lib/Regular/background_dark_2.png')] bg-secondary-500 dark:bg-secondary-900 bg-contain p-6">
	<div class="container">
        <!-- Container to Center all Elements -->

        <div class="flex flex-row items-center flex-wrap justify-center lg:flex-nowrap py-4 gap-12">
            <!-- Heading Contents -->
            <div class="flex flex-col lg:py-24 py-12 lg:pl-20">
                <h1>Those Who Endure,<br />Conquer</h1>
                <p class="my-2">
                    Discover your passion, ignite your spirit, and achieve greatness in a world of limitless
                    possibilities at our premier athletic center.
                </p>
                <a href="/signup" type="button" class="btn bg-primary-600 dark:bg-primary-900 w-28">Join</a>
            </div>
            <div>
                <img
                    class=" rounded-2xl grow object-cover lg:grow-0"
                    alt="Arm Stretch"
                    src="$lib/Landing/image2.jpg"
                />
            </div>
        </div>

        <div class="card bg-primary-600 dark:bg-primary-900 rounded-2xl p-8 dark:shadow-2xl">
            <!-- 1st Divider : News Bar -->
            <div class=" pl-1 flex flex-row justify-between">
                <h2>News</h2>
            </div>
            <!-- Wrapper for overflow -->
            <div class=" scroll-smooth flex overflow-x-auto gap-2 p-2">
                {#each data.news as news}
                    <div class="card bg-neutral-100 w-modal-slim rounded-2xl h-[14rem] pr-2 py-1" href="/">
                        <div class="overflow-y-auto p-2 pl-4 w-[19rem]">
                            <p>{news.date}</p>
                            <h3>{news.title}</h3>
                            <p class="h-[8rem]">{news.body}</p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>

        <div class="py-4 grid place-items-center lg:flex flex-wrap justify-center">
            <!-- Card Block -->
            {#each data.topLinks as card}
                <div
                    class="card bg-neutral-100 border-1 shadow-lg md:flex flex-row justify-center card-hover pt-4 md:p-4 m-2"
                    in:fly|local
                >
                    <img
                        class="container object-cover rounded-lg w-[16rem] max-h-[16rem] md:mr-5"
                        alt={card.image.alt}
                        src={card.image.src}
                    />

                    <div class="w-[18rem] p-4 md:p-0 r-4 relative">
                        <h3 class="text-primary-700 py-2 md:pt-0">{card.title}</h3>
                        <p>{card.body}</p>

                        {#if card.name && card.href}
                            <div class="md:absolute inset-x-0 bottom-0 pt-3 pb-2">
                                <a
                                    type="button"
                                    class="btn bg-primary-600 dark:bg-primary-900 ps-5 pe-5"
                                    href={card.href}>
                                    {card.name}
                                    <i class="ml-4 fa-solid fa-angle-right"></i>
                                </a>
                            </div>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>

        <div class="card bg-primary-600 dark:bg-primary-900 md:flex gap-4 dark:shadow-2xl p-8">
            <!-- Divider Content -->
            <img
                    class="container rounded-xl w-[20rem] object-cover"
                    alt="3 Children Posing"
                    src="$lib/Landing/image1.jpg"
                />
            <div class="pt-8">
                <h2 class="text-center lg:text-left">We're Hiring</h2>
                <p>
                    We offer competitive pay and benefits. Experience is not necessary. We will train anyone
                    with a great attitude and who loves kids. Must be available to work weekends. Fill out our
                    application today! We'd love to meet with you.
                </p>
            </div>
        </div>

        <div class="py-4 grid place-items-center lg:flex flex-wrap justify-center">
            <!-- Card Block -->
            {#each data.bottomLinks as card}
                <div
                    class="card bg-neutral-100 border-1 shadow-lg md:flex flex-row justify-center card-hover pt-4 md:p-4 m-2"
                    in:fly|local
                >
                    <img
                        class="container object-cover rounded-lg w-[16rem] max-h-[16rem] md:mr-5"
                        alt={card.image.alt}
                        src={card.image.src}
                    />

                    <div class="w-[18rem] p-4 md:p-0 r-4 relative">
                        <h3 class="text-primary-700 py-2 md:pt-0">{card.title}</h3>
                        <p>{card.body}</p>

                        {#if card.name && card.href}
                            <div class="md:absolute inset-x-0 bottom-0 pt-3 pb-2">
                                <a
                                    type="button"
                                    class="btn bg-primary-600 dark:bg-primary-900 ps-5 pe-5"
                                    href={card.href}>
                                    {card.name}
                                    <!-- (July 31, 2023) angle-right from FontAwesome. https://fontawesome.com/icons/angle-right?f=classic&s=solid -->
                                    <i class="ml-4 fa-solid fa-angle-right"></i>
                                </a>
                            </div>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>


        <div
            class="card bg-primary-600 dark:bg-primary-900 lg:flex dark:shadow-2xl p-8"
        >
            <!-- Divider Content -->
            <img
                    class="container rounded-xl w-[20em] object-cover"
                    alt="3 Children Posing"
                    src="$lib/Landing/image4.jpg"
                />
            <div class="flex flex-col p-4 lg:pt-4 lg:pr-8">
                <h2 class="text-center lg:text-left">Competitions</h2>
                <p>
                    Competitive gymnasts are selected throughout the Endurance Elite programs based on
                    discipline, skill and the ability to take a correction and apply it. We currently offer USA
                    Gymnastics Developmental Program for levels 3-10. Younger gymnasts may be invited to join
                    PreTeam before starting a competitive path. Gymnasts interested in trying out for the
                    Endurance Elite competitive team and that are currently enrolled in another gym's program,
                    must provide a recommendation letter from their current coach and a financial statement in
                    good standing.
                </p>
            </div>
        </div>
    </div>
</main>

<PageFooter />
