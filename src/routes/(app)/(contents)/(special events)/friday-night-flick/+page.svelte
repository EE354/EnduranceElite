<script>
    export let data;
</script>

<main>
    <div class="container text-center bg-primary-500 dark:bg-primary-900 p-8 mb-4 lg:flex gap-4">
        <!-- Header Block -->
        <div>
            <h1 class="text-primary-200 text-shadow italic">FRIDAY NIGHT FLICK</h1>
            <p>Let the kids flip and watch a flick one Friday each month!</p>
            <br />
            <p>We'll feature a HUGE projected movie in the gym after fun free play in the gym. Everyone will receive free popcorn, candy and juice to enjoy during the movie. It's like being in the theater but with all of your friends and lounging on comfy mats.</p>
            <br />
            <p>Register your child on our Parent Portal for the next year! After that, all you have to do is drop them off for a great time.</p>
            <br />
            <a type="button" class="btn bg-primary-600 dark:bg-primary-800 ps-5 pe-5" href="https://app.iclasspro.com/portal/enduranceelite/camps/4?selectedStudents=311"
                >FNF Registration</a
            >
        </div>
        <img
            class="container rounded-2xl w-[24rem] mt-4 lg:mt-0 object-cover"
            alt="Popcorn"
            src="$lib/Regular/SpecialEvents/fridaynightflick.jpg"
        />
    </div>

    <div class="container align-center justify-center p-4">
        <!-- Main Contents -->
        <div class="lg:flex">
            <div class="gap-4 neutral shadow-lg p-4 text-center">
                <!-- White Info Block -->
                <div class="bg-primary-200 dark:bg-primary-900 p-4">
                    <h3>2023 Friday Night Flicks</h3>
                    <hr />
                </div>
                {#each data.movies as {title, date}}
                    <div class="bg-primary-200 dark:bg-primary-900 p-4">
                        <h3>{title}</h3>
                        <h4>{date}</h4>
                        <hr />
                    </div>
                {/each}
            </div>

            <div>
                <div class="rounded-xl primary-500 h-fit shadow-2xl mx-4 mt-8 lg:mt-0 p-8">
                    <!-- Step Block -->
                    <span class="text-center  pr-4">
                        <h3>FNF INFORMATION:</h3>
                    </span>
                    <div class="md:flex">
                        <div class="w-11/12 px-4">
                            <!-- Left Side of Block -->
                            <p><b>*Movies are rated G, PG & PG-13</b></p>
                            <br/>

                            <p><b>Time:</b></p>
                            <p>7:00pm - 10:00pm</p>
                            <br />

                            <p><b>Ages:</b></p>
                            <p>3 & Up (Must be potty trained)</p>
                            <br />

                            <p><b>PRICE:</b></p>
                            <ul class="list-disc pl-6">
                                <li><p>$30 for Members</p></li>
                                <li><p>$40 for Non-Members</p></li>
                            </ul>
                            <br />

                            <p>FNF Payment is <b>NON-Refundable</b> (with a <span class="underline font-bold">24 hour</span> advanced notice: a credit may be given to use for another FNF). Credits will expire in 3 months.</p>
                        </div>
                        <div class="divider-vertical w-1 h-100% bg-neutral-600" />
                        <div class="w-11/12 pl-8  pr-4">
                            <!-- Right Side of Block -->
                            <p><b>FNF Includes:</b></p>
                            <ul class="list-disc pl-6">
                                <li><p>Open Gym Time</p></li>
                                <li><p>BIG Screen Projected Featured Movie</p></li>
                                <li><p>Popcorn</p></li>
                                <li><p>Candy</p></li>
                                <li><p>Juice</p></li>
                            </ul>
                            <br />

                            <p><b>What to Bring:</b></p>
                            <ul class="list-disc pl-6">
                                <li><p>Blanket, Pillow</p></li>
                                <li><p>Water Bottle</p></li>
                            </ul>
                            <br />

                            <a class="btn bg-primary-600 dark:bg-primary-800" href="https://app.iclasspro.com/portal/enduranceelite/camps/4?selectedStudents=311">Register for FNF</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
