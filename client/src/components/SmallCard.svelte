<script>
    import Button from "./Button.svelte";

    export let alt;
    export let src;
    export let title;
    export let body;
    export let href;
</script>

<div id="box-outline">
    <div id="content-container">
        <div id="square-image">
            <img {alt} {src} />
        </div>
        <div id="contents">
            <div id="text">
                <h4>{title}</h4>
                <p>{body}</p>
            </div>
            <div>
                <Button text={"Details"} href={href} />
            </div>
        </div>
    </div>
</div>

<style>
    #box-outline {
        /* State=Default */

        box-sizing: border-box;

        /* Auto layout */

        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 24px;
        gap: 24px;

        width: 624px;
        height: 320px;
        left: 20px;
        top: 20px;

        /* White */

        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.08);
        border-radius: 16px;

    }

    #content-container {
        /* Frame 45 */

        /* Auto layout */

        display: flex;
        flex-direction: row;
        gap: 18px;

        width: 570px;
        height: 272px;
    }

    #square-image {
        /* Dimensions */
        width: 282px;
        height: 272px;

        border-radius: 16px;
        background-color: black;
    }

    #contents {
        /* Dimensions */
        width: 270px;
    }

    #text, #contents{
        /* Positioning */
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
</style>
