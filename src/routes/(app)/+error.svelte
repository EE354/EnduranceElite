<script>
    import { page } from '$app/stores';
</script>

<main class="container flex justify-center h-screen">
    <div class="container flex flex-col justify-center">
        <h1>{$page.status}</h1>
        <h3>{$page.error.message}</h3>
        <p>Click <a href="/">here</a> to return home</p>
    </div>
</main>
