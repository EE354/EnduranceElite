<script>
    export let text;
</script>

<button type="button" class="btn btn-primary">{text}</button>

<style>
    button {
        /* Positioning */
        position: absolute;
        z-index: 5;
    }

    .btn-primary {
        /* Default State */
        background-color: #1d7c83;
    }
</style>
