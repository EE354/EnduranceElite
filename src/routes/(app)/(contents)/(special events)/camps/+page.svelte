<script>
    export let data;
</script>

<main class="bg-secondary-500 bg-[url('$lib/Regular/background.jpg')]">
    <div class="text-center bg-primary-500 dark:bg-primary-900 p-4 mb-4 lg:flex gap-4">
        <!-- Header Block -->
        <div>
            <h1 class="text-primary-200 text-shadow italic">CAMPS</h1>
            <p>
                Camps are provided for children ages 4-15 years of age. Campers unable to attend the entire week of camp may sign up for individual days. All camps are themed with related actives, challenges and contests.
            </p>
            <br />
            <p>
                Campers should bring a sack lunch with them everyday, as well as any snacks specific to their needs. Endurance Elite will provide snacks and a juice to every camper daily. Any allergens should be provided when registering. Campers are not required to eat the snacks provided for them. Please bring personal snacks if you have specific needs.
            </p>
            <br />
            <p>Please Note: We are NOT a licensed Child Care Facility.</p>
            <br />
            <p>You can register online with our Parent Portal.</p>
            <br />
            <p>Happy Camping!!!</p>
            <a type="button" class="btn bg-primary-600 dark:bg-primary-900 ps-5 pe-5" href="https://app.iclasspro.com/portal/enduranceelite/camps/1"
                >Camp Registration</a
            >
        </div>
        <img
            class="container rounded-2xl w-[24rem] mt-4 lg:mt-0 object-cover"
            alt="Kids Playing in the Foam Pit"
            src="$lib/Regular/SpecialEvents/camps.jpg"
        />
    </div>

    <div class="container md:flex align-center justify-center">
        <!-- Main Contents -->
        <div class="gap-4 bg-neutral-100 shadow-lg m-4 p-4 text-center">
            <!-- White Info Block -->
            <div class="bg-primary-200 p-4">
                <h3>2022 Fall Schedule</h3>
                <h4>Starting August 8, 2022</h4>
            </div>
            {#each data.dayCamps as {title, date}}
                <div class="bg-primary-200 p-4">
                    <h3>{title}</h3>
                    <h4>{date}</h4>
                    <hr>
                </div>
            {/each}
        </div>

        <div class="card bg-primary-500 shadow-lg m-4 p-4">
            <!-- Step Block -->
            <span class="text-center"><h3>OPEN GYM INFORMATION:</h3></span>
            <div class="md:flex">
                <div class="w-11/12">
                    <!-- Left Side of Block -->
                    <p class="underline">PRICES:</p>

                    <p><b>1 Hour Lil' Foot Open Gym</b></p>
                    <ul>
                        <li>$5 for Members</li>
                        <li>$50 Member Punch Card (11 Visits)</li>
                        <li>$8 for Non-Members</li>
                        <li>$80 Non-Member Punch Card (11 Visits)</li>
                    </ul>
                    <br>

                    <p><b>2 Hour Open Gym- All Ages</b></p>
                    <ul>
                        <li>$10 for Members</li>
                        <li>$100 Member Punch Card (11 Visits)</li>
                        <li>$15 for Non-Members</li>
                        <li>$150 Non-Member Punch Card (11 Visits)</li>
                    </ul>
                    <br>

                    <p><b>2 Hour Adult Open Gym</b></p>
                    <ul>
                        <li>$10 for Members</li>
                        <li>$100 Member Punch Card (11 Visits)</li>
                        <li>$15 for Non-Members</li>
                        <li>$150 for Non-Member Punch Card (11 Visits)</li>
                    </ul>
                    <br>
                </div>
                <div class="divider-vertical w-1 h-100% bg-neutral-600 ml-1 mr-12" />
                <div class="w-11/12">
                    <!-- Right Side of Block -->
                    <p class="underline">How to Register for a TRIAL class:</p>
                    <ul>
                        <li>Foam Pit</li>
                        <li>Use of Most Gymnastics Equipment</li>
                        <li>Ninja Warrior Obstacle Course</li>
                        <li>Aerial Silks</li>
                        <li>Dance Studio Space</li>
                        <li>Baby Gym (Lil' Foot ONLY)</li>
                        <li>Coach Supervision</li>
                    </ul>
                    <br />

                    <p>*Coaches will NOT spot students during Open Gym. Open gym is designed for free play, not class time.</p>
                    <br />
                    <p>Children ages 14 years and younger should be accompanied by an adult in the building. Please do not drop off. Participation is not required.</p>
                    <br />
                    <p class="underline text-bold">All participants must create a parent portal before attending.</p>
                </div>
            </div>
        </div>
    </div>
</main>
