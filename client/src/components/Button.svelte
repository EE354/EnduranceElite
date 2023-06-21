<script>
    export let text;
    export let href;
</script>

<a class="btn btn-primary btn-lg" {href} role="button">{text}</a>

<style>
    .btn-primary {
        /* Default State */
        background-color: #1d7c83;
        color: white;
    }
</style>
