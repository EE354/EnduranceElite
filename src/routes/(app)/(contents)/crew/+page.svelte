<script>
    import { Avatar } from '@skeletonlabs/skeleton';
</script>

{#each data.avatars as {src, name, roles, initials}}
    <Avatar src="" width="w-32" rounded="rounded-full" initials=""/>
    <h3>{name}</h3>
    <p>{roles}</p>
{/each}