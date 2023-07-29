<script>
    export let data;
</script>
<main>
    <div class="container text-center bg-primary-500 dark:bg-primary-900 p-8 lg:flex gap-4">
        <!-- Header Block -->
        <div>
            <h1 class="text-primary-200 text-shadow italic">BIRTHDAY PARTIES</h1>
            <p>All classes and teams at Endurance Elite Gymnastics & Dance are paid monthly. Automatic payment through our Parent Portal is mandatory for registration into a class. Your child will be continuously enrolled and monthly tuition will be charged to your card on file. You never have to worry about pre-registration or losing your spot again!</p>
            <br />
            <p>Listed below you will find our tuition rates, discounts & policies. Any addition class taken by a student or their immediate family member will receive a 10% discount on EVERY addition class (not just one!) Discounts are also available for Military families.</p>
            <p>Policies are subject to change, however, you will be notified via email through the parent portal.</p>
            <br />
            <a type="button" class="btn bg-primary-600 dark:bg-primary-800 ps-5 pe-5" href="https://app.iclasspro.com/portal/enduranceelite"
                >Parent Portal Login</a
            >
        </div>
        <img
            class="container rounded-2xl w-[24rem] mt-4 lg:mt-0 object-cover"
            alt="A Happy Kid"
            src="$lib/Regular/About/tuition.jpg"
        />
    </div>
        
    <div class="container flex flex-wrap gap-8 p-4 py-8 justify-center">
        <!-- Card Block -->
        {#each data.cards as {title, description, header1, header2, header3, note1, note2, note3}}
                <div class="card container bg-neutral-100 shadow-lg w-[40rem] min-h-[24rem] md:grid grid-flow-row-dense grid-cols-3 p-8">
                    <h2 class="col-span-3 text-4xl text-primary-800 mb-4">{title}</h2>
                    <p class="col-span-3 mb-4">{description}</p>
                    <div class="mb-4">
                        <h4 class="md:h-16">{header1}</h4>
                        <p>{note1}</p>
                    </div>
                    <div class="mb-4">
                        <h4 class="md:h-16">{header2}</h4>
                        <p>{note2}</p>
                    </div>
                    <div class="mb-4">
                        <h4 class="md:h-16">{header3}</h4>
                        <p>{note3}</p>
                    </div>
                </div>
        {/each}
    </div>
</main>