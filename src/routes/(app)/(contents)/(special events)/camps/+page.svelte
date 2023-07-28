<script>
    export let data;
</script>

<main>
    <div class="container text-center bg-primary-500 dark:bg-primary-900 p-8 mb-4 lg:flex gap-4">
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
            <br />
            <a type="button" class="btn bg-primary-600 dark:bg-primary-800 ps-5 pe-5" href="https://app.iclasspro.com/portal/enduranceelite/camps/1"
                >Camp Registration</a
            >
        </div>
        <img
            class="container rounded-2xl w-[24rem] mt-4 lg:mt-0 object-cover"
            alt="Kids Playing in the Foam Pit"
            src="$lib/Regular/SpecialEvents/camps.jpg"
        />
    </div>

    <div class="container align-center justify-center">
        <!-- Main Contents -->
        <div class="lg:flex">
            <div class="gap-4 neutral shadow-lg m-4 p-4 text-center">
                <!-- White Info Block -->
                <div class="bg-primary-200 dark:bg-primary-900 p-4">
                    <h3>2022-2023 Day Schedule</h3>
                    <h4>& Dates:</h4>
                    <hr />
                </div>
                {#each data.dayCamps as {title, date}}
                    <div class="bg-primary-200 dark:bg-primary-900 p-4">
                        <h3>{title}</h3>
                        <h4>{date}</h4>
                        <hr />
                    </div>
                {/each}
            </div>

            <div>
                <div class="rounded-xl primary-500 h-fit shadow-2xl m-4 p-8">
                    <!-- Step Block -->
                    <span class="text-center  pr-4">
                        <h3>DAY CAMP INFORMATION:</h3>
                    </span>
                    <div class="md:flex">
                        <div class="w-11/12 px-4">
                            <!-- Left Side of Block -->
                            <p><b>Ages 4-15</b></p>
                            <p>(Must be FULLY potty trained)</p>
                            <br />

                            <p><b>Camp Time:</b></p>
                            <ul class="list-disc pl-6">
                                <li><p>8:00 am - 6:00pm</p></li>
                                <li><p>Drop off and Pick up times are at your convenience (price will not be adjusted)</p></li>
                            </ul>
                            <br />

                            <p><b>PRICE:</b></p>
                            <ul class="list-disc pl-6">
                                <li class="underline"><p>Members</p></li>
                                <p>$50 a Day</p>
                                <li class="underline"><p>Non-Members</p></li>
                                <p>$65 a Day</p>
                            </ul>
                            <br />

                            <p><b>Discounts:</b></p>
                            <p>10% Off Siblings</p>
                            <br />

                            <p>Camp tuition is <b>NON-Refundable</b> (with a <span class="underline font-bold">24 hour</span> advanced notice: a credit may be given to use for another camp day). Camp credits will expire in 3 months.</p>
                        </div>
                        <div class="divider-vertical w-1 h-100% bg-neutral-600" />
                        <div class="w-11/12 pl-8  pr-4">
                            <!-- Right Side of Block -->
                            <p><b>Day Camp Includes:</b></p>
                            <ul class="list-disc pl-6">
                                <li><p>Open Gym Time to Work on Gymnastics Equipment</p></li>
                                <li><p>Gymnastics Challenges and Competitions</p></li>
                                <li><p>Snacks & Drinks (twice a day)</p></li>
                                <li><p>Gymnastics Obstacle Courses</p></li>
                                <li><p>Trampoline & Pit</p></li>
                            </ul>
                            <br />

                            <p><b>What to Bring:</b></p>
                            <ul class="list-disc pl-6">
                                <li><p>Lunch & Additional Snacks</p></li>
                                <li><p>Water Bottle</p></li>
                                <li><p>A change of clothes (just in case!)</p></li>
                            </ul>
                            <br />

                            <p><b>Caution:</b></p>
                            <ul class="list-disc pl-6">
                                <li><p>Please be aware that gymnastics is a fun and exciting sport, however, students are subject to injuries. All injuries are properly treated with first aid and/or professional aid.</p></li>
                            </ul>
                            <br />

                            <a class="btn bg-primary-600 dark:bg-primary-800" href="https://app.iclasspro.com/portal/enduranceelite/camps/1">Register for Camp</a>
                            <br />
                            <br />

                            <p>See Sampler Day Camp Schedule Below</p>
                        </div>
                    </div>
                </div>
                <div class="neutral text-center p-8">
                    <h4>Sample Day Camp Schedule</h4>
                <img class="container w-[24rem]" alt="Sample Day Camp Schedule" src="$lib/Regular/SpecialEvents/sample_day_camp_schedule.jpg">
                </div>
            </div>
        </div>

        <div class="lg:flex">
            <div class="gap-4 neutral shadow-lg m-4 p-4 text-center">
                <!-- White Info Block -->
                <div class="bg-primary-600 dark:bg-primary-900 p-4">
                    <h3>2023 Summer Camps</h3>
                    <h4>& Dates:</h4>
                    <hr />
                </div>
                {#each data.summerCamps as {title, date}}
                    <div class="bg-primary-600 dark:bg-primary-900 p-4">
                        <h3>{title}</h3>
                        <h4>{date}</h4>
                        <hr />
                    </div>
                {/each}
            </div>

            <div>
                <div class="rounded-xl primary-500 h-fit shadow-2xl m-4 p-8">
                    <!-- Step Block -->
                    <span class="text-center pr-4">
                        <h3>SUMMER CAMP INFORMATION:</h3>
                    </span>
                    <div class="md:flex">
                        <div class="w-11/12 px-4">
                            <!-- Left Side of Block -->
                            <p><b>Summer Camp Dates:</b></p>
                            <p>First Week: May 30, 2022</p>
                            <p>Last Week: Auguest 15, 2022</p>
                            <br />

                            <p><b>Ages 4-15</b></p>
                            <p>(Must be FULLY potty trained)</p>
                            <br />

                            <p><b>Camp Time:</b></p>
                            <ul class="list-disc pl-6">
                                <li><p>8:00 am - 6:00pm</p></li>
                                <li><p>Drop off and Pick up times are at your convenience (price will not be adjusted)</p></li>
                            </ul>
                            <br />

                            <p><b>SUMMER CAMP PRICE:</b></p>
                            <ul class="list-disc pl-6">
                                <li class="underline"><p>EARLY BIRD REGISTRATION</p></li>
                                <p>Members & Non-Members</p>
                                <p>$50 a Day</p>
                                <p>$215 for the Week</p>
                            </ul>
                            <br />

                            <ul class="list-disc pl-6">
                                <li class="underline"><p>REGULAR Camp Tuition (Starting May 1st)</p></li>
                                <p>Members & Non-Members</p>
                                <p>$55 a Day</p>
                                <p>$230 for the Week</p>
                                <br />
                                <p>Competitive Team Members</p>
                                <p>$35 a Day</p>
                                <p>$150 for the Week</p>
                            </ul>
                            <br />

                            <p>Camp tuition is <b>NON-Refundable</b> (with a <span class="underline font-bold">24 hour</span> advanced notice: a credit may be given to use for another camp day). Camp credits will expire in 3 months.</p>
                        </div>
                        <div class="divider-vertical w-1 h-100% bg-neutral-600" />
                        <div class="w-11/12 pl-8  pr-4">
                            <!-- Right Side of Block -->
                            <p><b>Summer Camp Includes:</b></p>
                            <ul class="list-disc pl-6">
                                <li><p>Open Gym Time to Work on Gymnastics Equipment</p></li>
                                <li><p>Gymnastics Challenges and Competitions</p></li>
                                <li><p>Snacks & Drinks (twice a day)</p></li>
                                <li><p>Gymnastics Obstacle Courses</p></li>
                                <li><p>Trampoline & Pit</p></li>
                                <li><p>Water Relays Outside (Water Activities every Wednesday)</p></li>
                            </ul>
                            <br />

                            <p><b>What to Bring:</b></p>
                            <ul class="list-disc pl-6">
                                <li><p>Lunch & Additional Snacks</p></li>
                                <li><p>Water Bottle</p></li>
                                <li><p>A change of clothes (just in case!)</p></li>
                                <li><p>Clothes, Shoes & a Towel to get wet in (Water Activities every Wednesday)</p></li>
                            </ul>
                            <br />

                            <p><b>Caution:</b></p>
                            <ul class="list-disc pl-6">
                                <li><p>Please be aware that gymnastics is a fun and exciting sport, however, students are subject to injuries. All injuries are properly treated with first aid and/or professional aid.</p></li>
                            </ul>
                            <br />

                            <h3>Register Early! Space is Limited!</h3>
                            <br/>

                            <a class="btn bg-primary-600 dark:bg-primary-800" href="https://app.iclasspro.com/portal/enduranceelite/camps/1">Register for Camp</a>
                            <br />
                            <br />

                            <p>See Sampler Summer Camp Schedule Below</p>
                        </div>
                    </div>
                </div>
                <div class="neutral text-center p-8">
                    <h4>Sample Summer Camp Schedule</h4>
                <img alt="Sample Summer Camp Schedule" src="$lib/Regular/SpecialEvents/sample_camp_schedule.jpg">
                </div>
            </div>
        </div>
    </div>
</main>
