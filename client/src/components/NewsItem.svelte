<script>
    export let date;
    export let title;
    export let body;
</script>

<div class="news-item">
    <p><b>{date}</b></p>
    <h3>{title}</h3>
    <p>{body}</p>
</div>

<style>

    p {
       margin-bottom: 4px; 
    }
    .news-item {
        /* News Item */

        /* News Card */

        /* Positioning */
        padding: 1em;
        margin-right: 8px;

        /* Dimensions */
        width: 394px;
        height: 280px;


        /* Inside auto layout */

        flex: none;
        order: 0;
        flex-grow: 0;

        background: #EEECE8;
        border-radius: 30px;
    }
</style>