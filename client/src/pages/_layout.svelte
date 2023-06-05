<script>
    import NavBar from "../components/NavBar.svelte";

</script>

<!-- routify:options preload="proximity" -->

<main>
    <div>
        <NavBar />
    </div>
    <slot />
</main>

<style>
    main {
        display: flex;
        justify-content: center;
        flex-direction: column;
        
    }
</style>

