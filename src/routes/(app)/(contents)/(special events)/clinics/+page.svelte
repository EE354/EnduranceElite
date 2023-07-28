<script>
    export let data;
</script>

<main>
    <div class="container text-center bg-primary-500 dark:bg-primary-900 p-8 mb-4 lg:flex gap-4">
        <!-- Header Block -->
        <div>
            <h1 class="text-primary-200 text-shadow italic">CLINICS</h1>
            <p>Work with an experienced, high level coach to focus on specific skills. Clinics are meant for additional practice in these skills whether it’s your first time learning them, or you’re a seasoned athlete needing to brush up on details but already familiar with the skill. Our professional staff will provide drills, exercises and spotting to better understand the skill and you’ll receive ample time performing and perfecting the skill.</p>
            <br />
            <p>Register through our Parent Portal!</p>
            <br />
            <a type="button" class="btn bg-primary-600 dark:bg-primary-800 ps-5 pe-5" href="https://app.iclasspro.com/portal/enduranceelite/camps/2"
                >Clinic Registration</a
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
            <div class="gap-4 neutral shadow-lg min-w-[20rem] p-4 text-center">
                <!-- White Info Block -->
                <div class="bg-primary-200 dark:bg-primary-900 p-4">
                    <h3>2023 Friday Night Flicks</h3>
                    <hr />
                </div>
                {#each data.clinics as {date, activity1, activity2}}
                    <div class="bg-primary-200 dark:bg-primary-900 p-4">
                        <h3>{date}</h3>
                        <h4>{activity1}</h4>
                        <h4>{activity2}</h4>
                        <hr />
                    </div>
                {/each}
            </div>

            <div>
                <div class="rounded-xl primary-500 h-fit shadow-2xl mx-4 mt-8 lg:mt-0 p-8">
                    <!-- Step Block -->
                    <span class="text-center  pr-4">
                        <h3>CLINIC INFORMATION:</h3>
                    </span>
                    <div class="md:flex">
                        <div class="w-11/12 px-4">
                            <!-- Left Side of Block -->

                            <p><b>DURATION:</b></p>
                            <p>1 Hour/Clinic</p>
                            <br />

                            <p><b>Ages:</b></p>
                            <p>5-17</p>
                            <p>All experience levels invited</p>
                            <br />

                            <p><b>PRICE:</b></p>
                            <p>Members/Non-Members</p>
                            <ul class="list-disc pl-6">
                                <li><p>$35 per Clinic</p></li>
                            </ul>
                            <br />
                        </div>
                        <div class="divider-vertical w-1 h-100% bg-neutral-600" />
                        <div class="w-11/12 pl-8  pr-4">
                            <!-- Right Side of Block -->
                            <p><b>PREREQUISITES:</b></p>
                            <p>It is imperative for the athlete to have the prerequisite skill before attending their desired clinic. For safety of the athlete, please follow the required skill guidelines. If none is listed, we encourage beginners to try it out!</p>
                            <br />

                            <p><b>*REGISTER</b> through the Parent Portal to reserve a spot.</p>
                            <br/>

                            <a type="button" class="btn bg-primary-600 dark:bg-primary-800 ps-5 pe-5" href="https://app.iclasspro.com/portal/enduranceelite/camps/2"
                                >Clinic Registration</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
