<script>
	import { Avatar } from '@skeletonlabs/skeleton';

	export let data;
</script>

<main>
	<div class="container text-center bg-[url('https://static.wixstatic.com/media/34a5c89879d04bd0b22d4754040a4df9.jpg/v1/fill/w_980,h_315,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/34a5c89879d04bd0b22d4754040a4df9.jpg')] p-4 mb-4">
		<!-- Header Block -->
		<div>
			<h1 class="text-primary-500 text-shadow">Meet the CREW</h1>
		</div>
	</div>

	<div class="container flex flex-wrap gap-8 place-content-center p-8">
        <!-- Avatars Grid -->
		{#each data.crew as { name, roles, src, initials}}
			<div class="grid place-items-center w-32 text-center">
				<Avatar {src} {initials} width="w-32" rounded="rounded-full" />
				<h2 class="text-xl">{name}</h2>
				<p>{roles}</p>
			</div>
		{/each}
	</div>
</main>
