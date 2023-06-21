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
                <a class="nav-link" href={$url("/index")} role="button">Home</a>
            </li>

            <!-- About -->
            <li class="nav-item dropdown my-auto">
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    About
                </a>

                <div class="dropdown-menu bg-white" aria-labelledby="navbarDropdown">
                    <div class="d-flex">
                        <div class="d-inline-flex flex-column flex-fill">
                            <!-- svelte-ignore a11y-invalid-attribute -->
                            <a class="dropdown-item" href="#">Registration</a>
                            <!-- svelte-ignore a11y-invalid-attribute -->
                            <a class="dropdown-item" href="#">Schedule</a>
                            <!-- svelte-ignore a11y-invalid-attribute -->
                            <a class="dropdown-item" href="#">Tuition & Policies</a>
                        </div>
                        <div class="d-inline-flex flex-column flex-fill">
                            <!-- svelte-ignore a11y-invalid-attribute -->
                            <a class="dropdown-item" href="#">Crew</a>
                            <!-- svelte-ignore a11y-invalid-attribute -->
                            <a class="dropdown-item" href="#">Join the Crew</a>
                            <!-- svelte-ignore a11y-invalid-attribute -->
                            <a class="dropdown-item" href="#">Contact Us</a>
                        </div>
                    </div>
                </div>
            </li>

            <!-- Activities -->
            <li class="nav-item my-auto">
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="nav-link" href="#">Activities</a>
            </li>

            <!-- Endurance Elite logo -->
            <!-- svelte-ignore a11y-invalid-attribute -->

            <a href="#" style="height: 90px;">
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
                <a class="nav-link" href="#">Events</a>
            </li>

            <!-- Account -->
            <li class="nav-item my-auto">
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="nav-link" href="#">Account</a>
            </li>
        </ul>
    </div>
</nav>

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

    @media (min-width: 991px) {
        .dropdown:hover .dropdown-menu {
            display: block;
            width: 100vw;
        }
    }
</style>
