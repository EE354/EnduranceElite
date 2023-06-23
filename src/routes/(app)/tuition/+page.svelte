<script>
    export let data;
</script>
<div class="container ">
    
    <div>
        <!-- Header Block -->
        <h1>Tuition</h1>
        <p>All classes and teams at Endurance Elite Gymnastics & Dance are paid monthly. Automatic payment through our Parent Portal is mandatory for registration into a class. Your child will be continuously enrolled and monthly tuition will be charged to your card on file. You never have to worry about pre-registration or losing your spot again! Listed below you will find our tuition rates, discounts & policies. Any addition class taken by a student or their immediate family member will receive a 10% discount on EVERY addition class (not just one!) Discounts are also available for Military families.Policies are subject to change, however, you will be notified via email through the parent portal.</p>
    </div>
    
    {#each data.cards as {title, description, subtitle1, subtitle2, subtitle3, subdesc1, subdesc2, subdesc3}}
            <div class="card container w-[600rem]">
                <h2 class="bg-primary-500">{title}</h2>
                <p class="col-span-3">{description}</p>
                <div class="flex">
                    <h4 class="bg-primary-500">{subtitle1}</h4>
                    <h4>{subtitle2}</h4>
                    <h4>{subtitle3}</h4>
                </div>
                <div class="flex">
                    <p>{subdesc1}</p>
                    <p>{subdesc2}</p>
                    <p>{subdesc3}</p>
                </div>
            </div>
    {/each}
    
        <!-- <h2 slot="title" style="font-size: 40px;">Membership Fee</h2>
        <p slot="body">An annual membership fee is collected from all students enrolled in classes. Benefits of Membership Fees include the ability to enroll in any class or program and discounts on Special Activities such as Open Gym, Parent’s Night Out, Friday Night Flick & Day Camps.</p>
        <h4 slot="subtitle1">Each Member Pays:</h4>
        <h4 slot="subtitle2">$45/Anually</h4>
        <p slot="subbody2">*Your annual registration will be charged on the 15th of the month you registered.</p>
        <p slot="subbody3">Annual registration fees are charged to the card on file. Annual registration fees are non-refundable</p> -->
</div>