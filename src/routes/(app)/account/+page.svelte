<script>
    export let data;

    let search;

    $: searchedGroups = data.groups.filter(group => {
        if (search != null ) {
            return group.name.toLowerCase().includes(search.toLowerCase());
        } 
        return data.groups;
    })

    $: console.log(search);
</script>
<div class="container m-4 ml-8">
    <div class="container mb-4">
        <h1>Account Dashboard</h1>
        <p>Logged In As {data.user.name.first} {data.user.name.last}</p>
        <form method="POST" action="?/logout" class="mt-4">
            <button type="submit" value="" class="btn variant-filled-error">Logout</button>
        </form>
    </div>

    <!-- List of Groups -->
    <div class="card container flex flex-col h-[36rem] overflow-y-auto gap-10 p-10 m-4 bg-primary-500">
        <h2>Join Groups!</h2>
        <input bind:value={search} class="input" type="search" placeholder="Search Groups..."/>
        {#each searchedGroups as group}
            <div class="card container p-4 shadow-lg">
                <h4>{group.name}</h4>
                <p>{group.description}</p>
                <button type="submit" class="btn bg-primary-600">Join</button>
            </div>
        {/each}
    </div>

</div>


