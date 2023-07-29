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

					{#if data.session?.sessionId}
						<button use:popup={accountPopup}>Account</button>

						<div class="card p-4" data-popup="popupClick">
							<a href="/account">Dashboard</a>
							<a href="/settings">Settings</a>
							<hr class="rounded" />
							<form method="POST" action="/account?/logout" class="mt-4">
								<button type="submit" value="" class="btn variant-filled-error">Logout</button>
							</form>
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
				<button on:click={openMobileMenu} class="btn variant-filled-primary">
					<i class="fa-solid fa-bars"></i>
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
