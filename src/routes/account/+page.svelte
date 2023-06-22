<script>
    export let data;

</script>

<h1>
    Welcome {data.user.name.first} {data.user.name.last} to the account dashboard
</h1>

<form method="POST" action="?/logout">
    <button type="submit" class="btn variant-filled-error">Logout</button>
</form>


