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
    <h1>
        Welcome {data.user.name.first} {data.user.name.last} to the account dashboard
    </h1>

    <form method="POST" action="?/logout" class="mt-4">
        <button type="submit" value="" class="btn variant-filled-error">Logout</button>
    </form>

    <!-- List of Groups -->
    <div class="card container flex flex-col h-[36rem] overflow-y-auto gap-10 p-10 bg-primary-500">
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


