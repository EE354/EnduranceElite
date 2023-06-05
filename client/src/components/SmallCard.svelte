<script>
    import Button from "./Button.svelte";

    export let alt;
    export let src;
    export let title;
    export let body;
    export let href;
</script>

<div class="container" id="box-outline">
    <div id="content-container">
        <img {alt} {src} />
        <div id="contents">
            <div id="text">
                <h4>{title}</h4>
                <p>{body}</p>
            </div>
            <div id="bottom">
                <Button text={"Details"} {href} />
            </div>
        </div>
    </div>
</div>

<style>
    #box-outline {
        /* Outer Box Outline for Smaller Screens */

        /* Positioning */
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 24px;

        /* Dimensions */
        width: 320px;
        height: 624px;

        /* Properties */
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.08);
        border-radius: 16px;
    }

    img {
        /* Image */

        /* Dimensions */
        width: 282px;
        height: 272px;

        /* Properities */
        object-fit: cover;
        border-radius: 16px;
    }

    #contents {
        /* Dimensions */
        width: 270px;
    }

    #contents,
    #text {
        /* Contents & Text */

        /* Positioning */
        display: flex;
        flex-direction: column;
    }

    #bottom {
        /* Move Button to Buttom of Card */
        height: fill;
    }

    @media (min-width: 600px) {
        #box-outline {
            /* Outer Box Outline for Bigger Screens */

            /* Positioning */
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 24px;
            gap: 24px;

            left: 20px;
            top: 20px;

            /* Dimensions */
            width: 624px;
            height: 320px;

            /* Properties */
            background: #ffffff;
            border: 1px solid rgba(0, 0, 0, 0.08);
            border-radius: 16px;
        }

        #content-container {
            /* Content Container */

            /* Positioning */
            display: flex;
            flex-direction: row;
            gap: 18px;

            /* Dimensions */
            width: 570px;
            height: 272px;
        }
    }
</style>
