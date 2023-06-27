<script>
    import { url } from "@roxi/routify";
    import { account } from "../stores";
</script>

<!-- TODO: Nav bar -->
<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <!-- Nav bar toggle -->
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

    <!-- Nav bar contents -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul
            class="navbar-nav d-flex justify-content-around"
            style="width: 100%;"
        >
            <!-- Left side of logo -->
            <!-- Home button -->
            <li class="nav-item dropdown my-auto">
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="nav-link dropdown-toggle" href={$url("/index")} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Home
                </a>

                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <!-- svelte-ignore a11y-invalid-attribute -->
                    <a class="dropdown-item" href="#">1</a>
                    <!-- svelte-ignore a11y-invalid-attribute -->
                    <a class="dropdown-item" href="#">2</a>
                    <!-- svelte-ignore a11y-invalid-attribute -->
                    <a class="dropdown-item" href="#">3</a>
                </div>
            </li>

            <!-- About -->
            <li class="nav-item dropdown my-auto">
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    About
                </a>

                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <!-- svelte-ignore a11y-invalid-attribute -->
                    <a class="dropdown-item" href="#">1</a>
                    <!-- svelte-ignore a11y-invalid-attribute -->
                    <a class="dropdown-item" href="#">2</a>
                    <!-- svelte-ignore a11y-invalid-attribute -->
                    <a class="dropdown-item" href="#">3</a>
                </div>
            </li>

            <!-- Activities -->
            <li class="nav-item my-auto">
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="nav-link" href="#">Activities</a>
            </li>

            <!-- Endurance Elite logo -->
            <!-- svelte-ignore a11y-invalid-attribute -->

            <a href={$url("/index")} style="height: 90px;">
                <img
                    alt="Endurance Elite Logo"
                    id="smalllogo"
                    src="https://static.wixstatic.com/media/b16c48_6a92ce20130a4dc79bc51ab9f8c7be1c~mv2.png/v1/crop/x_336,y_301,w_2355,h_2368/fill/w_208,h_209,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Badge%20White%20BG.png"
                />
            </a>

            <!-- Right side of logo -->
            <!-- Merchandise -->
            <li class="nav-item my-auto">
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="nav-link" href="#">Merchandise</a>
            </li>

            <!-- Events -->
            <li class="nav-item my-auto">
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="nav-link" href={$url("/calendar")}>Calendar</a>
            </li>

            <!-- Account -->
            {#if $account.email != null}
                <li class="nav-item active">
                    <a class="nav-link" href={$url('./account')}>Account</a>
                </li>
            {:else}
                <li class="nav-item active">
                    <a class="nav-link" href={$url('./login')}>Login</a>
                </li>
            {/if}
        </ul>
    </div>
</nav>

<!-- Old nav bar -->
<!-- <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
    <a class="navbar-brand" href={$url('/')}>
        <img alt="Endurance Elite Logo" id="smalllogo" src="https://static.wixstatic.com/media/b16c48_6a92ce20130a4dc79bc51ab9f8c7be1c~mv2.png/v1/crop/x_336,y_301,w_2355,h_2368/fill/w_208,h_209,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Badge%20White%20BG.png">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
        <div class="header-left">
            <li class="nav-item active">
            <a class="nav-link" href={$url('./')}>Home</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href={$url('./')} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href={$url('./')}>Action</a>
                <a class="dropdown-item" href={$url('./')}>Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href={$url('./')}>Something else here</a>
                </div>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href={$url('./')} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Activities
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href={$url('./')}>Action</a>
                <a class="dropdown-item" href={$url('./')}>Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href={$url('./')}>Something else here</a>
            </div>
            </li>
        </div>
        <img alt="Endurance Elite Logo"  id="biglogo" src="https://static.wixstatic.com/media/b16c48_6a92ce20130a4dc79bc51ab9f8c7be1c~mv2.png/v1/crop/x_336,y_301,w_2355,h_2368/fill/w_208,h_209,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Badge%20White%20BG.png">
        <div class="header-right">
            <li class="nav-item active">
                <a class="nav-link" href={$url('./')}>Merch</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href={$url('/')} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Events
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href={$url('./')}>Action</a>
                <a class="dropdown-item" href={$url('./')}>Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href={$url('./')}>Something else here</a>
                </div>
            </li>
            {#if $account.email != null}
                 <li class="nav-item active">
                     <a class="nav-link" href={$url('./account')}>Account</a>
                 </li>
            {:else}
                <li class="nav-item active">
                    <a class="nav-link" href={$url('./login')}>Login</a>
                </li>
            {/if}
        </div>
    </ul>
    </div>
  </nav>
-->

<!-- <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans&display=swap');

    .dropdown:hover .dropdown-menu {
        display: block;
    }

    .dropdown-menu {
        box-sizing: border-box;
        background: rgba(0, 0, 0, 0.04);
        border-bottom: 1px solid #000000;

        flex: none;
        order: 2;
        align-self: stretch;
        flex-grow: 0;
        z-index: 0;
    }

    a {
        width: 100px;
        height: 24px;

        font-family: 'Plus Jakarta Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;

        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: -0.03em;

        color: #000000;

        opacity: 0.9;

        flex: none;
        order: 1;
        flex-grow: 0;
    }

    #smalllogo {
        display: block;
        width: 50px;
        height: 50px;
    }
    
    #biglogo {
        display: none;
    }

    @media (min-width: 992px) {


        .collapse {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 992px;
        }

        .navbar {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 992px;

        }

        .collapse{
            position: relative;
            width: fit-content;
        }

        .header-left {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 0px;

            width: 340px;
            height: 110px;

            flex: none;
            order: 0;
            flex-grow: 1;
            z-index: 0;
            /* background-color: aquamarine; */
        }

        .header-right {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 0px;


            width: 340px;
            height: 110px;

            flex: none;
            order: 1;
            flex-grow: 1;
            z-index: 1;
            /* background-color: aquamarine; */
        }

        .dropdown-menu {
            flex-direction: row;
            align-items: flex-start;
            padding: 32px 80px 48px 170px;
            gap: 10px;

            width: 992px;
            height: 250px;

            position: fixed;
            left: 50%;
            transform: translateX(-50%);

        }
        
        #smalllogo {
        display: none;
        width: 50px;
        height: 50px;
    }
    
        #biglogo {
            display: block;
            width: 164px;
            height: 165px;
        }
    }
   
</style> -->

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
