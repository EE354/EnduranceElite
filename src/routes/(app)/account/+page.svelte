<script>
    export let data;

</script>
<div class="container m-4 ml-8">
    <h1>
        Welcome {data.user.name.first} {data.user.name.last} to the account dashboard
    </h1>

    <form method="POST" action="?/logout" class="mt-4">
        <button type="submit" class="btn variant-filled-error">Logout</button>
    </form>

</div>


