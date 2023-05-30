<script>
    import Bar from "../components/Bar.svelte"
    import Button from "../components/Button.svelte"
</script>

<main>
    <div id="front">
        <div class="container">
            <h1>Those Who Endure, Conquer</h1>
            <img class="bigimage" alt="Arm Stretch" src="https://static.wixstatic.com/media/b16c48_d66ce05bc352402c8391f541205ef3f5~mv2.jpg/v1/fill/w_624,h_384,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/b16c48_d66ce05bc352402c8391f541205ef3f5~mv2.jpg">
        </div>
    </div>
    <Bar/>
    <Button text={"Join"}/>

    <p>
        Homepage
    </p>
</main>

<style>

    #front {
        position: absolute;
        z-index: 3;
    }

    @media (min-width: 992px) {

        .bigimage {

            border-radius: 24px;


            width: 701.59px;

            flex: none;

        }

        .container {

            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0px;
            gap: 46px;
            border-radius: 24px;
            overflow: hidden;

            /* Center */
            position: fixed;
            left: 50%;
            transform: translateX(-50%);


        }

        .container img {
            width: 100%;
            height: 679.55px;
            object-fit: cover;
        }
    }
</style>

