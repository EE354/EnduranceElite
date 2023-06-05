<script>
    import Button from "../components/Button.svelte";
    import NewsItem from "../components/NewsItem.svelte";
    import SmallCard from "../components/SmallCard.svelte";
</script>

<main>
    <div class="container" id="block1">
        <!-- 1st Block of Contents -->
        <div class="text-button-container">
            <h1>Those Who Endure, Conquer</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                leo magna, mollis vel risus nec, commodo mollis libero.
            </p>
            <Button text={"Join"} />
        </div>
        <img
            alt="Arm Stretch"
            src="https://static.wixstatic.com/media/b16c48_d66ce05bc352402c8391f541205ef3f5~mv2.jpg/v1/fill/w_624,h_384,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/b16c48_d66ce05bc352402c8391f541205ef3f5~mv2.jpg"
        />
    </div>
    <div class="container division">
        <!-- 1st Divider : News Bar -->
        <div class="newsbar-header">
            <h2>News</h2>
            <div class="alignright">
                <button id="leftbutton">&lt;</button>
                <button id="rightbutton">&gt;</button>
            </div>
        </div>
        <div class="newsbar-wrapper">
            <!-- Wrapper for overflow -->
            <div class="newsbar-content">
                <NewsItem
                    date={"3/13-17/2023"}
                    title={"Spring Break Day Camp"}
                    body={"Join us for Spring Break Day Camp, March 13th-17th. Campers enjoy open free play, games, activities, crafts, movie and snacks with friends. See our camp page for more information. Space is limited."}
                />
                <NewsItem
                    date={"3/18/2023"}
                    title={"Parent’s Night Out"}
                    body={"Enjoy a night out and leave the kids with us. We provide pizza, juice, games, free play and a movie. PNO is from 6:00-10:00 pm."}
                />
                <NewsItem
                    date={"3/10/2023"}
                    title={"Friday Night Flick"}
                    body={"March FNF has been changed to March 10th. The kids get to participate in free play and enjoy popcorn, juice and candy while watching the flick on our large projected screen."}
                />
                <NewsItem
                    date={"3/5/2023"}
                    title={"Cheer Stunt & Tryout"}
                    body={"Starting Sunday, March 5th we will be offering Open Gym stunt and tryout prep to any and all cheerleaders. Please see flyer for details."}
                />
            </div>
        </div>
    </div>
    <div class="container">
        <!-- Card Block -->
        <div class="card-wrapper">
            <SmallCard
                alt={"Track with a Bouncy Castle"}
                src={"../../public/Images/Landing/birthdayparties.jpg"}
                title={"Gymanstics"}
                body={"We offer gymnastics classes to ages 1 year to Adults. From Babynastics to Girl's and Boy's Rec classes and finally to Adult classes, there is something for everyone! As soon as you can walk, we can teach you gymnastics!"}
                href={"/admin"}
            />
            <SmallCard
                alt={"Person doing a Handstand"}
                src={"../../public/Images/Landing/adultclasses.jpg"}
                title={"Adult Classes"}
                body={"Looking to try something new or keep up with your favorite sport? Check out our adult gymnastics and dance classes. No commitment necessary. Drop in for a $12 fee."}
                href={"/admin"}
            />
            <SmallCard
                alt={"Kid doing a T-pose"}
                src={"../../public/Images/Landing/samplerclasses.jpg"}
                title={"Sampler Classes"}
                body={"Take dance and gymnastics in ONE awesome class! We have Sampler BJG (Ballet, Jazz, Gymnastics) and BTG (Ballet, Tap, Gymnastics). Levels are based on experience. Half of the class is in the dance studio and half is out in the main gym. "}
                href={"/admin"}
            />
            <SmallCard
                alt={"Person doing a Flip"}
                src={"../../public/Images/Landing/opengym.jpg"}
                title={"Open Gym"}
                body={"Need extra time in the gym? Or do you just want to play on the equipment. Come to open gym! We offer supervision and a clean safe environment for everyone of all ages to play and enjoy. All ages are welcome!"}
                href={"/admin"}
            />
        </div>
    </div>
</main>

<style>
    .container {
        /* Positioning */
        margin-bottom: 12px;
    }

    .division {
        /* Divider */

        /* Positioning */
        padding: 28px;

        /* Properties */
        background-color: #35cad5;
    }

    .newsbar-header,
    .newsbar-content {
        /* Positioning */
        display: flex;
    }

    .newsbar-wrapper {
        /* Positioning */
        display: flex;
        /* For overflow scroll horizontally */
        overflow-x: auto;
    }

    .newsbar-wrapper::-webkit-scrollbar {
        /* Hide scroll bar */
        width: 0;
    }

    .alignright {
        /* Positioning */
        display: flex;
        margin-left: auto;
        margin-right: 0;
    }

    .card-wrapper {
        /* Card Wrapper */

        /* Positioning */
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 12px;
    }

    @media (min-width: 992px) {
        #block1 {
            /* Container for Block 1 Contents */

            /* Positioning */
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-top: 12px;
            padding: 0px;
            gap: 46px;
            position: auto;
            left: 50%;

            /* Properties */
            overflow: hidden;
        }

        #block1 img {
            /* Big Image in Block1 Content Container */

            /* Dimensions */
            width: 500px;
            height: 500px;

            /* Properities */
            object-fit: cover;
            border-radius: 24px;
        }
    }
</style>
