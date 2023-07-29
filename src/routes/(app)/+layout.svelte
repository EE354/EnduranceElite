<script>
	import {
		AppBar,
		AppRail,
		AppRailAnchor,
		AppRailTile,
		AppShell,
		LightSwitch
	} from '@skeletonlabs/skeleton';
	import { beforeNavigate } from '$app/navigation';
	import { page } from '$app/stores';

	// Pop up imports from skeleton and floating ui
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { popup } from '@skeletonlabs/skeleton';

	import {drawerStore} from "@skeletonlabs/skeleton";

	export let data;
	let screenSize;

	let selectedNav = null;

	//Code for button toggles
	let activeButton;
	$: activeButton = undefined;

	const selected = 'bg-primary-500 dark:bg-primary-900';
	const secondary = 'btn-secondary';

	const getClass = (id, active) => {
		if (active == id) {
			return selected;
		} else {
			return secondary;
		}
	};

	function menuClick(id) {
		activeButton = id;
		selectedNav = id;
	}

	const accountPopup = {
		event: 'click',
		target: 'popupClick',
		placement: 'top'
	};

	const openMobileMenu = () => {
        drawerStore.open({
            id: "MobileMenu",
            position: "right",
        });
    }

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<svelte:window bind:innerWidth={screenSize} />

<AppShell>
	<!-- Nav Bar -->
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/" class="inline-flex h-1/3">
					<img
						alt="Endurance Elite Logo"
						class="badge w-2/12 p-0"
						style="max-height: 160%"
						src="$lib/Logos/ee-icon.png"
					/>
					<h4 class="ml-4 inline-block mt-4 align-middle">Endurance Elite</h4>
				</a>
			</svelte:fragment>

			<svelte:fragment slot="trail">
	
				{#if screenSize > 800}
					<!-- Set Nav Buttons and Nav Pop Up Menus-->
					{#each data.navItems as {id, label, menu, menuString, span, parentNavItems}}
						<button on:click={() => { menuClick(id); }} class="w-20 h-12 {getClass(id, activeButton)}" use:popup={menu}>{label}</button>
						<div
						class="neutral dark:bg-[#31465B] border-[1px] p-4 shadow-2xl text-sm"
						data-popup="{menuString}"
						>
							<div class="grid grid-cols-3 gap-4">
								{#each parentNavItems as {label, href, childNavItems}}
									<div class="{span}">
										<a {href} class="hover:underline">{label}</a>
										{#if childNavItems != null}
											<hr />
											{#each childNavItems as {label, href}}
												<a {href} class="hover:underline">{label}</a>
												<br />
											{/each}
										{:else}
											<br />
										{/if}
									</div>
								{/each}
							</div>
						</div>
					{/each}

					{#if data.role >= 1}
						<button use:popup={accountPopup}>Account</button>

						<div class="card p-4" data-popup="popupClick">
							<a href="/account">Dashboard</a>
							<a href="/settings">Settings</a>
							<hr class="rounded" />
							<form method="POST" action="/account?/logout" class="mt-4">
								<button type="submit" value="" class="btn variant-filled-error">Logout</button>
							</form>
						</div>
						<div class="col-span-1 hover:underline">
							<a href="/dance-cheer-showcase">Dance/Cheeer Summer Showcase 2023</a>
						</div>

				<div
					class="neutral border-[1px] border-neutral-400 p-4 w-50 shadow-2xl text-sm"
					data-popup="activitiesPopup"
				>
					<!-- Activities Popup -->
					<div class="grid grid-cols-3 gap-4">
						<div class="col-span-1">
							<a href="/gymnastics" class="font-bold dark:font-normal hover:underline  pt-1 pb-[0.8px] pr-1 pl-[2px] rounded-md hover:bg-primary-500 hover:dark:bg-primary-900">Gymnastics</a>
							<hr />
							<a href="/preschool-gymnastics" class="hover:underline">Preschool Gymnastics</a>
							<br />
							<a href="/recreational-gymnastics">Recreational Gymnastics</a>
						</div>
						<div class="col-span-1">
							<a href="/dance" class="font-bold dark:font-normal pt-1 pb-[0.8px] pr-1 pl-[2px] rounded-md hover:bg-primary-500 hover:dark:bg-primary-900">Dance</a>
							<hr />
							<a href="/preschool-dance" class="hover:underline">Preschool Dance</a>
							<br />
							<a href="/recreational-dance" class="hover:underline">Recreational Dance</a>
						</div>
						<div class="col-span-1">
							<a href="/cheer" class="font-bold dark:font-normal hover:underline  pt-1 pb-[0.8px] pr-1 pl-[2px] rounded-md hover:bg-primary-500 hover:dark:bg-primary-900">Cheer</a>
							<hr />
							<a href="/cheer-classes" class="hover:underline">Cheer Classes</a>
						</div>
						<div class="col-span-1">
							<a href="/ninja-warrior" class="font-bold dark:font-normal hover:underline  pt-1 pb-[0.8px] pr-1 pl-[2px] rounded-md hover:bg-primary-500 hover:dark:bg-primary-900">Ninja Warrior</a>
							<hr />
						</div>
						<div class="col-span-1">
							<a href="/adult" class="font-bold dark:font-normal hover:underline  pt-1 pb-[0.8px] pr-1 pl-[2px] rounded-md hover:bg-primary-500 hover:dark:bg-primary-900">Adult</a>
							<hr />
							<a href="/adult-classes" class="hover:underline">Adult Classes</a>
						</div>
						<div class="col-span-1">
							<a href="/competitive" class="font-bold dark:font-normal hover:underline  pt-1 pb-[0.8px] pr-1 pl-[2px] rounded-md hover:bg-primary-500 hover:dark:bg-primary-900">Competitive</a>
							<hr />
							<a href="/team-information" class="hover:underline">Team Information</a>
							<br />
							<a href="/college-recruiting" class="hover:underline">College Recruiting</a>
						</div>
					</div>
				</div>
					{:else}
						<a class="nav-link text-black dark:text-white" href="/signup"
							>Sign Up</a
						>
						<a class="btn bg-primary-600 dark:bg-primary-900" href="/login"
							>Log In</a
						>
					{/if}
				{:else}
				<button name="Expand for Navigation Menu" on:click={openMobileMenu}>
					<i class="fa-solid fa-bars fa-xl"></i>
				</button>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- Left Rail -->
	<svelte:fragment slot="sidebarLeft">
		<AppRail>
			<AppRailAnchor href="/calendar" selected={$page.url.pathname.startsWith('/calendar')}>
				<svelte:fragment slot="lead">
					<span class="material-symbols-outlined text-black dark:text-white"> event </span>
				</svelte:fragment>
				<span><p class="text-black dark:text-white">Calendar</p></span>
			</AppRailAnchor>

			{#if data.role >= 2}
				{#if data.role >= 2}
					<AppRailAnchor href="/schedule" selected={$page.url.pathname.startsWith('/schedule')}>
						<svelte:fragment slot="lead">
							<span class="material-symbols-outlined text-black dark:text-white"> schedule </span>
						</svelte:fragment>
						<span><p class="text-black dark:text-white">Schedule</p></span>
					</AppRailAnchor>
				{/if}

				<AppRailAnchor href="/training" selected={$page.url.pathname.startsWith('/chat')}>
					<svelte:fragment slot="lead">
						<span class="material-symbols-outlined text-black dark:text-white"> weight </span>
					</svelte:fragment>
					<span><p class="text-black dark:text-white">Training</p></span>
				</AppRailAnchor>
			{/if}

			<svelte:fragment slot="trail">
				<AppRailAnchor href="https://app.iclasspro.com/portal/enduranceelite">
					<svelte:fragment slot="lead">
						<span class="material-symbols-outlined"> captive_portal </span>
					</svelte:fragment>
					<span><p class="text-black dark:text-white">Parent portal</p></span>
				</AppRailAnchor>
				{#if data.role >= 3}
					<AppRailAnchor href="/admin" selected={$page.url.pathname.startsWith('/admin')}>
						<svelte:fragment slot="lead">
							<span class="material-symbols-outlined"> shield_person </span>
						</svelte:fragment>
						<span><p class="text-black dark:text-white">Admin</p></span>
					</AppRailAnchor>
				{/if}
				<AppRailTile><div class="p-4"><LightSwitch /></div></AppRailTile>
			</svelte:fragment>
		</AppRail>
	</svelte:fragment>

	<slot />
</AppShell>
