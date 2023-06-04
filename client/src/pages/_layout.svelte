<script>
    import NavBar from "../components/NavBar.svelte";

</script>

<!-- routify:options preload="proximity" -->

<main>
    <NavBar />
    <slot />
</main>

<style>
    main {
        width: 1440px;
    }
</style>

