<script>
    export let data;
</script>
<div class="container">
    
    <div class="container text-center bg-primary-500 p-4 flex">
        <!-- Header Block -->
        <div>
            <h1>Tuition</h1>
            <p>All classes and teams at Endurance Elite Gymnastics & Dance are paid monthly. Automatic payment through our Parent Portal is mandatory for registration into a class. Your child will be continuously enrolled and monthly tuition will be charged to your card on file. You never have to worry about pre-registration or losing your spot again! Listed below you will find our tuition rates, discounts & policies. Any addition class taken by a student or their immediate family member will receive a 10% discount on EVERY addition class (not just one!) Discounts are also available for Military families.Policies are subject to change, however, you will be notified via email through the parent portal.</p>
            <a type="button" class="btn bg-primary-600 dark:bg-primary-900 ps-5 pe-5" href="">Parent Portal</a>
        </div>
        <img 
            class="rounded-2xl w-[16rem] max-h-[16rem] object-cover"
            alt=""
            src="$lib/Regular/tuition.jpg"
        >
    </div>
    
    <div class="container flex flex-wrap">

    {#each data.cards as {title, description, header1, header2, header3, note1, note2, note3}}
            <div class="card container w-[40rem] min-h-[24rem] grid grid-flow-row-dense grid-cols-3 m-4 p-4">
                <h2 class="col-span-3 text-4xl">{title}</h2>
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

        <!-- <h2 slot="title" style="font-size: 40px;">Membership Fee</h2>
        <p slot="body">An annual membership fee is collected from all students enrolled in classes. Benefits of Membership Fees include the ability to enroll in any class or program and discounts on Special Activities such as Open Gym, Parent’s Night Out, Friday Night Flick & Day Camps.</p>
        <h4 slot="subtitle1">Each Member Pays:</h4>
        <h4 slot="subtitle2">$45/Anually</h4>
        <p slot="subbody2">*Your annual registration will be charged on the 15th of the month you registered.</p>
        <p slot="subbody3">Annual registration fees are charged to the card on file. Annual registration fees are non-refundable</p> -->
</div>