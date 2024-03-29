<script>
	import {
		AppBar,
		AppRail,
		AppRailAnchor,
		AppRailTile,
		AppShell,
		LightSwitch,
		TabGroup,
		TabAnchor
	} from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	// Pop up imports from skeleton and floating ui
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { popup } from '@skeletonlabs/skeleton';

	import { drawerStore } from '@skeletonlabs/skeleton';

	export let data;	// For loading external data
	let screenSize;		// For mobile menu display
	let activeButton;	// For static nav button state

	// Buttons States
	const selected = 'bg-primary-500 dark:bg-primary-900';
	const regular = '';

	// Update Button State
	const getClass = (id, active) => {
		if (active == id) {
			return selected;
		} else {
			return regular;
		}
	};

	// On Nav Click
	const menuClick = (id) => {
		if (activeButton == id ) {
			// If the button is clicked and the state is already active, clear state
			clearState(getActiveButton());
		} else {
			activeButton = id;
		}
	};

	// Returns reference to the active button element
	const getActiveButton = () => {
		return document.getElementById(activeButton);
	}

	// Clears styling and state for static nav buttons
	const clearState = (button) => {
		button.classList.remove('bg-primary-500');
		button.classList.remove('dark:bg-primary-900');
		activeButton = undefined;
	};

	// Event handler for clicking anywhere on the document
	const handleOutsideClick = (event) => {
		// Check if click was outside the element and its children
		let clickedElement = event.target;
		let button = getActiveButton();
		if (button == null) {return};
		if (!button.contains(clickedElement)) {
			clearState(button);
		};
	}

	// Account Pop Up Config
	const accountPopup = {
		event: 'click',
		target: 'accountPopup',
		placement: 'bottom',
		middleware: {
			offset: {
				crossAxis: -32
			}
		}
	};

	// Mobile Menu Drawer Store Config
	const openMobileMenu = () => {
		drawerStore.open({
			id: 'MobileMenu',
			position: 'right'
		});
	};

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<svelte:window bind:innerWidth={screenSize} on:click={handleOutsideClick} />
<AppShell>
	<!-- Nav Bar -->
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/" class="inline-flex h-1/3">
					<img
						alt="Endurance Elite Logo"
						class="badge w-1/6 p-0"
						src="$lib/Logos/ee-icon.png"
					/>
					<h4 class="ml-4 inline-block mt-4 align-middle">Endurance Elite</h4>
				</a>
			</svelte:fragment>

			<svelte:fragment slot="trail">
				{#if screenSize > 800}
					<!-- Set Nav Buttons and Nav Pop Up Menus-->
					{#each data.navItems as { id, label, menu, menuString, span, parentNavItems }}
						<button {id}
							on:click={() => menuClick(id)}
							class="w-20 h-12 {getClass(id, activeButton)}"
							use:popup={menu}>{label}</button
						>
						<div
							class="neutral dark:bg-[#31465B] border-[1px] p-4 shadow-2xl text-sm"
							data-popup={menuString}
						>
							<div class="grid grid-cols-3 gap-4">
								{#each parentNavItems as { label, href, childNavItems }}
									<div class={span}>
										<div class="max-w-[8rem]">
											<a {href} class="hover:underline">{label}</a>
										</div>
										{#if childNavItems != null}
											<hr />
											{#each childNavItems as { label, href }}
												<a {href} class="hover:underline">{label}</a>
												<br />
											{/each}
										{/if}
									</div>
								{/each}
							</div>
						</div>
					{/each}

					{#if data.roleId >= 1}
						<button class="w-20 h-12" use:popup={accountPopup}>Account</button>
						<div class="neutral dark:bg-[#31465B] border-[1px] text-center p-4 shadow-2xl" data-popup="accountPopup">
							<a  href="/settings">Settings</a>
							<hr class="rounded" />
							<form method="POST" action="/account?/logout" class="mt-4">
								<button type="submit" value="" class="btn variant-filled-error">Logout</button>
							</form>
						</div>
					{:else}
						<a class="nav-link text-black dark:text-white" href="/signup">Sign Up</a>
						<a class="btn bg-primary-600 dark:bg-primary-900" href="/login">Log In</a>
					{/if}
				{:else}
					<button name="Expand for Navigation Menu" on:click={openMobileMenu}>
						<!-- (August 6th, 2023) bars from FontAwesome. https://fontawesome.com/icons/bars?f=classic&s=solid -->
						<i class="fa-solid fa-bars fa-xl" />
					</button>

					<button class="w-8 h-12" use:popup={accountPopup}>
						<!-- (August 6th, 2023) user from FontAwesome. https://fontawesome.com/icons/user?f=classic&s=regular -->
						<i class="fa-regular fa-user fa-lg"></i>
					</button>
					<div class="neutral dark:bg-[#31465B] border-[1px] text-center p-4 shadow-2xl" data-popup="accountPopup">
						{#if data.roleId >= 1}
								<a  href="/settings">Settings</a>
								<hr class="rounded" />
								<form method="POST" action="/account?/logout" class="mt-4">
									<button type="submit" value="" class="btn variant-filled-error">Logout</button>
								</form>
						{:else}
							<a class="nav-link text-black dark:text-white" href="/signup">Sign Up</a>
							<hr class="rounded"/>
							<a class="btn bg-primary-600 dark:bg-primary-900 mt-4" href="/login">Log In</a>
						{/if}
					</div>
				{/if}

			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- Left Rail -->
	<svelte:fragment slot="sidebarLeft">
		{#if screenSize > 800}
		<AppRail>
			<AppRailAnchor href="/calendar" selected={$page.url.pathname.startsWith('/calendar')}>
				<svelte:fragment slot="lead">
					<span class="material-symbols-outlined text-black dark:text-white"> event </span>
				</svelte:fragment>
				<span><p class="text-black dark:text-white">Calendar</p></span>
			</AppRailAnchor>

			{#if data.roleId >= 2}
				<AppRailAnchor href="/training" selected={$page.url.pathname.startsWith('/training')}>
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
					<span><p class="text-black dark:text-white">Parent Portal</p></span>
				</AppRailAnchor>
				{#if data.roleId >= 3}
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
		{/if}
	</svelte:fragment>

	<slot />

	<!-- Left Rail -->
	<svelte:fragment slot="footer">
		{#if screenSize <= 800}
			<TabGroup 
			justify="justify-center"
			active="variant-filled-primary"
			hover="hover:variant-soft-primary"
			flex="flex-1 lg:flex-none"
			rounded=""
			border=""
			class="bg-surface-100-800-token w-full"
			>
				<TabAnchor href="/calendar" selected={$page.url.pathname.startsWith('/calendar')}>
					<svelte:fragment slot="lead">
						<span class="material-symbols-outlined text-black dark:text-white"> event </span>
					</svelte:fragment>
					<span><p class="text-black dark:text-white">Calendar</p></span>
				</TabAnchor>
				
				{#if data.roleId >= 2}
					<TabAnchor href="/training" selected={$page.url.pathname.startsWith('/training')}>
						<svelte:fragment slot="lead">
							<span class="material-symbols-outlined text-black dark:text-white"> weight </span>
						</svelte:fragment>
						<span><p class="text-black dark:text-white">Training</p></span>
					</TabAnchor>
				{/if}

				<TabAnchor href="https://app.iclasspro.com/portal/enduranceelite">
					<svelte:fragment slot="lead">
						<span class="material-symbols-outlined"> captive_portal </span>
					</svelte:fragment>
					<span><p class="text-black dark:text-white">Parent Portal</p></span>
				</TabAnchor>

				<!-- {#if data.roleId >= 3}
					<TabAnchor href="/admin" selected={$page.url.pathname.startsWith('/admin')}>
						<svelte:fragment slot="lead">
							<span class="material-symbols-outlined"> shield_person </span>
						</svelte:fragment>
						<span><p class="text-black dark:text-white">Admin</p></span>
					</TabAnchor>
				{/if} -->
			</TabGroup>
		{/if}
	</svelte:fragment>
</AppShell>

