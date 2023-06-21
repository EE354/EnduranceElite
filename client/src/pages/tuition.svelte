<script>
    import Header from "../components/Header.svelte";
    import NavBar from "../components/NavBar.svelte";
    import BigCard from "../components/BigCard.svelte";
</script>

<NavBar/>
<Header alt="Baby on a Mat" src="Images/Regular/tuition.jpg">
    <h1 slot="title">Tuition</h1>
    <p slot="body">All classes and teams at Endurance Elite Gymnastics & Dance are paid monthly. Automatic payment through our Parent Portal is mandatory for registration into a class. Your child will be continuously enrolled and monthly tuition will be charged to your card on file. You never have to worry about pre-registration or losing your spot again! Listed below you will find our tuition rates, discounts & policies. Any addition class taken by a student or their immediate family member will receive a 10% discount on EVERY addition class (not just one!) Discounts are also available for Military families.Policies are subject to change, however, you will be notified via email through the parent portal.</p>
</Header>

<div class="container">
    <BigCard>
        <h2 slot="title" style="">Membership Fee</h2>
        <p slot="body">An annual membership fee is collected from all students enrolled in classes. Benefits of Membership Fees include the ability to enroll in any class or program and discounts on Special Activities such as Open Gym, Parent’s Night Out, Friday Night Flick & Day Camps.</p>
        <h4 slot="subtitle1">Each Member Pays:</h4>
        <h4 slot="subtitle2">$45/Anually</h4>
        <p slot="subbody2">*Your annual registration will be charged on the 15th of the month you registered.</p>
        <p slot="subbody3">Annual registration fees are charged to the card on file. Annual registration fees are non-refundable</p>
    </BigCard>
    <BigCard>
        <h2 slot="title">Gymnastics, Tumbling, Ninja, Cheer & Sampler Classes</h2>
        <p slot="body">AUTOMATIC TUITION: Monthly tuition will be processed every 1st of the month for that month's tuition. Tuition will be automatically charged unless you've dropped the class before the end of the month. Tuition CAN NOT be substituded with makeup tokens. Late fees apply to tuition that is not paid by the 1st of the month.</p>
        <h4 slot="subtitle1">Preschool Class <br>45 Minutes</h4>
        <h4 slot="subtitle2">Recreational Class <br> 1 Hour</h4>
        <h4 slot="subtitle3">Recreational Class <br> 1.5 Hours</h4>
        <p slot="subbody1">$87/Month</p>
        <p slot="subbody2">$95/Month</p>
        <p slot="subbody3">$128/Month</p>
    </BigCard>
    <BigCard>
        <h2 slot="title" style="text-size: 40px">Dance Classes</h2>
        <p slot="body">AUTOMATIC TUITION: Monthly tuition will be processed every 1st of the month for that month's tuition. Tuition will be automatically charged unless you've dropped the class before the end of the month. Tuition CAN NOT be substituded with makeup tokens. Late fees apply to tuition that is not paid by the 1st of the month.</p>
        <h4 slot="subtitle1">Preschool Class 45 Minutes</h4>
        <h4 slot="subtitle2">Recreational Class 1 Hour</h4>
        <p slot="subbody1">$54/Month</p>
        <p slot="subbody2">$65/Month</p>
    </BigCard>
    <BigCard>
        <h2 slot="title" style="text-size: 40px">Adult Classes</h2>
        <p slot="body">No monthly tuitions for Adult Classes.</p>
        <h4 slot="subtitle1">Drop In</h4>
        <h4 slot="subtitle2">Adult 11-Class Punch Card</h4>
        <p slot="subbody1">$12/Class (No Annual Registration Fee Required)</p>
        <p slot="subbody2">$120 for 11-Visits (No Annual Registration Fee Required)</p>
        <p slot="subbody3">*Free Trials do not apply to Adult Drop-In Classes</p>
    </BigCard>
    <BigCard>
        <h2 slot="title" style="text-size: 40px">Discounts</h2>
        <p slot="body">A 10% discount is applied to students that enrolls in addition classes in either gymnastics or dance. Immediate family members and military families also receive a 10% discount. Military families must notify the office after registering online to receive the discount.</p>
        <h4 slot="subtitle1">Trial Class</h4>
        <h4 slot="subtitle2">Sibling & Military</h4>
        <h4 slot="subtitle3">Additional Classes</h4>
        <p slot="subbody1"><bold>FREE</bold></p>
        <p slot="subbody2">10% Off</p>
        <p slot="subbody3">10% Off</p>
    </BigCard>
    <BigCard>
        <h2 slot="title" style="text-size: 40px">Late Fees</h2>
        <p slot="body">Tuition will automatically be charged on the 1st of each month. Tuition must be paid in order to keep your spot in a class. Classes are reserved for paying customers only. Late fees are NON-REFUNDABLE. Emails and texts are sent to notify any balance due. Please keep track of your card on file to make sure it's up to date. Late fees will apply as follows:</p>
        <h4 slot="subtitle1">5th of the Month</h4>
        <h4 slot="subtitle2">10th of the Month</h4>
        <h4 slot="subtitle3">15th of the Month</h4>
        <p slot="subbody1">$15 Late Fee</p>
        <p slot="subbody2">$20 Late Fee</p>
        <p slot="subbody3">Automatic Drop from the Class (losing makeup tokens)</p>
    </BigCard>
</div>

<style>
    .container {
        display: grid;
        grid-template-columns: auto auto;
    }
    h4 {
        overflow-wrap: break-word;
    }
</style>