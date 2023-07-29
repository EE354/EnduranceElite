<script>
	import { slide, fly } from 'svelte/transition';
	import PageFooter from '../../(app)/PageFooter.svelte';

	export let data;
</script>

<main class="bg-surface dark:bg-surface-900 bg-contain p-6 h-screen">
	<div class="container">
        <!-- Container to Center all Elements -->

        <div class="flex flex-row items-center flex-wrap justify-center lg:flex-nowrap py-4 gap-12">
            <!-- Heading Contents -->
            <div class="flex flex-col lg:py-24 py-12 lg:pl-20">
                <h1>Admin Dashboard</h1>
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
    </div>
</main>

