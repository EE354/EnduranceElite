<script>
    let email = "";
    let password = "";

</script>

<main>
    <div>
        <h1>Sign In</h1>
        <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
                <input type="text" class="form-control-plaintext" id="staticEmail" bind:value={email}>
            </div>
        </div>
        <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword" bind:value={password}>
            </div>
        </div>
    </div>

</main>

<style>

</style>