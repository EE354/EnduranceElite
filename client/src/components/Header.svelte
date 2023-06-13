<script>
    export let alt;
    export let src;
</script>

<div id="container">
    <div id="text-box">
        <div id="title"><slot name="title"></slot></div>
        <div id="body"><slot name="body"></slot></div>
    </div>
    <div id="image"><img alt="{ alt }" src="{ src }"></div>
</div>

<style>
    #title {
        grid-column: 1;
        grid-row: 1;
    }

    #body {
        grid-column: 1;
        grid-row: 2;
    }
    
    #image {

        /* Positioning */
        grid-column: 2;
        grid-row-start: 1;
        grid-row-end: 2;

        position: relative;
        overflow: hidden;
        border-radius: 50% 0 0 50%;
    }

    img {
        display: inline;
        margin: 0 auto;
        height: 100%;
        width: auto;
    }

    #container {
        display: grid;
        gap: 50px;
        max-width: 1440px;

        background-color: #35CAD5;
    }
</style>