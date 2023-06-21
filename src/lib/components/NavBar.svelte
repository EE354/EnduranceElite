<script>

    export let data;

import {AppBar} from "@skeletonlabs/skeleton";
</script>
<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
</svelte:head>

<AppBar>

    <svelte:fragment slot="lead">
        <a href="/"><img alt="Endurance Elite Logo" class="badge w-1/4 p-0" style="max-height: 160%" src="src/lib/assets/Logos/ee-icon.png"/></a>
    </svelte:fragment>


    <svelte:fragment slot="trail">
        {#if data?.user}
            <a class="nav-link" href="/login">Account</a>
        {:else}
            <a class="nav-link" href="/signup">Signup</a>
            <a class="btn variant-filled-primary" href="/login"><p>Login</p></a>
        {/if}
    </svelte:fragment>

</AppBar>


<!---
<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
     Nav bar toggle
    <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
    >
        <span class="navbar-toggler-icon" />
    </button>


    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul
            class="navbar-nav d-flex justify-content-around"
            style="width: 100%;"
        >

                <a class="nav-link dropdown-toggle" href="/index" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Home
                </a>

                <div class="dropdown-menu" aria-labelledby="navbarDropdown">

                    <a class="dropdown-item" href="#">1</a>
                    <a class="dropdown-item" href="#">2</a>
                    <a class="dropdown-item" href="#">3</a>
                </div>
            </li>

            <li class="nav-item dropdown my-auto">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    About
                </a>

                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">1</a>
                    <a class="dropdown-item" href="#">2</a>
                    <a class="dropdown-item" href="#">3</a>
                </div>
            </li>

            <li class="nav-item my-auto">
                <a class="nav-link" href="#">Activities</a>
            </li>


            <a href="/index" style="height: 90px;">
                <img
                    alt="Endurance Elite Logo"
                    id="smalllogo"
                    src="src/lib/assets/Logos/ee-icon.png"
                />
            </a>

            <li class="nav-item my-auto">
                <a class="nav-link" href="#">Merchandise</a>
            </li>


            <li class="nav-item my-auto">

                <a class="nav-link" href="/calendar">Calendar</a>
            </li>


            <li class="nav-item my-auto">

                <a class="nav-link" href="/login">Account</a>
            </li>
        </ul>
    </div>
</AppBar>

<style>
    img {
        max-width: 100%;
        max-height: 160%;
    }

    @media (max-width: 991px) {
        a:has(img) {
            display: none;
        }

        img {
            display: none;
        }
    }
</style>
-->