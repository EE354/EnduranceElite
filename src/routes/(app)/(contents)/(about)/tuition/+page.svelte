<script>
    export let data;
</script>
<main class="bg-[url('$lib/Regular/background.jpg')] bg-secondary-500">
    <div class="container">
        
        <div class="container text-center bg-primary-500 dark:bg-primary-900 p-4 flex">
            <!-- Header Block -->
            <div>
                <h1>Tuition</h1>
                <p>All classes and teams at Endurance Elite Gymnastics & Dance are paid monthly. Automatic payment through our Parent Portal is mandatory for registration into a class. Your child will be continuously enrolled and monthly tuition will be charged to your card on file. You never have to worry about pre-registration or losing your spot again! Listed below you will find our tuition rates, discounts & policies. Any addition class taken by a student or their immediate family member will receive a 10% discount on EVERY addition class (not just one!) Discounts are also available for Military families.Policies are subject to change, however, you will be notified via email through the parent portal.</p>
                <a type="button" class="btn bg-primary-600 dark:bg-primary-900 ps-5 pe-5" href="/">Parent Portal</a>
            </div>
            <img 
                class="rounded-2xl w-[16rem] max-h-[16rem] object-cover"
                alt=""
                src="$lib/Regular/tuition.jpg"
            >
        </div>
        
        <div class="container flex flex-wrap justify-center">

        {#each data.cards as {title, description, header1, header2, header3, note1, note2, note3}}
                <div class="card container bg-neutral-100 shadow-lg w-[40rem] min-h-[24rem] grid grid-flow-row-dense grid-cols-3 m-4 p-4">
                    <h2 class="col-span-3 text-4xl text-primary-800">{title}</h2>
                    <p class="col-span-3">{description}</p>
                    <h4 class="">{header1}</h4>
                    <h4>{header2}</h4>
                    <h4>{header3}</h4>
                    <p>{note1}</p>
                    <p>{note2}</p>
                    <p>{note3}</p>
                </div>
        {/each}
        </div>
    </div>
</main>