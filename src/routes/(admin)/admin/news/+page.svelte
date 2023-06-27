<script>
    import { FileDropzone } from '@skeletonlabs/skeleton';
</script>


<FileDropzone name="files">
    <svelte:fragment slot="lead">(icon)</svelte:fragment>
    <svelte:fragment slot="message">(message)</svelte:fragment>
    <svelte:fragment slot="meta">(meta)</svelte:fragment>
</FileDropzone>