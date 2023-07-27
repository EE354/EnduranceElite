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

	export let data;

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

	const aboutPopup = {
		event: 'click',
		target: 'aboutPopup',
		placement: 'bottom',
		middleware: {
			offset: {
				crossAxis: -37
			}
		}
	};

	const activitiesPopup = {
		event: 'click',
		target: 'activitiesPopup',
		placement: 'bottom',
		middleware: {
			offset: {
				crossAxis: -257
			}
		}
	};

	const eventsPopup = {
		event: 'click',
		target: 'eventsPopup',
		placement: 'bottom',
		middleware: {
			offset: {
				crossAxis: 0
			}
		}
	};

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

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
				<!-- Navigation for Static Pages -->
				<button
					on:click={() => {
						menuClick(1);
					}}
					class="w-20 h-12 {getClass(1, activeButton)}"
					use:popup={aboutPopup}>About</button
				>
				<button
					on:click={() => {
						menuClick(3);
					}}
					class="w-20 h-12 {getClass(3, activeButton)}"
					use:popup={eventsPopup}>Events</button
				>
				<button
					on:click={() => {
						menuClick(2);
					}}
					class="w-20 h-12 {getClass(2, activeButton)}"
					use:popup={activitiesPopup}>Activities</button
				>

				<div
					class="neutral dark:bg-[#31465B] border-[1px] border-neutral-400 p-4 w-50 shadow-2xl text-sm"
					data-popup="aboutPopup"
				>
					<!-- About Popup -->
					<div><a href="/about">About Us</a></div>
					<div><a href="/tuition">Tuition</a></div>
					<div><a href="/crew">Crew</a></div>
					<div><a href="/join-the-crew">Join the Crew</a></div>
					<div><a href="/contact-us">Contact Us</a></div>
				</div>

				<div
					class="neutral border-[1px] border-neutral-400 p-4 w-50 shadow-2xl text-sm"
					data-popup="eventsPopup"
				>
					<!-- Events Popup -->
					<div class="grid grid-cols-3 gap-x-8 gap-y-4">
						<div class="col-span-1"><a href="/">Special Events</a></div>
						<div class="col-span-1"><a href="/open-gym">Open Gym</a></div>
						<div class="col-span-1"><a href="/camps">Camps</a></div>
						<div class="col-span-1"><a href="/friday-night-flick">Friday Night Flick</a></div>
						<div class="col-span-1"><a href="/parents-night-out">Parent's Night Out</a></div>
						<div class="col-span-1"><a href="/birthday-parties">Birthday Parties</a></div>
						<div class="col-span-1"><a href="/clinics">Clinics</a></div>
						<div class="col-span-1"><a href="/after-school">After School</a></div>
						<div class="col-span1"><a href="/field-trips">Field Trips</a></div>
						<div class="col-span-1">
							<a href="/gymnastics-ninja-showcase">Gymnastics/Ninja Summer Showcase 2023</a>
						</div>
						<div class="col-span-1">
							<a href="/dance-cheer-showcase">Dance/Cheeer Summer Showcase 2023</a>
						</div>
					</div>
				</div>

				<div
					class="neutral border-[1px] border-neutral-400 p-4 w-50 shadow-2xl text-sm"
					data-popup="activitiesPopup"
				>
					<!-- Activities Popup -->
					<div class="grid grid-cols-3 gap-4">
						<div class="col-span-1">
							<a href="/gymnastics" class="font-bold dark:font-normal">Gymnastics</a>
							<hr />
							<a href="/preschool-gymnastics">Preschool Gymnastics</a>
							<br />
							<a href="/recreational-gymnastics">Recreational Gymnastics</a>
						</div>
						<div class="col-span-1">
							<a href="/dance" class="font-bold dark:font-normal">Dance</a>
							<hr />
							<a href="/preschool-dance">Preschool Dance</a>
							<br />
							<a href="/recreational-dance">Recreational Dance</a>
						</div>
						<div class="col-span-1">
							<a href="/cheer" class="font-bold dark:font-normal">Cheer</a>
							<hr />
							<a href="/cheer-classes">Cheer Classes</a>
						</div>
						<div class="col-span-1">
							<a href="/ninja-warrior" class="font-bold dark:font-normal">Ninja Warrior</a>
							<hr />
						</div>
						<div class="col-span-1">
							<a href="/adult" class="font-bold dark:font-normal">Adult</a>
							<hr />
							<a href="/adult-classes">Adult Classes</a>
						</div>
						<div class="col-span-1">
							<a href="/competitive" class="font-bold dark:font-normal">Competitive</a>
							<hr />
							<a href="/team-information">Team Information</a>
							<br />
							<a href="/college-recruiting">College Recruiting</a>
						</div>
					</div>
				</div>

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
