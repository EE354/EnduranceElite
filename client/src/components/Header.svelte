<script>
    export let alt;
    export let src;
</script>

<div class="container master">
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

        text-align: center;
    }

    #body {
        grid-column: 1;
        grid-row: 2;
        
        text-align: center;
    }
    
    #image {

        /* Positioning */
        grid-column: 2;
        grid-row-start: 1;
        grid-row-end: 2;

        position: relative;
        overflow: hidden;

        width: auto;
        
        border-radius: 50% 0 0 50%;
    }

    img {
        display: inline;
        margin: 0 auto;

        width: 700px;
        height: 500px;
        object-fit: cover;
    }

    .master {
        display: grid;
        padding: 48px 0 48px 48px;

        max-width: 1440px;
        height: 614px;

        background-color: #35CAD5;
    }

</style>