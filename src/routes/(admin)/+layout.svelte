<script>
    import {AppBar, AppRail, AppRailAnchor, AppRailTile, AppShell, LightSwitch} from "@skeletonlabs/skeleton";
    import {page} from "$app/stores";
    import {popup} from '@skeletonlabs/skeleton';

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
</script>

<AppShell>
    <svelte:fragment slot="header">
        <AppBar>

            <svelte:fragment slot="lead">
                    <a href="/admin" class="flex flex-row">
                        <img alt="Endurance Elite Logo" class="w-1/4 p-0" style="max-height: 160%" src="$lib/Logos/EE Logo.png"/>
                        <p class="pl-4 pt-3 dark:text-white text-black text-xl font-">Admin Dashboard</p>
                    </a>

            </svelte:fragment>

            <svelte:fragment slot="trail">
                <button class="w-20 h-12" use:popup={accountPopup}>Account</button>
                    <div class="neutral dark:bg-[#31465B] border-[1px] text-center p-4 shadow-2xl" data-popup="accountPopup">
                        <a  href="/settings">Settings</a>
                        <hr class="rounded" />
                        <form method="POST" action="/account?/logout" class="mt-4">
                            <button type="submit" value="" class="btn variant-filled-error">Logout</button>
                        </form>
                    </div>
            </svelte:fragment>

        </AppBar>
    </svelte:fragment>


    <svelte:fragment slot="sidebarLeft">
        <AppRail>
            <!-- Calendar Button -->
            <AppRailAnchor href="/admin/events" selected={$page.url.pathname === '/admin/events'}>
                <svelte:fragment slot="lead">
                    <span class="material-symbols-outlined text-black dark:text-white">
                    event
                    </span>
                </svelte:fragment>
                <span><p class="text-black dark:text-white">Events</p></span>
            </AppRailAnchor>

            <!-- Schedule Button -->
            <AppRailAnchor href="/admin/schedule" selected={$page.url.pathname === '/admin/schedule'}>
                <svelte:fragment slot="lead">
                    <span class="material-symbols-outlined text-black dark:text-white">
                    schedule
                    </span>
                </svelte:fragment>
                <span><p class="text-black dark:text-white">Schedule</p></span>
            </AppRailAnchor>

            <!-- Training Button -->
            <AppRailAnchor href="/admin/training" selected={$page.url.pathname === '/admin/training'}>
                <svelte:fragment slot="lead">
                    <span class="material-symbols-outlined text-black dark:text-white">
                    weight
                    </span>
                </svelte:fragment>
                <span><p class="text-black dark:text-white">Training</p></span>
            </AppRailAnchor>
            <AppRailAnchor href="/admin/groups" selected={$page.url.pathname === '/admin/groups'}>
                <svelte:fragment slot="lead">
                    <span class="material-symbols-outlined text-black dark:text-white">
                    group
                    </span>
                </svelte:fragment>
                <span><p class="text-black dark:text-white">Groups</p></span>
            </AppRailAnchor>

            <AppRailAnchor href="/admin/users" selected={$page.url.pathname === '/admin/users'}>
                <svelte:fragment slot="lead">
                        <span class="material-symbols-outlined text-black dark:text-white">
                        person
                        </span>
                </svelte:fragment>
                <span><p class="text-black dark:text-white">Users</p></span>
            </AppRailAnchor>

            <AppRailAnchor href="/admin/news"  selected={$page.url.pathname === '/admin/news'}>
                <svelte:fragment slot="lead">
                        <span class="material-symbols-outlined text-black dark:text-white">
                        news
                        </span>
                </svelte:fragment>
                <span><p class="text-black dark:text-white">News</p></span>
            </AppRailAnchor>


            <!-- Bottom slot -->
            <svelte:fragment slot="trail">
                <AppRailAnchor href="/" selected={$page.url.pathname === '/'}>
                    <svelte:fragment slot="lead">
                            <span class="material-symbols-outlined">
                                home
                            </span>
                    </svelte:fragment>
                    <span><p class="text-black dark:text-white">Home</p></span>
                </AppRailAnchor>
                <AppRailTile><div class="p-4"><LightSwitch /></div></AppRailTile>
            </svelte:fragment>
        </AppRail>
    </svelte:fragment>


    <slot />


</AppShell>

<slot/>