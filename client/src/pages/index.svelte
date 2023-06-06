<script>
    import Bar from "../components/Bar.svelte";
    import Button from "../components/Button.svelte";
    import NavBar from "../components/NavBar.svelte";
</script>

<main>
    <NavBar/>
    <div id="block1">
        <!-- 1st Block of Contents -->
        <div class="content-container">
            <div class="text-button-container">
                <h1>Those Who Endure, Conquer</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris leo magna, mollis vel risus nec, commodo mollis
                    libero.
                </p>
                <Button text={"Join"} />
            </div>
            <img
                alt="Arm Stretch"
                src="https://static.wixstatic.com/media/b16c48_d66ce05bc352402c8391f541205ef3f5~mv2.jpg/v1/fill/w_624,h_384,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/b16c48_d66ce05bc352402c8391f541205ef3f5~mv2.jpg"
            />
        </div>
    </div>
    <div id="background">
        <!-- Background Contents-->
        <Bar />
    </div>
</main>

<style>
    #block1 {
        /* Block 1 */

        /* Positioning */
        position: absolute;
        z-index: 3;
    }

    @media (min-width: 992px) {
        #block1 .content-container {
            /* Container for Block 1 Contents */

            /* Positioning */
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0px;
            gap: 46px;
            position: auto;
            left: 50%;

            /* Properties */
            border-radius: 24px;
            overflow: hidden;
        }

        .content-container img {
            /* Big Image in Block1 Content Container */

            /* Dimensions */
            width: 701.59px;
            height: 679.55px;

            /* Properities */
            object-fit: cover;
            border-radius: 24px;

        }
    }
</style>
