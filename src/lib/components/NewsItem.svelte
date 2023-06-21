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
    .news-item {
        /* News Item */

        /* Positioning */
        padding: 1em;
        margin-right: 8px;

        /* Dimensions */
        width: 360px;
        height: 260px;

        /* Properties */
        background: #eeece8;
        border-radius: 30px;
    }
</style>
